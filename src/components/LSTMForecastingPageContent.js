import React, { useState, useEffect } from 'react';
import '../styles/forecasting-page-content.css';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LSTMForecastingPageContent = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [days, setDays] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [originalData, setOriginalData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [forecastRaw, setForecastRaw] = useState([]);

    useEffect(() => {
        // Load originalData from btc_data.csv
        fetch('/btc_data.csv')
            .then(res => res.text())
            .then(text => {
                // Parse CSV
                const lines = text.split('\n');
                const header = lines[0].split(',');
                const dateIdx = header.indexOf('Date');
                const valueIdx = header.indexOf('Close');
                const data = lines.slice(1)
                    .map(line => line.split(','))
                    .filter(cols => cols.length > Math.max(dateIdx, valueIdx))
                    .map(cols => ({
                        date: cols[dateIdx],
                        value: parseFloat(cols[valueIdx])
                    }))
                    .filter(row => row.date >= '2019-05-01' && row.date <= '2019-05-29');
                setOriginalData(data);
            });
    }, []);

    const handleStart = () => {
        setShowFilter(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const numDays = parseInt(days, 10);

        // Fetch forecastData from API
        const apiUrl = `http://127.0.0.1:8000/api/model-forecast/lstm/?forecast_days=${numDays}`;
        const apiRes = await fetch(apiUrl);
        const apiJson = await apiRes.json();

        // Save raw response for table
        setForecastRaw(apiJson);

        // forecastData: use Predicted values, label dates as Day 1, Day 2, ...
        const forecast = apiJson.map((item) => ({
            date: `Day ${item.index}`,
            value: parseFloat(item.y_pred_test)
        }));

        setForecastData(forecast);
        setSubmitted(true);
    };

    return (
        
        <div>
        
        <br></br>
        <br></br>
        <br></br>
        {/* Add the new class here */}
        <div className="forecasting-page-container">
            <h1 className="forecasting-title">Forecasting Dashboard</h1>
            {/* Initial description wrapped in a specific container with 10 lines */}
            <div className="forecasting-description-panel">
                <p>Forecasting helps in predicting future outcomes.It is based on historical data and observed trends.
                Accurate forecasting drives strategic decisions. This tool provides a user-friendly interface.
                Interactive controls allow custom parameter setup. You can define the forecast duration easily.</p>
                <p>Advanced statistical methods power our predictions. Real-time data processing ensures up-to-date results.
                Visualizations simplify data analysis. Prepare for the future with confidence.</p>
                <p>Interactive controls allow custom parameter setup, and you can easily define the forecast duration.
                Advanced statistical methods power our predictions, and real-time data processing ensures up-to-date results.
                Visualizations simplify data analysis, empowering you to prepare for the future with confidence.</p>
                <p>Our forecasting solution seamlessly integrates with your existing systems, making data import effortless. 
                Its intuitive design ensures that even complex analyses are accessible to all users, regardless of their 
                technical expertise. You can easily export customized reports for presentations or further analysis, sharing insights across your organization with ease.</p>

                <button className="description-start-button" onClick={handleStart}>Start Forecasting</button>
            </div>
            {/* Filter form */}
            {showFilter && !submitted && (
                <div className="forecasting-filter-overlay">
                    <div className="forecasting-filter-modal">
                        <button
                            className="forecasting-filter-close"
                            onClick={() => setShowFilter(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2>Predict Bitcoin Prices</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="forecast-days">Number of days to predict:</label>
                            <input
                                id="forecast-days"
                                type="number"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                placeholder="Enter number of days"
                                required
                                min={1}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            {/* Display Table and Graph once submitted */}
            {submitted && (
                <div>
                    {/* Table */}
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>CSV</th>
                                <th>Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forecastRaw.map((item, index) => (
                                <tr key={index}>
                                    <td>{`Day ${item.index}`}</td>
                                    <td>{item.y_true_test}</td>
                                    <td>{item.y_pred_test}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Styled graph section */}
                    <div className="forecasting-graph-container">
                        <div className="forecasting-graph-title">Bitcoin Price Prediction Graph</div>
                        <ForecastChart
                            originalData={originalData}
                            forecastData={forecastData}
                            forecastRaw={forecastRaw}
                        />
                        <div className="forecasting-legend-item">
							<div className="forecasting-legend-color forecasting-csv-color"></div>
							<span>Original Values</span>
						</div>
						<div className="forecasting-legend-item">
							<div className="forecasting-legend-color forecasting-actual-color"></div>
							<span>Actual Values</span>
						</div>
						<div className="forecasting-legend-item">
							<div className="forecasting-legend-color forecasting-forecast-color"></div>
							<span>Forecasted Values</span>
						</div>
                    </div>
                </div>
            )}
        </div>
        </div>
        
    );
};

const ForecastChart = ({ originalData, forecastData, forecastRaw }) => {
    // If no data, render nothing
    if (!originalData.length || !forecastData.length || !forecastRaw.length) return null;

    const labels = [
        ...originalData.map(d => d.date),
        ...forecastData.map(d => d.date)
    ];

    const originalValues = originalData.map(d => d.value);

    // Actual values from forecastRaw
    const actualValues = [
        ...Array(originalData.length).fill(null),
        ...forecastRaw.map(item => parseFloat(item.y_true_test))
    ];

    // Forecasted values
    const forecastValues = [
        ...Array(originalData.length).fill(null),
        ...forecastRaw.map(item => parseFloat(item.y_pred_test))
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Original Values',
                data: [...originalValues, ...Array(forecastData.length).fill(null)],
                borderColor: '#4caf50',
                backgroundColor: '#4caf50',
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: '#4caf50',
            },
            {
                label: 'Actual Values',
                data: actualValues,
                borderColor: '#2196f3',
                backgroundColor: '#2196f3',
                borderDash: [2, 2],
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: '#2196f3',
            },
            {
                label: 'Forecasted Values',
                data: forecastValues,
                borderColor: '#ff5722',
                backgroundColor: '#ff5722',
                borderDash: [6, 4],
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: '#ff5722',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: '#eee',
                },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="forecasting-chartjs-wrapper">
            <Line data={data} options={options} />
        </div>
    );
};

export default LSTMForecastingPageContent;

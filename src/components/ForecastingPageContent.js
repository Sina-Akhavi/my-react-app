import React, { useState } from 'react';
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

const ForecastingPageContent = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [days, setDays] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const originalData = [
		{ date: '2023-04-01', value: 28000 },
		{ date: '2023-04-10', value: 28500 },
		{ date: '2023-04-15', value: 29000 },
		{ date: '2023-04-20', value: 29500 },
		{ date: '2023-04-25', value: 30000 }
	];
	const forecastData = [
		{ date: '2023-04-26', value: 30500 },
		{ date: '2023-04-27', value: 31000 },
		{ date: '2023-04-28', value: 31200 },
		{ date: '2023-04-29', value: 31500 },
		{ date: '2023-04-30', value: 32000 }
	];

    const handleStart = () => {
        setShowFilter(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ...potential data fetching logic...
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
                            {forecastData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.csv}</td>
                                    <td>{item.model}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Styled graph section */}
                    <div className="forecasting-graph-container">
						<div className="forecasting-graph-title">Bitcoin Price Prediction Graph</div>
                        <ForecastChart originalData={originalData} forecastData={forecastData} />
                        <div className="forecasting-legend-item">
							<div className="forecasting-legend-color forecasting-csv-color"></div>
							<span>Original Values</span>
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

const ForecastChart = ({ originalData, forecastData }) => {
	const labels = [...originalData.map(d => d.date), ...forecastData.map(d => d.date)];
	const originalValues = originalData.map(d => d.value);
	const forecastValues = [
		...Array(originalData.length - 1).fill(null),
		originalData[originalData.length - 1].value,
		...forecastData.map(d => d.value)
	];

	const data = {
		labels,
		datasets: [
			{
				label: 'Original Values',
				data: [...originalValues, null, ...Array(forecastData.length).fill(null)],
				borderColor: '#4caf50',
				backgroundColor: '#4caf50',
				tension: 0.3,
				pointRadius: 4,
				pointBackgroundColor: '#4caf50',
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

export default ForecastingPageContent;

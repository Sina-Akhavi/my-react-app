import React, { useState } from 'react';
import '../styles/forecasting-page-content.css';

const ForecastingPageContent = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [days, setDays] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Dummy data for table display
    const forecastData = [
        { date: '2023-10-01', csv: 100, model: 110 },
        { date: '2023-10-02', csv: 120, model: 130 },
        { date: '2023-10-03', csv: 90, model: 95 }
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
        <>
        
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
                <form onSubmit={handleSubmit}>
                    <label>
                        Number of days for forecasting:
                        <input
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
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
                    {/* Graph placeholder with updated class names */}
                    <div className="forecasting-graph-container">
                        <p>Graph:</p>
                        <div className="forecasting-legend-item">
                            <div className="forecasting-legend-color forecasting-csv-color"></div>
                            <span>CSV Values</span>
                        </div>
                        <div className="forecasting-legend-item">
                            <div className="forecasting-legend-color forecasting-forecast-color"></div>
                            <span>Forecasted Values</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default ForecastingPageContent;

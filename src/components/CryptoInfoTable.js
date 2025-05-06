import React, { useState, useEffect } from "react";
import { useCSVData } from '../context/CSVDataContext.js'; // Adjust the path if necessary

import "../styles/crypto-info-table.css";

const CryptoInfoTable = () => {
    const { csvData, isLoading, error } = useCSVData();

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const [cryptoData, setCryptoData] = useState([]);
    const [first30Close, setFirst30Close] = useState([]); // This state holds the first 30 close values of the *filtered* data

    useEffect(() => {
        if (csvData) { 
            setCryptoData(csvData);
            setFirst30Close(csvData.slice(0, 30).map((row) => ({[row.Date]: parseFloat(row.Close)})));
            setFirst30Close(csvData.slice(0, 30).map((row) => ({[row.Date]: parseFloat(row.Close)})));
        }
    }, [csvData]);

    const handleFilter = (e) => {
        e.preventDefault();

        let filtered = csvData;

        if (fromDate) {
            filtered = filtered.filter((row) => new Date(row.Date) >= new Date(fromDate));
        }
        if (toDate) {
            filtered = filtered.filter((row) => new Date(row.Date) <= new Date(toDate));
        }

        setCryptoData(filtered);

        setFirst30Close(filtered.slice(0, 30).map((row) => ({[row.Date]: parseFloat(row.Close)})));

        console.log("Filtered Data for Table:", filtered); // Log the data being displayed
        console.log("First 30 Close of Filtered Data:", first30Close); // Log the 30 close values
    };

    if (isLoading) {
        return <div className="loading-message">Loading cryptocurrency data...</div>;
    }

    if (error) {
        return <div className="error-message">Error loading data: {error}</div>;
    }
    
    return (
        <>
            <div className="content">
                <div className="crypto-info-container">
                    <div className="filter-section">
                        <form onSubmit={handleFilter} className="filter-form">
                            <div className="form-group">
                                <label htmlFor="fromDate">From:</label>
                                <input
                                    type="date"
                                    id="fromDate"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="toDate">To:</label>
                                <input
                                    type="date"
                                    id="toDate"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="filter-button">
                                Filter
                            </button>
                        </form>
                    </div>
                    <div className="table-section">
                        <div className="table-wrapper">
                            <table className="crypto-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Close</th>
                                        <th>High</th>
                                        <th>Low</th>
                                        <th>Open</th>
                                        <th>Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Render the currently filtered data */}
                                    {cryptoData.map((row, index) => (
                                        // Use a more stable key if possible, like a unique ID from data,
                                        // but index is okay if rows don't change order much or get added/removed mid-list
                                        <tr key={row.Date || index}>
                                            <td>{row.Date}</td>
                                            <td>{row.Close}</td>
                                            <td>{row.High}</td>
                                            <td>{row.Low}</td>
                                            <td>{row.Open}</td>
                                            <td>{row.Volume}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                             {/* Optional: Show message if no data after filtering */}
                            {cryptoData.length === 0 && !isLoading && !error && (
                                <div className="no-data-message">No data found for the selected date range.</div>
                            )}
                        </div>
                    </div>
                     <div className="ai-description-box"> {/* This box seems separate from AI, maybe rename? */}
                        <h2>Data Insights</h2>
                        <p>
                          This table displays real Bitcoin market data loaded from btc_data.csv, including Price, Close, High, Low, Open,
                          and Volume. The table can be filtered by a date range.
                          {/* If you want to display the first30Close data here, you can add it */}
                          {/* Example: <p>First 30 Close Values: {JSON.stringify(first30Close)}</p> */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CryptoInfoTable;

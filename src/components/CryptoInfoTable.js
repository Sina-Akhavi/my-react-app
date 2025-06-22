import React, { useState, useEffect } from "react";
import { useCSVData } from '../context/CSVDataContext.js'; // Adjust the path if necessary
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/crypto-info-table.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoInfoTable = () => {
    const { csvData, isLoading, error } = useCSVData();

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const [cryptoData, setCryptoData] = useState([]);
    const [first30Close, setFirst30Close] = useState([]); // This state holds the first 30 close values of the *filtered* data
    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        if (csvData) { 
            setCryptoData(csvData);
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
        setShowChart(true);

        console.log("Filtered Data for Table:", filtered); // Log the data being displayed
        console.log("First 30 Close of Filtered Data:", first30Close); // Log the 30 close values
    };

    // Prepare chart data from filtered cryptoData
    const chartData = {
        labels: cryptoData.map(row => row.Date),
        datasets: [
            {
                label: "Bitcoin Closing Price",
                data: cryptoData.map(row => Number(row.Close)),
                borderColor: "rgba(255, 206, 86, 1)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                fill: true,
                tension: 0.1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: "Bitcoin Closing Prices" },
        },
        scales: {
            x: { title: { display: true, text: "Date" } },
            y: { title: { display: true, text: "Close Price" } }
        }
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
                    {/* Replace ai-description-box with chart */}
                    {showChart && (
                        <div style={{ margin: "2rem 0" }}>
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CryptoInfoTable;

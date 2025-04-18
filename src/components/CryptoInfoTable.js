import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "../styles/crypto-info-table.css";

const CryptoInfoTable = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [allData, setAllData] = useState([]);
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        fetch("btc_data.csv")
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const data = results.data.filter((row, index) => index !== 0 && index !== 1);
                        const reversedData = data.reverse();
                        setAllData(reversedData);
                        setCryptoData(reversedData);
                    },
                });
            })
            .catch((error) => console.error("Error fetching CSV data:", error));
    }, []);

    const handleFilter = (e) => {
        e.preventDefault();
        let filtered = allData;
        if (fromDate) {
            filtered = filtered.filter((row) => new Date(row.Date) >= new Date(fromDate));
        }
        if (toDate) {
            filtered = filtered.filter((row) => new Date(row.Date) <= new Date(toDate));
        }
        console.log("Filtered Data:", filtered);
        setCryptoData(filtered);
    };

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
                                    {cryptoData.map((row, index) => (
                                        <tr key={index}>
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
                        </div>
                    </div>
                    <div className="ai-description-box">
                        <h2>Data Insights</h2>
                        <p>
                          This table displays real Bitcoin market data loaded from btc_data.csv, including Price, Close, High, Low, Open,
                          and Volume. The table can be filtered by a date range.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CryptoInfoTable;

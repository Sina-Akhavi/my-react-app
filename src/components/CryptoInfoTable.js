import React, { useState } from "react";
import "../styles/crypto-info-table.css";

const CryptoInfoTable = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Artificial bitcoin-related data
  const cryptoData = [
    {
      date: "2025-04-01",
      price: 50000,
      opening: 49500,
      closing: 50200,
      volume: 12000,
    },
    {
      date: "2025-04-02",
      price: 51000,
      opening: 50000,
      closing: 50800,
      volume: 11000,
    },
    {
      date: "2025-04-03",
      price: 52000,
      opening: 51500,
      closing: 51800,
      volume: 13000,
    },
  ];

  const handleFilter = (e) => {
    e.preventDefault();
    // Implement your filter logic here using fromDate and toDate if needed.
    console.log("Filter applied:", fromDate, toDate);
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
            <table className="crypto-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Opening Price</th>
                  <th>Closing Price</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.date}</td>
                    <td>${row.price}</td>
                    <td>${row.opening}</td>
                    <td>${row.closing}</td>
                    <td>{row.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ai-description-box">
            <h2>Data Insights</h2>
            <p>
              This table presents artificial Bitcoin market data for
              demonstration purposes. It includes key metrics such as price,
              opening and closing prices, and trading volume. The modern design
              of this component highlights the data's clarity, ensuring an
              engaging user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoInfoTable;

import react, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";

const CSVDataContext = createContext(null);

export const CSVDataProvide = ({ children }) => {
  const [csvData, setCSVData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndParseCSV = async () => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("btc_data.csv");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const csvText = await response.text();
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
            const data = results.data.filter(
                (row, index) => index !== 0 && index !== 1
            );
            const reversedData = data.reverse();
            setCSVData(reversedData);
            },
        });
    };
    fetchAndParseCSV();
  }, []);

  return (
    <CSVDataContext.Provider value={{ csvData, isLoading, error }}>
      {children}
    </CSVDataContext.Provider>
  );
};

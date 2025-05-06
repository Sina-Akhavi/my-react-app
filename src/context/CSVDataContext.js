import react, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";

const CSVDataContext = createContext(null);

export const CSVDataProvider = ({ children }) => {
  const [csvData, setCSVData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndParseCSV = async () => {
      setIsLoading(true); // Set loading true at the start of the async op
      setError(null); // Clear previous errors

      try {
        // 1. Fetch the CSV file
        const response = await fetch("btc_data.csv");

        // Check if the fetch was successful (HTTP status 200-299)
        if (!response.ok) {
          // Throw an error with the status
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const csvText = await response.text();

        // 2. Parse the CSV text
        Papa.parse(csvText, {
          header: true, // Assumes the first row is headers
          skipEmptyLines: true, // Skips empty rows
          complete: (results) => {
            // PapaParse successful completion
            const data = results.data.filter(
              // Your filter logic - note that index > 0 && index > 1 is same as index > 1.
              // If you meant index !== 0 && index !== 1, adjust the condition.
              // Also, filter out rows that ended up empty after parsing (e.g., empty lines at end)
               (row, index) => index > 1 && Object.values(row).some(value => value)
            );
            const reversedData = data.reverse();

            setCSVData(reversedData);
            setIsLoading(false); // <-- Set loading false on SUCCESS
          },
          error: (err) => {
            // <-- PapaParse parsing error handler (MISSING in your code)
            console.error("Error parsing CSV:", err);
            setError("Failed to parse CSV data."); // Set a user-friendly error message
            setIsLoading(false); // <-- Set loading false on PARSING ERROR
          }
          // Add other PapaParse options like dynamicTyping: true if needed
          // dynamicTyping: true,
        });

      } catch (err) {
        // <-- Catch block for fetch errors or thrown errors (MISSING in your code)
        console.error("Error fetching or processing CSV:", err);
        setError(`Failed to load CSV file: ${err.message}`); // Set error state with specific message
        setIsLoading(false); // <-- Set loading false on FETCH/PROCESSING ERROR
      }
    };

    fetchAndParseCSV(); // Call the async function
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <CSVDataContext.Provider value={{ csvData, isLoading, error }}>
      {children}
    </CSVDataContext.Provider>
  );
};

export { CSVDataContext };

// And optionally, create a hook for easier consumption
export const useCSVData = () => {
  const context = useContext(CSVDataContext);
  if (context === undefined) {
    // This error helps developers catch mistakes where they use the hook
    // outside of the provider
    throw new Error('useCSVData must be used within a CSVDataProvider');
  }
  return context;
};

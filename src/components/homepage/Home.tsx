import React, { useEffect, useState } from "react";
import { getCountries } from "../../apiService";
import { Link } from "react-router-dom";
import { Country } from "../../types";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [count, setCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * limit;
        const countriesData = await getCountries(limit, offset);
        console.log("DATA", countriesData);
        setCountries(countriesData.data);
        setCount(countriesData.metadata.totalCount);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, [currentPage, limit]);

  const totalPages = Math.ceil(count / limit);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Country Code</th>
            <th className="py-2 px-4 border-b">Country Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country: Country) => (
            <tr key={country.code}>
              <td className="py-2 px-4 border-b">{country.code}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/country/${country.code}`}
                  className="text-blue-500 hover:underline"
                >
                  {country.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;

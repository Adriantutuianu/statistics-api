import React, { useEffect, useState } from "react";
import { getCountries } from "../../apiService";
import { Link } from "react-router-dom";
import "./home.css";
import { Country } from "../../types";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [count, setCount] = useState<Number>(1);
  const [limit, setLimit] = useState<Number>(10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await getCountries(limit);
        console.log("DATA", countriesData);
        setCountries(countriesData.data);
        setCount(countriesData.metadata.totalCount);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);
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
    </div>
  );
};

export default Home;

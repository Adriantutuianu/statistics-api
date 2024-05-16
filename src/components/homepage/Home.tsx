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
    <div className="App">
      <div>
        <h1>Home Page</h1>
        <ul>
          {countries.map((country: Country) => (
            <li key={country.wikiDataId}>
              <Link to={`/country/${country.wikiDataId}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

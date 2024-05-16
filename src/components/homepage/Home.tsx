import React, { useEffect } from "react";
import { getCountries } from "../../apiService";
import Button from "../../Button";
import { Link } from "react-router-dom";
import "./home.css";

const countries = [
  { id: 1, name: "USA" },
  { id: 2, name: "UK" },
  // Add more countries here
];

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await getCountries();
        console.log(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="flex justify-center items-center h-screen">
          <Button onClick={handleClick} text="Click me" />
        </div>
      </header>
      <div>
        <h1>Home Page</h1>
        <ul>
          {countries.map((country) => (
            <li key={country.id}>
              <Link to={`/country/${country.id}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

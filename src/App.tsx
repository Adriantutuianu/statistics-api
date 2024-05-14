import React, { useEffect } from "react";
import { getCountries } from "./apiService";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

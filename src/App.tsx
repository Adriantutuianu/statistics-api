import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Home";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import NotFoundRoute from "./components/NotFoundRoute/NotFoundRoute";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Assuming Header is your header component */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/country/:id" element={<CountryDetails />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

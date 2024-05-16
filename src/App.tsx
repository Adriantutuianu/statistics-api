import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Home";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import NotFoundRoute from "./components/NotFoundRoute/NotFoundRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Home";
import CountryDetails from "./components/country-details/CountryDetails";
import NotFoundRoute from "./components/not-found-route/NotFoundRoute";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/country/:countryCode" element={<CountryDetails />} />
            <Route path="*" element={<NotFoundRoute />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Home";
import NotFoundRoute from "./components/NotFoundRoute/NotFoundRoute";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

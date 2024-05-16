import "./countryDetails.css";
import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails: React.FC = () => {
  const { id } = useParams();

  // Fetch country details based on id
  // You can fetch from API or use some predefined data
  // For simplicity, I'll just display the id here
  return (
    <div>
      <h1>Country Details</h1>
      <p>Country ID: {id}</p>
    </div>
  );
};

export default CountryDetails;

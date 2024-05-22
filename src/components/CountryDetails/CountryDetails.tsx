import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../../apiService";
import "./countryDetails.css";

const CountryDetails: React.FC = () => {
  let { countryCode } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const countryDetails = await getCountry(countryCode);
        console.log(countryDetails);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, [countryCode]);

  return (
    <div>
      <h1>Country Details</h1>
      <p>Country ID: {countryCode}</p>
    </div>
  );
};

export default CountryDetails;

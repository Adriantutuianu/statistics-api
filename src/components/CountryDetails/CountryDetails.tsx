import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../../apiService";
import "./countryDetails.css";
import { FullCountry } from "../../types";

const CountryDetails: React.FC = () => {
  let { countryCode } = useParams();

  const [country, setCountry] = useState<FullCountry>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const countryDetails = await getCountry(countryCode);
        console.log(countryDetails);
        setCountry(countryDetails.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchData();
  }, [countryCode]);
  console.log("Country: ", country);
  return (
    <div>
      <h1>Country Details</h1>
      <p>Country ID: {countryCode}</p>
      <p>Country Capital: {country?.capital}</p>
      <p>Country Currency codes: {country?.currencyCodes.join(", ")}</p>
    </div>
  );
};

export default CountryDetails;

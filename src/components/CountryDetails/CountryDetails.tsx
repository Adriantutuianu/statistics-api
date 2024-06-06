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
    <div className="container mx-auto p-4">
      <h1>Country Details</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Country Code</th>
            <th className="py-2 px-4 border-b">Country Name</th>
            <th className="py-2 px-4 border-b">Country Capital</th>
            <th className="py-2 px-4 border-b">Country Currency Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">{countryCode}</td>
            <td className="py-2 px-4 border-b">{country?.name}</td>
            <td className="py-2 px-4 border-b">{country?.capital}</td>
            <td className="py-2 px-4 border-b">
              {country?.currencyCodes.join(", ")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;

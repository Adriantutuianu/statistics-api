import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountry } from "../../apiService";
import "./countryDetails.css";
import { FullCountry } from "../../types";

const CountryDetails: React.FC = () => {
  let { countryCode } = useParams();

  const navigate = useNavigate();

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

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-center mb-4 text-xl font-bold">Country Details</h1>

        <table className="w-full bg-white border border-gray-300">
          <tbody>
            <tr>
              <td
                className="py-4 px-4 border-b font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                Country Code
              </td>
              <td
                className="py-4 px-4 border-b"
                style={{ whiteSpace: "nowrap" }}
              >
                {countryCode}
              </td>
            </tr>
            <tr>
              <td
                className="py-4 px-4 border-b font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                Country Name
              </td>
              <td
                className="py-4 px-4 border-b"
                style={{ whiteSpace: "nowrap" }}
              >
                {country?.name}
              </td>
            </tr>
            <tr>
              <td
                className="py-4 px-4 border-b font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                Country Capital
              </td>
              <td
                className="py-4 px-4 border-b"
                style={{ whiteSpace: "nowrap" }}
              >
                {country?.capital}
              </td>
            </tr>
            <tr>
              <td
                className="py-4 px-4 border-b font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                Country Currency Code
              </td>
              <td
                className="py-4 px-4 border-b"
                style={{ whiteSpace: "nowrap" }}
              >
                {country?.currencyCodes.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={handleGoHome}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      >
        Go to Country Full List
      </button>
    </div>
  );
};

export default CountryDetails;

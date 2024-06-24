import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountry } from "../../apiService";
import "./countryDetails.css";
import { FullCountry } from "../../types";

const CountryDetails: React.FC = () => {
  let { countryCode } = useParams<{ countryCode: string }>();

  const navigate = useNavigate();

  const [country, setCountry] = useState<FullCountry>();

  useEffect(() => {
    const fetchData = async () => {
      if (countryCode) {
        try {
          const countryDetails = await getCountry(countryCode);
          console.log(countryDetails);
          setCountry(countryDetails.data);
        } catch (error) {
          console.error("Error fetching country:", error);
        }
      }
    };
    fetchData();
  }, [countryCode]);

  const handleGoHome = () => {
    navigate("/", { state: { fromBackButton: true } });
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center ">
      <div className="w-full max-w-4xl bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
        <h1 className="text-center text-3xl font-bold mb-4">Country Details</h1>
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
        <div className="flex justify-center mt-8">
          <button
            onClick={handleGoHome}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Go to Country Full List
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountry } from "../../apiService";
import { FullCountry } from "../../types";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";

const CountryDetails: React.FC = () => {
  let { countryCode } = useParams<{ countryCode: string }>();

  const navigate = useNavigate();

  const [country, setCountry] = useState<FullCountry>();

  useEffect(() => {
    const fetchData = async () => {
      if (countryCode) {
        try {
          const countryDetails = await getCountry(countryCode);
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
    <div className="container mx-auto mt-[100px] p-4 flex justify-center items-center">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-md rounded px-4 md:px-8 pt-8 pb-8 mb-4">
        <h1 className="text-center text-3xl font-bold mb-6">Country Details</h1>
        <Table
          aria-label="Country Details"
          className="w-full border border-gray-300"
        >
          <TableHeader>
            <TableColumn className="border-b border-gray-300 pb-5 text-left text-xl">
              Field
            </TableColumn>
            <TableColumn className="border-b border-gray-300 pb-5 text-left text-xl">
              Value
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300 p-2 text-lg">
                Country Code
              </TableCell>
              <TableCell className="p-2 text-lg">{countryCode}</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300 p-2 text-lg">
                Country Name
              </TableCell>
              <TableCell className="p-2 text-lg">{country?.name}</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300 p-2 text-lg">
                Country Capital
              </TableCell>
              <TableCell className="p-2 text-lg">{country?.capital}</TableCell>
            </TableRow>
            <TableRow className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300 p-2 text-lg">
                Country Currency Code
              </TableCell>
              <TableCell className="p-2 text-lg">
                {country?.currencyCodes.join(", ")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-center mt-8">
          <Button
            className="bg-blue-500 text-white text-xl rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleGoHome}
          >
            Go to Country Full List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

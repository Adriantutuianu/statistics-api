import React, { useEffect, useState } from "react";
import { getCountries } from "../../apiService";
import { useLocation, useNavigate } from "react-router-dom";
import { Country } from "../../types";
import Cookies from "../Cookies/Cookies";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [count, setCount] = useState<number>(0);
  const [limit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showCookies, setShowCookies] = useState<boolean>(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * limit;
        const countriesData = await getCountries(limit, offset);
        console.log("DATA", countriesData);
        setCountries(countriesData.data);
        setCount(countriesData.metadata.totalCount);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, [currentPage, limit]);

  useEffect(() => {
    if (location.state && location.state.fromBackButton) {
      setShowCookies(false);
    }
  }, [location.state]);

  const totalPages = Math.ceil(count / limit);

  const handleCountryClick = (countryCode: string) => {
    navigate(`/country/${countryCode}`, { state: { fromBackButton: true } });
  };

  return (
    <div className="container mx-auto mt-[50px] p-6">
      {showCookies && <Cookies />}
      <h1 className="text-center text-3xl font-bold mb-6 ">Countries List:</h1>
      <h2 className="mb-4 ml-48 text-xl font-semibold">
        *Click on country to get more details
      </h2>
      <div className="overflow-x-auto">
        <Table
          aria-label="Countries Table"
          className="w-3/4 mx-auto border text-center border-gray-300"
        >
          <TableHeader>
            <TableColumn className="text-xl w-1/4 border-b border-gray-300">
              Country Code
            </TableColumn>
            <TableColumn className="text-xl w-1/4 border-b border-gray-300">
              Wikidata ID
            </TableColumn>
            <TableColumn className="text-xl w-2/4 border-b border-gray-300">
              Country Name
            </TableColumn>
          </TableHeader>
          <TableBody>
            {countries.map((country: Country, index) => (
              <TableRow
                key={country.code}
                className={`border-b border-gray-300 ${
                  index === countries.length - 1 ? "border-b-0" : ""
                }`}
              >
                <TableCell className="text-lg">{country.code}</TableCell>
                <TableCell className="text-lg">{country.wikiDataId}</TableCell>
                <TableCell className="text-lg">
                  <Button
                    color="primary"
                    className="bg-transparent text-blue-500  hover:text-yellow-500"
                    onClick={() => handleCountryClick(country.code)}
                  >
                    {country.name}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full max-w-md mx-auto mt-4 bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center">
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            color="default"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          >
            Previous
          </Button>
          <span className="px-4 py-2 text-lg font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            color="default"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

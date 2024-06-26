import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header flex justify-center items-center h-28 relative bg-gray-100">
      <h1 className="text-5xl font-bold text-center">World Statistics Hub</h1>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500 opacity-75"></div>
    </header>
  );
};

export default Header;

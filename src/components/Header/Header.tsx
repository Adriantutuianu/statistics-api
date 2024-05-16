import React from "react";
import Button from "../../Button";
import "./header.css";

const Header = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <header className="header">
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <div className="flex justify-center items-center h-screen">
        <Button onClick={handleClick} text="Click me" />
      </div>
    </header>
  );
};

export default Header;

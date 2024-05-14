import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-red-700 text-blue font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

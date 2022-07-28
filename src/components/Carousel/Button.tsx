import React from "react";

export const Button: React.FC<{
  type: "previous" | "next";
  handleClick: () => void;
}> = ({ type, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-gray-700 rounded-full text-white w-8 h-8 text-lg flex items-center justify-center "
    >
      {type === "previous" ? "<" : ">"}
    </button>
  );
};

export default Button;

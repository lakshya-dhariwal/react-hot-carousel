import React from "react";
import { PrevIcon } from "../Icons/Previous";
import { NextIcon } from "../Icons/Next";

export const Button: React.FC<{
  type: "previous" | "next";
  handleClick: () => void;
}> = ({ type, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={type === "previous" ? "previous-button" : "next-button"}
      style={{}}
    >
      {type === "previous" ? <PrevIcon /> : <NextIcon />}
    </button>
  );
};

export default Button;

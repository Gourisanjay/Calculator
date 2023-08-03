import React from "react";
import "./styles/Buttons.css";

const Buttons = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className={`button-wrapper ${symbol === "=" ? "equal" : ""}`}
    >
      {symbol}
    </div>
  );
};

export default Buttons;

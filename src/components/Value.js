import React from "react";
import "./styles/Value.css";

const Value = ({ text }) => {
  return (
    <div className="value-wrapper">
      <div className="text">
        <input type="text" placeholder="0" value={text} />
      </div>
    </div>
  );
};
export default Value;

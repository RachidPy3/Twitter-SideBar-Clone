import React from "react";

function Element({ name, icon }) {
  return (
    <div className="element">
      {icon}
      <h1>{name}</h1>
    </div>
  );
}

export default Element;

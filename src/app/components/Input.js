import React from "react";

// spred oprator
export default function Input({ ...otherProp }) {
  return (
    <div className="inputWrapper">
      <input className="textInput" {...otherProp} />
    </div>
  );
}

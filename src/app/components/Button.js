import React from "react";

// spred oprator
export default function Button({ title, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      <p>{title}</p>
    </div>
  );
}

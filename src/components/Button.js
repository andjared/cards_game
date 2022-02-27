import React from "react";

export default function Button({ handleClick, btnText }) {
  return (
    <div>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
}

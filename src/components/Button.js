import React from "react";

export default function Button({ handleClick, btnText, disable }) {
  return (
    <div>
      <button disabled={disable} onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
}

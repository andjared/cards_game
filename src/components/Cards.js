import React from "react";

export default function Cards({ cards }) {
  return (
    <div className="cards">
      {cards &&
        cards.map((card) => {
          const { image, code } = card;
          return <img src={image} alt={code} key={code}></img>;
        })}
    </div>
  );
}

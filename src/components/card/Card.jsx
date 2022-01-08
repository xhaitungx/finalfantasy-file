import React from "react";

import "./card.css";
const Card = (pros) => {
  return (
    <div className="Card">
      <img src={pros.character.pictures.map((picture) => picture.url)} />
      <h1>{pros.character.name}</h1>
      <p>{pros.character.job}</p>
    </div>
  );
};

export default Card;

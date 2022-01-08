import React from "react";

import "./cardList.css";
import { Card } from "../index";
const CardList = (pros) => {
  return (
    <div className="CardList">
      {pros.arrayCharacters.map((character) => (
        <Card character={character} />
      ))}
    </div>
  );
};

export default CardList;

import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
const Card = ({ character }) => {
  return (
    <Link to={`/detail?name=${character.name}`}>
      <div className="Card">
        <img src={character.pictures.map((picture) => picture.url)} />
        <h1>{character.name}</h1>
        <p>{character.job}</p>
      </div>
    </Link>
  );
};

export default Card;

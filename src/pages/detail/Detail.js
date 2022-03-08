import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./detail.css";
const Detail = () => {
  const [characterData, setCharacterData] = useState({});
  const [isFetching, setsetFetching] = useState(true);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    fetchData();
    return () => {
      //UI already render, now clean unuse data
      setsetFetching({});
      // This worked for me
    };
  }, []);

  const fetchData = () => {
    const nameParams = params.get("name");
    axios(
      `https://www.moogleapi.com/api/v1/characters/search?name=${params.get(
        "name"
      )}`
    )
      .then((response) => response.data)
      .then((data) => {
        setCharacterData(data);
        setsetFetching(false);
      })
      .catch((error) => console.log(error));
  };

  const data = characterData;

  return (
    <div className="detail">
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <div className="information">
          <img src={characterData[0].pictures.map((picture) => picture.url)} />
          <div className="data">
            <h1>{characterData[0].name}</h1>
            <h2>Age: {characterData[0].age}</h2>
            <h2>Job: {characterData[0].job}</h2>
            <p>{characterData[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";

const Card = ({ id, image, name, country }) => {
  const [flagArr, setFlagArr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("https://restcountries.com/v3.1/name/" + country)
      .then((res) => setFlagArr(res.data[0].flags.svg))
      .catch((err) => alert("Loading of list of Countries Was not successful"));

    setIsLoading(false);
  }, [country]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.card}>
      <div className="recipe">
        <img src={image} alt={name} />
      </div>
      <div className={styles.flag}>
        <img src={flagArr} alt={country} />
      </div>

      <h3>{name}</h3>
      <Link to={`${id}`}>see more...</Link>
    </div>
  );
};

export default Card;

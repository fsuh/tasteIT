import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Recipies.module.css";

const Recipies = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [flagArr, setFlagArr] = useState()

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("http://localhost:3001/recipe")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) =>
        alert("access to recipe server wasn't successful, retry!!")
      );
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div className={styles.recipes}>
      <SearchBar
        submit={handleSubmit}
        onChange={handleChange}
        value={searchInput}
      />

      <div className={styles.results}>
        {search(data).map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            country={item.origin}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipies;

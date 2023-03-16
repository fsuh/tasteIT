import React from "react";

const SearchBar = ({ onChange, value }) => {
  return (
    <form action="/recipies" method="get">
      <label htmlFor="search">Search for recipe:</label>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;

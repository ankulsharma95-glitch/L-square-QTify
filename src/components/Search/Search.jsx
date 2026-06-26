import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
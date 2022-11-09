import React, { useState } from "react";
import { LOCATION_VALUES } from "../../constants";
import styles from "./Search.module.css";
const Search = ({
  setSurface,
  setLocalisation,
  setSearching,
  searching,
  localisation,
  surface,
}) => {
  const searchHandler = (e) => {
    e.preventDefault();

    console.log(surface, localisation, searching);
  };
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={searchHandler} className={styles.searchForm}>
        <div className={styles.formControl}>
          <select
            name="localisation"
            id="localistion"
            onChange={(e) => setLocalisation(e.target.value)}
            value={localisation}
          >
            <option value="">Où ?</option>
            {LOCATION_VALUES.map((localisation, index) => (
              <option key={index} value={localisation.value}>
                {localisation.text}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formControl}>
          <input
            type="number"
            placeholder="Surface max"
            onChange={(e) => setSurface(e.target.value)}
          />
        </div>
        <button onClick={() => setSearching(!searching)}>Rechercher</button>
      </form>
    </div>
  );
};

export default Search;

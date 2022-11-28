import React, { useState, useEffect } from "react";
import { LOCATION_VALUES } from "../../constants";
import styles from "./Search.module.css";
const Search = ({
  setSurface,
  setLocalisation,
  setSearching,
  searching,
  localisation,
  surface,
  category,
  setCategory,
}) => {
  const [disabled, setDisabled] = useState(false);

  const checkIfAllFieldsAreFilled = () => {
    if (category === "" || localisation === "" || surface <= 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    checkIfAllFieldsAreFilled();
    console.log("call");
  }, [surface, category, localisation]);

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.searchForm}>
        <div className={styles.formControl}>
          <label htmlFor="type">Achat / Location</label>
          <select
            name="type"
            id="type"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">---- Achat ou vente ----</option>
            <option value="vente">Vente</option>
            <option value="location">Location</option>
          </select>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="localisation">Où ?</label>
          <select
            name="localisation"
            id="localistion"
            onChange={(e) => setLocalisation(e.target.value)}
            value={localisation}
          >
            <option value="">---- Où ? ----</option>
            {LOCATION_VALUES.map((localisation, index) => (
              <option key={index} value={localisation.value}>
                {localisation.text}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="surface">Surface max</label>
          <input
            type="number"
            id="surface"
            placeholder="Surface max"
            onChange={(e) => setSurface(e.target.value)}
            required
            value={surface}
          />
        </div>
        <button onClick={() => setSearching(!searching)} disabled={disabled}>
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default Search;

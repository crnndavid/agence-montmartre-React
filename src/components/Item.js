import React from "react";
import styles from "../components/Item.module.css";
import {
  restricStringLenght,
  formatSalePrice,
  formatRentalPrice,
} from "../utils";

const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer} key={item.id}>
      <img src={item.image} alt="" />
      <div>
        <h2>
          Name: {item.name} <span>{item.surface}m2</span>
        </h2>
        <span>
          {item.type === "vente"
            ? formatSalePrice(item.prix)
            : formatRentalPrice(item.prix)}
        </span>

        <p>{restricStringLenght(item.description)}</p>
      </div>
    </div>
  );
};

export default Item;

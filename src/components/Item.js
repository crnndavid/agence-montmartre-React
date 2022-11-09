import React from "react";
import styles from "../components/Item.module.css";
import {
  restricStringLenght,
  formatSalePrice,
  formatRentalPrice,
} from "../utils";
import { Col } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer} key={item.id}>
      <img src={item.image} alt="" />
      <div>
        <h2>Name: {item.name}</h2>
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

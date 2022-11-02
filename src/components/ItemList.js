import React from "react";
import styles from "./ItemList.module.css";
const ItemList = ({ items }) => {
  return items.map((sale) => {
    return (
      <div className={styles.lists}>
        <img src={sale.image} alt="" />
        <ul>
          <li>Name: {sale.name}</li>
          <li>Price: {sale.prix}</li>
          <li>Url: {sale.image}</li>
        </ul>
      </div>
    );
  });
};

export default ItemList;

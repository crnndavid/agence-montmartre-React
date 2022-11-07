import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";
import Item from "./Item";
const ItemList = ({ items }) => {
  return items.map((item, index) => {
    return (
      <Link to={`/sales/${item.id}`}>
        <div className={styles.lists} key={index}>
          <Item item={item} />
        </div>
      </Link>
    );
  });
};

export default ItemList;

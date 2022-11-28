import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";
import Item from "./Item";

import Col from "react-bootstrap/Col";

const ItemList = ({ items, url }) => {
  return items.map((item, index) => {
    return (
      <Col md={6} sm={12} key={index} className={styles.listItem}>
        <Link to={`/${url}/${item.id}`}>
          <article className={styles.lists}>
            <Item item={item} />
          </article>
        </Link>
      </Col>
    );
  });
};

export default ItemList;

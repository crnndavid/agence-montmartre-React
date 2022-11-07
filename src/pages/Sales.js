import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
const Sales = ({ items }) => {
  return (
    <>
      <Link to="/sales/add-property">Add new property</Link>
      <ItemList items={items} />
    </>
  );
};

export default Sales;

import React from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";

const Sale = ({ items }) => {
  const { id } = useParams();

  const property = items.find((el) => el.id === id);

  return (
    <>
      <div>Property ID: {id}</div>
      <Item item={property} />
    </>
  );
};

export default Sale;

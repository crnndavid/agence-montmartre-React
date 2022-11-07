import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <ul>
          <li>Name: {item.name}</li>
          <li>Price: {item.prix}</li>
        </ul>
      </div>
    </>
  );
};

export default Item;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Title from "../components/UI/Title";
import ItemList from "../components/ItemList";
import BreadCrumb from "../components/UI/BreadCrumb";
const Rentals = ({ items, colors }) => {
  const [rentalProperty, setRentalProperty] = useState([]);
  const [numOfRental, setNumOfRental] = useState(0);

  const url = "rentals";
  const rentalPropertyFilter = () => {
    setRentalProperty(items.filter((item) => item.type === "location"));
    setNumOfRental(rentalProperty.length);
  };
  useEffect(() => {
    rentalPropertyFilter();
  }, []);

  return (
    <Container>
      <BreadCrumb url={url}></BreadCrumb>
      <header>
        <Title title="Louer" color={colors.text} />
        <span>{numOfRental}</span>
      </header>
      <Row>
        <ItemList items={rentalProperty} url={url} />
      </Row>
    </Container>
  );
};

export default Rentals;

import React from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Container from "react-bootstrap/Container";
import BreadCrumb from "../components/UI/BreadCrumb";
const Rental = ({ items }) => {
  const { id } = useParams();
  const property = items.find((el) => el.id === id);
  return (
    <Container>
      <BreadCrumb url="rentals"></BreadCrumb>
      <Item item={property} />
    </Container>
  );
};

export default Rental;

import React from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import BreadCrumb from "../components/UI/BreadCrumb";
const Sale = ({ items }) => {
  const { id } = useParams();

  const property = items.find((el) => el.id === id);

  return (
    <Container>
      <BreadCrumb url="acheter-louer"></BreadCrumb>
      <Item item={property} />
    </Container>
  );
};

export default Sale;

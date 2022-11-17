import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import BreadCrumb from "../components/UI/BreadCrumb";
const Sale = ({ items }) => {
  const { id } = useParams();

  const property = items.find((el) => el.id === id);

  return (
    <Container>
      <BreadCrumb url="acheter-louer"></BreadCrumb>
      <Row>
        <Col>
          <img src={property.image} alt="" width="100%" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{property.name}</h2>
          <h6>{property.prix}€</h6>
          <p>{property.description}</p>
        </Col>
        <Col>
          <h4>Surface : {property.surface}m2</h4>
          <h4>Etage: {property.stair}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Sale;

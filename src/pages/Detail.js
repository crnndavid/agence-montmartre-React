import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Detail.module.css";
import BreadCrumb from "../components/UI/BreadCrumb";
import { BiArea, BiMoveVertical, BiCoin } from "react-icons/bi";
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
      <Row className="mt-4">
        <Col>
          <div className={styles.descriptionText}>
            <h2>{property.name}</h2>

            <p>{property.description}</p>
          </div>
        </Col>
        <Col>
          <div className={styles.descriptionInfo}>
            <h4>
              <BiCoin /> {property.prix}€
            </h4>
            <h4>
              <BiArea />
              Surface : {property.surface}m2
            </h4>
            <h4>
              <BiMoveVertical />
              Etage: {property.stair}
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sale;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BreadCrumb from "../components/UI/BreadCrumb";
import Title from "../components/UI/Title";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Sales = ({ items, colors }) => {
  const [saleProperty, setSaleProperty] = useState([]);
  const url = "sales";
  const fetchSales = async () => {
    const salesCollectionRef = collection(db, "ventes");
    const onlySaleProperty = query(
      salesCollectionRef,
      where("type", "==", "vente")
    );
    const data = await getDocs(onlySaleProperty);
    setSaleProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(saleProperty);
  };
  useEffect(() => {
    fetchSales();
    console.log("Call");
  }, []);

  return (
    <Container>
      <BreadCrumb url={url}></BreadCrumb>
      <Title title="Acheter" color={colors.text} />

      <Row>
        <ItemList items={saleProperty} url={url} />
      </Row>
    </Container>
  );
};

export default Sales;

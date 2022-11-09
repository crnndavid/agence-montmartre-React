import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BreadCrumb from "../components/UI/BreadCrumb";
import Title from "../components/UI/Title";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Search from "../components/UI/Search";
const Sales = ({ items, colors }) => {
  const [saleProperty, setSaleProperty] = useState([]);
  const [filterProperty, setFilterProperty] = useState([]);
  const [localisation, setLocalisation] = useState("");
  const [surface, setSurface] = useState();
  const [searching, setSearching] = useState(false);

  const url = "sales";
  const salesCollectionRef = collection(db, "ventes");

  const fetchSales = async () => {
    const onlySaleProperty = query(
      salesCollectionRef,
      where("type", "==", "vente")
    );
    const data = await getDocs(onlySaleProperty);
    setSaleProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const filterSales = async () => {
    console.log(localisation, surface);
    const filterProperty = query(
      salesCollectionRef,
      where("location", "==", localisation),
      where("surface", "<=", surface)
    );
    const data = await getDocs(filterProperty);
    console.log(data);
    setFilterProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchSales();
    if (searching) {
      filterSales();
    }
    setSearching(false);
    console.log("Call");
    setLocalisation("");
    setSurface(0);
  }, [searching]);

  return (
    <Container>
      <BreadCrumb url={url}></BreadCrumb>
      <Search
        setLocalisation={setLocalisation}
        localisation={localisation}
        surface={surface}
        setSurface={setSurface}
        setSearching={setSearching}
        searching={searching}
      ></Search>
      <Title title="Acheter" color={colors.text} />

      <Row>
        {filterProperty.length === 0 ? (
          <ItemList items={saleProperty} url={url} />
        ) : (
          <ItemList items={filterProperty} url={url} />
        )}
      </Row>
    </Container>
  );
};

export default Sales;

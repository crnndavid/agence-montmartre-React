import React, { useEffect, useState } from "react";

import ItemList from "../components/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BreadCrumb from "../components/UI/BreadCrumb";
import Title from "../components/UI/Title";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Search from "../components/UI/Search";

const PropertyList = ({ colors }) => {
  const [allProperty, setAllProperty] = useState([]);
  const [filterPropertyList, setFilterPropertyList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [localisation, setLocalisation] = useState("");
  const [surface, setSurface] = useState("");
  const [searching, setSearching] = useState(false);
  const [category, setCategory] = useState("");

  const url = "acheter-louer";
  const salesCollectionRef = collection(db, "ventes");

  const fetchAllProperties = async () => {
    const onlySaleProperty = query(salesCollectionRef);
    const data = await getDocs(onlySaleProperty);
    setAllProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const filterProperty = async () => {
    const queryProperty = query(
      salesCollectionRef,
      where("location", "==", localisation),
      where("type", "==", category),
      where("surface", "<", Number(surface))
    );
    const data = await getDocs(queryProperty);
    setFilterPropertyList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    fetchAllProperties();
    if (searching) {
      filterProperty();
      if (filterProperty.length === 0) setErrorMessage(true);
    }
    setSearching(false);
    console.log("Call");
    setLocalisation("");
    setSurface("");
    setCategory("");
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
        setCategory={setCategory}
        category={category}
      ></Search>

      <Row>
        {category === "vente" || category === "location" ? (
          <Title title={category.toUpperCase()} color={colors.text} />
        ) : (
          <Title title="NOS BIENS" color={colors.text} />
        )}
        {filterPropertyList.length === 0 ? (
          <>
            {errorMessage && <h1>Aucun résultat pour votre recherche ...</h1>}
            {!errorMessage && !searching && (
              <ItemList items={allProperty} url={url} />
            )}
          </>
        ) : (
          <ItemList items={filterPropertyList} url={url} />
        )}
      </Row>
    </Container>
  );
};

export default PropertyList;

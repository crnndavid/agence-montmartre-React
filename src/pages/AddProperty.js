import React from "react";
import { useState } from "react";
import CreateForm from "../components/CreateForm";

import { storage } from "../firebase-config";
import uuid from "react-uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const AddProperty = () => {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [fileInput, setFileInput] = useState();
  const [successMessage, setSuccessMessage] = useState(false);

  const salesCollectionRef = collection(db, "ventes");
  const addProperty = (e) => {
    e.preventDefault();
    if (fileInput === null) return;
    const imageRef = ref(storage, `images/${fileInput.name + uuid()}`);
    uploadBytes(imageRef, fileInput).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(salesCollectionRef, {
          name: nameInput,
          prix: priceInput,
          image: url,
        });
      });
    });
    setNameInput("");
    setFileInput(null);
    setPriceInput(0);
    setSuccessMessage((prevState) => !prevState);
  };
  return (
    <>
      <CreateForm
        price={priceInput}
        name={nameInput}
        image={fileInput}
        onSubmit={addProperty}
        onChangeName={(e) => setNameInput(e.target.value)}
        onChangePrice={(e) => setPriceInput(e.target.value)}
        onChangeFile={(e) => setFileInput(e.target.files[0])}
      />
      {successMessage && <div>Property added</div>}
    </>
  );
};

export default AddProperty;

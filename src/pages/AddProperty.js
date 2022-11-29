import React from "react";
import { useState, useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Title from "../components/UI/Title";
import Wrapper from "../components/Layout/Wrapper";
import { storage } from "../firebase-config";
import uuid from "react-uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth, provider } from "../firebase-config";
import { Container } from "react-bootstrap";
import { signInWithPopup } from "firebase/auth";
import SignInBtn from "../components/UI/SignInBtn";
import SignInImg from "../assets/img/signIn.jpg";
import styles from "./AddProperty.module.css";
const AddProperty = ({ colors, fetchSales }) => {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [fileInput, setFileInput] = useState();
  const [surfaceInput, setSurfaceInput] = useState(0);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [stairInput, setStairInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const salesCollectionRef = collection(db, "ventes");

  const reset = () => {
    setNameInput("");
    setDescriptionInput("");
    setPriceInput(0);
    setStairInput("");
    setLocationInput("");
    setCategoryInput("");
    setSurfaceInput(0);
  };
  const addProperty = (e) => {
    e.preventDefault();
    console.log(stairInput, categoryInput, locationInput);
    if (fileInput === null) return;

    const imageRef = ref(storage, `images/${fileInput.name + uuid()}`);
    uploadBytes(imageRef, fileInput).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(salesCollectionRef, {
          name: nameInput,
          prix: priceInput,
          surface: surfaceInput,
          image: url,
          description: descriptionInput,
          stair: stairInput,
          type: categoryInput,
          location: locationInput,
          created: serverTimestamp(),
        });
      });
    });
    reset();
    setSuccessMessage((prevState) => !prevState);
    fetchSales();
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Wrapper>
        {isAuth ? (
          <div className={styles.createForm}>
            <Title title="Ajoutez un bien" color={colors.text} />
            <CreateForm
              price={priceInput}
              name={nameInput}
              image={fileInput}
              category={categoryInput}
              location={locationInput}
              surface={surfaceInput}
              description={descriptionInput}
              stair={stairInput}
              onSubmit={addProperty}
              onChangeName={(e) => setNameInput(e.target.value)}
              onChangePrice={(e) => setPriceInput(e.target.value)}
              onChangeFile={(e) => setFileInput(e.target.files[0])}
              onChangeCategory={(e) => setCategoryInput(e.target.value)}
              onChangeLocation={(e) => setLocationInput(e.target.value)}
              onChangeStair={(e) => setStairInput(e.target.value)}
              onChangeDescription={(e) => setDescriptionInput(e.target.value)}
              onChangeSurface={(e) => setSurfaceInput(e.target.value)}
            />
            {successMessage && <div>Property added</div>}
          </div>
        ) : (
          <div className={styles.signInForm}>
            <Title title="Se connecter" color={colors.text} />
            <SignInBtn
              label="Se connecter avec Google"
              handleClick={signInWithGoogle}
            />
            <img src={SignInImg} alt="" width="100%" />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default AddProperty;

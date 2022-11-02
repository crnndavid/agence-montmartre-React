import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Layout/Wrapper";
import Title from "./components/UI/Title";
import Slider from "./components/UI/Slider";

import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import CreateForm from "./components/CreateForm";
import ItemList from "./components/ItemList";

function App() {
  const [sales, setSales] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);

  const salesCollectionRef = collection(db, "ventes");

  const createSale = async (e) => {
    e.preventDefault();
    await addDoc(salesCollectionRef, { name: nameInput, prix: priceInput });
    getSales();
  };

  const getSales = async () => {
    const data = await getDocs(salesCollectionRef);
    setSales(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getSales();
    console.log("Call");
    console.log(populateSlider());
  }, []);

  const { dark, light, white } = {
    dark: "#2d5876",
    light: "#3e79a3",
    white: "#fefefe",
  };
  const populateSlider = (type) => {
    const result = [];
    sales.map((sale) =>
      result.push({
        original: sale.image,
        description: sale.name,
      })
    );
    return result;
  };

  const ventes = populateSlider(sales);

  const locations = [
    {
      original: "https://picsum.photos/id/918/1000/600/",
      description: "Acheter votre bien avec l'agence Montmartre",
    },
    {
      original: "https://picsum.photos/id/915/1000/600/",
      description: "Trouver votre location avec l'agence Montmartre",
    },
    {
      original: "https://picsum.photos/id/919/1000/600/",
      description: "Estimer votre bien avec l'agence Montmartre",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Wrapper bg={dark}>
        <Title title="Ventes - Les nouveautés" />
        <Slider items={ventes} autoPlay={true} />
      </Wrapper>
      <Wrapper bg={white}>
        <div className="presentation">
          <img src="https://picsum.photos/id/50/300/300/" alt="" />
          <div className="about">
            <Title title="Agence Montmartre" color={dark} />
            <p>
              Maison familiale depuis 1984, Junot est née à Paris de notre
              passion pour l'immobilier et de notre volonté d’offrir des
              services performants et haut de gamme pour vendre, acheter, louer
              ou gérer vos biens. Notre métier, nous l'envisageons avant tout
              comme une expérience humaine. Enthousiasme et rigueur,
              transparence et écoute sont les valeurs fondamentales sur
              lesquelles nos équipes s'appuient au quotidien pour vous
              accompagner dans vos projets. Ces projets immobiliers sont pour
              vous, et pour nous, d'une importance capitale : enjeux
              sentimentaux et financiers majeurs, leur réussite est notre unique
              objectif. Partenaire exclusif à Paris du groupe international
              Knight Frank et membre des Leading Real Estate Companies of the
              World, Junot vous offre le meilleur d'une expertise locale,
              associée à la puissance inégalée d'un réseau international. Nous
              vendons plus d'un appartement par jour, pourquoi pas le vôtre ?
            </p>
          </div>
        </div>
      </Wrapper>
      <Wrapper bg={light}>
        <Title title="Location - Les nouveautés" />
        <Slider items={locations} autoPlay={true} />
      </Wrapper>
      <CreateForm
        onSubmit={createSale}
        onChangeName={(e) => setNameInput(e.target.value)}
        onChangePrice={(e) => setPriceInput(e.target.value)}
      />
      <ItemList items={sales} />
    </div>
  );
}

export default App;

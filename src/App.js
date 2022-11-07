import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";

import Navbar from "./components/Navbar";

import uuid from "react-uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "./firebase-config";

import { storage } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import CreateForm from "./components/CreateForm";
import ItemList from "./components/ItemList";
// React Router
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Sale from "./pages/Sale";
import NotFound from "./pages/NotFound";

function App() {
  const [sales, setSales] = useState([]);
  const [formatSales, setFormatSales] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [fileInput, setFileInput] = useState();
  const [loading, setLoading] = useState(false);

  // const addProperty = (e) => {
  //   e.preventDefault();
  //   if (fileInput === null) return;
  //   const imageRef = ref(storage, `images/${fileInput.name + uuid()}`);
  //   uploadBytes(imageRef, fileInput).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       addDoc(salesCollectionRef, {
  //         name: nameInput,
  //         prix: priceInput,
  //         image: url,
  //       }).then(() => {
  //         fetchSales();
  //         setSales("");
  //         setPriceInput(0);
  //         setFileInput(null);
  //       });
  //     });
  //   });
  // };

  const salesCollectionRef = collection(db, "ventes");
  const fetchSales = async () => {
    const data = await getDocs(salesCollectionRef);
    console.log(data);
    setSales(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // setFormatSales(populateSlider(sales));
    console.log(sales);
  };

  useEffect(() => {
    fetchSales();
    console.log(sales);
    console.log("Call");
  }, []);

  const colors = {
    dark: "#2d5876",
    light: "#3e79a3",
    white: "#fefefe",
  };
  // const populateSlider = (data) => {
  //   const result = [];
  //   if (data.length === 0) {
  //     console.log("Empty array");
  //     return;
  //   } else {
  //     data.map((sale) =>
  //       result.push({
  //         original: sale.image,
  //         description: sale.name,
  //       })
  //     );
  //   }
  //   return result;
  // };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home colors={colors} />} />
        <Route path="/about" element={<About />} />
        <Route path="/sales">
          <Route index element={<Sales items={sales} />} />
          <Route path=":id" element={<Sale items={sales} />} />
          <Route path="add-property" element={<AddProperty />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

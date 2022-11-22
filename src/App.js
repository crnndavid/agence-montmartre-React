import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";

import Navbar from "./components/Navbar";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

// React Router
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
import PropertyList from "./pages/PropertyList";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  const [allProperty, setAllProperty] = useState([]);
  const [saleProperty, setSaleProperty] = useState([]);
  const [rentalProperty, setRentalProperty] = useState([]);

  const fetchSales = async () => {
    const salesCollectionRef = collection(db, "ventes");
    const data = await getDocs(salesCollectionRef);
    setAllProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(allProperty);
  };

  const onlyRentals = async () => {
    const allLocation = await allProperty.filter(
      (property) => property.type === "location"
    );
    console.log(allLocation);

    setRentalProperty(allLocation);
  };
  const onlySales = async () => {
    const allSales = allProperty.filter(
      (property) => property.type === "vente"
    );
    setSaleProperty(allSales);
  };

  useEffect(() => {
    console.log("Appel All");
    fetchSales();
    onlyRentals();
    onlySales();
  }, []);

  const colors = {
    dark: "#2d5876",
    light: "#3e79a3",
    white: "#fefefe",
    text: "#313131",
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              colors={colors}
              rentals={rentalProperty}
              sales={saleProperty}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/acheter-louer">
          <Route index element={<PropertyList colors={colors} />} />
          <Route path=":id" element={<Detail items={allProperty} />} />
          <Route
            path="add-property"
            element={<AddProperty colors={colors} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

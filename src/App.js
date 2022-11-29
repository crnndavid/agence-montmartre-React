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
import Footer from "./components/Layout/Footer";

function App() {
  const [allProperty, setAllProperty] = useState(
    JSON.parse(localStorage.getItem("property")) || []
  );
  // const [isLoading, setIsLoading] = useState(true);
  const [saleProperty, setSaleProperty] = useState([]);
  const [rentalProperty, setRentalProperty] = useState([]);

  const fetchSales = async () => {
    const salesCollectionRef = collection(db, "ventes");
    const data = await getDocs(salesCollectionRef);
    setAllProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    localStorage.setItem("property", JSON.stringify(allProperty));
    console.log(allProperty);
  };

  const onlyRentals = () => {
    const allLocation = allProperty.filter(
      (property) => property.type === "location"
    );

    setRentalProperty(allLocation);
    console.log(allLocation);
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
    // onlyRentals();
    // onlySales();
  }, []);

  useEffect(() => {
    onlyRentals();
    onlySales();
  }, [allProperty]);

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
              // isLoading={isLoading}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/acheter-louer">
          <Route index element={<PropertyList colors={colors} />} />
          <Route path=":id" element={<Detail items={allProperty} />} />
        </Route>
        <Route
          path="/add-property"
          element={<AddProperty colors={colors} fetchSales={fetchSales} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

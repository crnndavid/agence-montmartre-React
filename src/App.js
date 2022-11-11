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
import Sale from "./pages/Sale";
import NotFound from "./pages/NotFound";

function App() {
  const [property, setProperty] = useState([]);

  const fetchSales = async () => {
    const salesCollectionRef = collection(db, "ventes");
    const data = await getDocs(salesCollectionRef);
    setProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchSales();
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
        <Route path="/" element={<Home colors={colors} />} />
        <Route path="/about" element={<About />} />
        <Route path="/acheter-louer">
          <Route index element={<PropertyList colors={colors} />} />
          <Route path=":id" element={<Sale items={property} />} />
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

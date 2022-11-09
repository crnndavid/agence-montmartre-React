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
import Sales from "./pages/Sales";
import Sale from "./pages/Sale";
import NotFound from "./pages/NotFound";
import Rentals from "./pages/Rentals";
import Rental from "./pages/Rental";
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
          <Route index element={<Sales colors={colors} items={property} />} />
          <Route path=":id" element={<Sale items={property} />} />
          <Route
            path="add-property"
            element={<AddProperty colors={colors} />}
          />
        </Route>
        <Route path="/rentals">
          <Route index element={<Rentals items={property} colors={colors} />} />
          <Route path=":id" element={<Rental items={property} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

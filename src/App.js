import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ProductPage, Cart, Favourites } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<ProductPage />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="favourite" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;

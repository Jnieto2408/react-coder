import { Navbar } from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar bg="#000" />} />
        <Route path="*" element={<Navbar />} />
      </Routes>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>

    /* <Footer/> */
  );
}

export default App;

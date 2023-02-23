import { Navbar } from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";


function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar bg="#000" />} />
          <Route path="*" element={<Navbar />} />
        </Routes>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
            />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>


    /* <Footer/> */
  );
}

export default App;

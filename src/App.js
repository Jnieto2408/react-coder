import { Navbar } from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainter";

function App() {

  return (
    <div>
      <Navbar/>
      <ItemDetailContainer itemId={1}/>
      {/* <ItemListContainer/> */}
    </div>
  );
}

export default App;

import { Navbar } from "./components/Navbar/Navbar";
import { Usuario } from "./components/Usuario/Usuario";
function App() {

  return (
    <div>
      <Navbar/>
      <Usuario nombre="John Doe" curso="React JS" edad="22"/>
    </div>
  );
}

export default App;

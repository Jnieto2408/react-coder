import { MiComponente } from "./components/MiComponente.js";
import { Usuario } from "./components/Usuario.js";
import { Usuario2 } from "./components/Usuario2.js";

function App() {
  const user1 = {
    edad: 18,
    nombre: "Jose Nieto",
    curso: "React JS"
  }
  const user2 = {
    edad: 8,
    nombre: "Conrado Lanusse",
    curso: "React JS"
  }
  return (
    <div>
      <MiComponente titulo="Un titulo" text="Un texto cualquiera" tel={1234}/>
      <MiComponente titulo="Hola Mundo" text="Un hola mundo como texto"/>
      <MiComponente titulo="Chau Mundo"/>
      {/* <Usuario nombre={user1.nombre} edad={user1.edad} curso={user1.curso}/> */}
      <Usuario {...user1}/>
      <Usuario2 user={user2}/>
    </div>
  );
}

export default App;

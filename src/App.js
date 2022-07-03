import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

const App=()=> {
  const arrayDeLink = [
    { id: "1", nombre: "About", enlace: "/" },
    { id: "2", nombre: "Habilidades", enlace: "/habilidades" },
    { id: "3", nombre: "Portfolio", enlace: "/portfolio" },
    { id: "4", nombre: "Contacto", enlace: "/contacto" },
  ];
  return (
    <div className="App">
      <NavBar arrayDeLink={arrayDeLink} />
    </div>
  );
}

export default App;

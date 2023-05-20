import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Clientes from "./components/Clientes"
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Inicio/>
      <Servicios/>
      <Clientes/>
    </div>
  );
}

export default App;

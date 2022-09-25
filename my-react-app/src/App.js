import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting= '¡¡Bienvenido a tu tienda online de bebidas!!'/>
      </main>
    </div>
  );
}

export default App;

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
        <ItemListContainer/>
      </main>
    </div>
  );
}

export default App;

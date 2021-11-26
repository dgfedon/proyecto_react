import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container--fluid">
      <NavBar />
      <ItemListContainer titulo='Título desde App' subtitulo='Subtítulo desde App' />
    </div>
  );
}

export default App;
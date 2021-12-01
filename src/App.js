import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import SlideBar from "./components/NavBar/SlideBar";


function App() {
  return (
    <div className="container--fluid">
      <NavBar />
      <SlideBar titulo='Título desde App' subtitulo='Subtítulo desde App' />
      <section className="d-flex justify-content-center m-4">
        <ItemListContainer />
        <ItemListContainer />
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;
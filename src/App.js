import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
import SlideBar from "./components/navBar/SlideBar";
import FooterContainer from "./components/footer/FooterContainer";

import './App.css';


function App() {
  return (
    <div className="container--fluid">
      <NavBar />
      <SlideBar titulo='Título desde App' subtitulo='Subtítulo desde App' />
      <ItemListContainer greeting='Encabezado' />
      <ItemDetailContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
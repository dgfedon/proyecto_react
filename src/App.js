import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import SlideBar from "./components/NavBar/SlideBar";
import FooterContainer from "./components/footer/FooterContainer";

import './App.css';


function App() {
  return (
    <div className="container--fluid">
      <NavBar />
      <SlideBar titulo='Título desde App' subtitulo='Subtítulo desde App' />
      <ItemListContainer greeting='Encabezado' />
      <FooterContainer />
    </div>
  );
}

export default App;
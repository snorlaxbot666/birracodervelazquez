import NavBar from './Componets/NavBar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonBase from './Componets/ButtonBase/ButtonBase';


function App() {
  return (
<div>

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/:nombre' element={<ItemDetailContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer mensaje={"Catalogo por Categiria"} />} />
      <Route path='/detail/:id' element={<ItemDetailContainer mensaje={"Catalogo de productos"}/>} />
      <Route path='/' element={<ItemListContainer mensaje={"Bienvenidos"} />} />
    </Routes>
  </BrowserRouter>
</div>
);
}
<ButtonBase/>


export default App;
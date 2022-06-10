import NavBar from './Componets/NavBar/Navbar';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
<div>

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/:id/:nombre' element={<ItemDetailContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer mensaje={"Catalogo por Categiria"} />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer mensaje={"Catalogo de productos"}/>} />
      <Route path='/' element={<ItemListContainer mensaje={"Bienvenidos"} />} />
    </Routes>
  </BrowserRouter>
</div>
);
}
    


export default App;
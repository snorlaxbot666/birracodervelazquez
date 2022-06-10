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
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>
</div>
);
}
    


export default App;
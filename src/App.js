
import './App.css';
import Navbar from './Componets/Navbar/Navbar.jsx';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
   <div>
    <Navbar/>
    <ItemListContainer greeting='Hola Birreros' />
 </div>

  )
}

export default App;

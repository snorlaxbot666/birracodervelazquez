import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
return (
 <nav style={{display: 'flex'}}>
  <h2>BirraCoder Velazquez</h2>
  <div>
      <button>Ipa</button>
      <button>Apa</button>
      <button>Stout</button>
  </div>
<CartWidget/>

 </nav>
)
}

export default Navbar
import React, { useState } from 'react';
import Cart from './components/Cart';
import Listings from './components/Listings';

const SHOW_CART = false;

function App() {
  const [showCart, setShowCart] = useState(SHOW_CART)
  const [inCart, setCart] = useState([])

  function handleGoToCart(){
    console.log("goto cart")
    setShowCart(!showCart)
  }

  function getCartTotal(){
    return inCart.length
  }

  function updateCart(item){
    console.log("updateCart")
    console.log(item)
    setCart([...inCart, item])
  }

  return (
    <div className="App">
      <header className="App-header">
        Maxwellly's Scuffed Pokémon e-commerse site
        <button onClick={handleGoToCart}> Shopping Cart ({getCartTotal()})</button>
      </header>
        {!showCart &&<Listings trigger={updateCart}/>}
        {showCart && <Cart trigger={setShowCart} items={[...inCart]}/>}
    </div>
  );
}

export default App;

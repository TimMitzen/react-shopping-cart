import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CardContext } from "./contexts/CardContext";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([ ...cart, item]);
  };

  const removeItem = id =>{
	setCart([]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem, removeItem }}>
        <CardContext.Provider value={{ cart }}>
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
        </CardContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

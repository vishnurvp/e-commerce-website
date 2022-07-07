import {useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Store/CartContextProvider";


function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartClickHandler = () => {
    setCartIsOpen(true);
  };
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };


  return (
    <CartContextProvider>
      {cartIsOpen && (
        <Cart onClose={cartCloseHandler} />
      )}
      <Header onCartClick={cartClickHandler} />
      <Store
        onCartClick={cartClickHandler}
      />
      <Footer />
    </CartContextProvider>
  );
}

export default App;

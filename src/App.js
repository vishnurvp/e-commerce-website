import { Route } from "react-router-dom";
import { Fragment, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Store/CartContextProvider";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUsPage";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartClickHandler = () => {
    setCartIsOpen(true);
  };
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <Fragment>
      <Header onCartClick={cartClickHandler} />
      <Route path="/store">
        <CartContextProvider>
          {cartIsOpen && <Cart onClose={cartCloseHandler} />}
          <Store onCartClick={cartClickHandler} />
        </CartContextProvider>
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      <Footer />
    </Fragment>
  );
}

export default App;

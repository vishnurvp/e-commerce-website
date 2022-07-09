import { Route, Switch } from "react-router-dom";
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
import ProductDetails from "./components/ProductDetails";

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
      <Switch>
        <Route path="/store" exact>
          <CartContextProvider>
            {cartIsOpen && <Cart onClose={cartCloseHandler} />}
            <Store onCartClick={cartClickHandler} />
          </CartContextProvider>
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/store/product-details/:productId" exact>
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;

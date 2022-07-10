import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import classes from "./App.module.css";
import Store from "./components/Store";
import CartContextProvider from "./components/Store/CartContextProvider";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUsPage";
import ProductDetails from "./components/ProductDetails";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./components/Store/Auth-Context";
import Layout from "./components/Layout/Layout";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <h1 className={classes.welcome}>Welcome</h1>
        </Route>
        <Route path="/login" exact>
          {!authCtx.isLoggedIn && <AuthForm />}
        </Route>
        <Route path="/user" exact>
          {authCtx.isLoggedIn && (
            <h1 className={classes.loggedIn}>You are logged In</h1>
          )}
        </Route>
        <Route path="/store" exact>
          {authCtx.isLoggedIn && (
            <CartContextProvider>
              <Store />
            </CartContextProvider>
          )}
          {!authCtx.isLoggedIn && <Redirect to='/login'></Redirect>}
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
    </Layout>
  );
}

export default App;

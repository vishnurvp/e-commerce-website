import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Suspense, useContext } from "react";
import classes from "./App.module.css";

import AuthContext from "./components/Store/Auth-Context";
import Layout from "./components/Layout/Layout";

function App() {
  const authCtx = useContext(AuthContext);

  const AuthForm = React.lazy(() => import("./components/Auth/AuthForm"));
  const ProductDetails = React.lazy(() =>
    import("./components/ProductDetails")
  );
  const HomePage = React.lazy(() => import("./components/HomePage"));
  const AboutPage = React.lazy(() => import("./components/AboutPage"));
  const Store = React.lazy(() => import("./components/Store"));
  const ContactUs = React.lazy(() => import("./components/ContactUsPage"));

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <h1 className={classes.welcome}>Welcome</h1>
          </Route>
          <Route path="/login" exact>
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/user" exact>
            {authCtx.isLoggedIn && (
              <Fragment>
              <h1 className={classes.loggedIn}>You are logged In</h1>
              <h2 className={classes.loggedIn}>Your email: {authCtx.email}</h2>
              </Fragment>
            )}
          </Route>
          <Route path="/store" exact>
            {authCtx.isLoggedIn && <Store />}
            {!authCtx.isLoggedIn && <Redirect to="/login"></Redirect>}
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
      </Suspense>
    </Layout>
  );
}

export default App;

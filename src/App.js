import { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";


function App() {
  return <Fragment>
    <Header />
    <Store />
    <Footer />
  </Fragment>;
}

export default App;

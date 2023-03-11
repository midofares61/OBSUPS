import Header from "../common/Header/Header";
import Home from "../Home/Home.jsx";
import Footer from "../common/Footer/Footer";
import React from "react";
import About from "../About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetailes from "../ProductDetailes/ProductDetailes";
function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product/:productId" component={ProductDetailes} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default Pages;

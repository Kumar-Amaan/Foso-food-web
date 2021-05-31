import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Details from "./components/Details";
import Payment from "./components/Payment";
import { Route, Switch } from "react-router-dom";
import Logout from "./components/Auth/Logout";
import Log from "./components/Log";
import Footer from "./components/Footer";
import Admin from "./components/Auth/Admin";
import Contact from "./components/Contact";
import Account from "./components/Account";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/log" component={Log} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;

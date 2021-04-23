import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/HomeNavbar";

import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import SuccessPage from "./pages/SuccessPage";

import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/faq" exact component={FaqPage} />
        <Route path="/success" exact component={SuccessPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;

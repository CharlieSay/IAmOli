import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Main = () => {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={Page1} />
        </Switch>
        <Switch>
          <Route path="/page2" component={Page2} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;

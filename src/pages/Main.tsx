import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import ErrorPage from "./ErrorPage";

const Main = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="o-page-align">
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;

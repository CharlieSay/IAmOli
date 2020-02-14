import React from "react";
import { Route,   Switch } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ErrorPage from "./pages/ErrorPage";
import {withLayout} from "./components/WithLayout";

const Main = () => {

  const HomePageWithLayout = withLayout(Page1)
  const AboutMeWithLayout = withLayout(Page2)
  const ErrorPageWithLayout = withLayout(ErrorPage)

  return (
    <Switch>
      <Route exact path="/" component={HomePageWithLayout} />
      <Route exact path="/page2" component={AboutMeWithLayout} />
      <Route component={ErrorPageWithLayout} />
    </Switch>
  );
};

export default Main;

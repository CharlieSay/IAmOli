import React from "react";
import { Route,   Switch } from "react-router-dom";
import Page1 from "./pages/homepage";
import Page2 from "./pages/about-me";
import WonderLoopItem from "./pages/wonder-loop";
import ErrorPage from "./pages/error-page";
import {withLayout} from "./components/with-layout";

const Main = () => {

  const HomePageWithLayout = withLayout(Page1)
  const AboutMeWithLayout = withLayout(Page2)
  const FullPageItemWithLayout = withLayout(WonderLoopItem)
  const ErrorPageWithLayout = withLayout(ErrorPage)

  return (
    <Switch>
      <Route exact path="/" component={HomePageWithLayout} />
      <Route exact path="/about" component={AboutMeWithLayout} />
      <Route exact path="/item" component={FullPageItemWithLayout} />
      <Route component={ErrorPageWithLayout} />
    </Switch>
  );
};

export default Main;

import React from "react";
import { Route,   Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutMe from "./pages/about-me";
import WonderLoopItem from "./pages/wonder-loop";
import FullPageItem from "./pages/full-page-item-copy";
import ErrorPage from "./pages/error-page";
import {withLayout} from "./components/with-layout";

const Main = () => {

  const HomePageWithLayout = withLayout(HomePage)
  const AboutMeWithLayout = withLayout(AboutMe)
  const FullPageItemWithLayout = withLayout(WonderLoopItem)
  const ErrorPageWithLayout = withLayout(ErrorPage)

  return (
    <Switch>
      <Route exact path="/" component={HomePageWithLayout} />
      <Route exact path="/about" component={AboutMeWithLayout} />
      <Route exact path="/item" component={FullPageItemWithLayout} />
      <Route exact path="/item/:itemId" component={FullPageItem} />
      <Route component={ErrorPageWithLayout} />
    </Switch>
  );
};

export default Main;

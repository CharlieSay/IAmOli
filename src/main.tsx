import React from "react";
import { Route,   Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutMe from "./pages/about-me";
import FullPageContentContainer from "./pages/full-page-item-container";
import ErrorPage from "./pages/error-page";
import {withLayout} from "./components/with-layout";

const Main = () => {

  const HomePageWithLayout = withLayout(HomePage)
  const AboutMeWithLayout = withLayout(AboutMe)
  const FullPageItemWithLayoutFull = withLayout(FullPageContentContainer)
  const ErrorPageWithLayout = withLayout(ErrorPage)

  return (
    <Switch>
      <Route exact path="/" component={HomePageWithLayout} />
      <Route exact path="/about" component={AboutMeWithLayout} />
      <Route exact path="/item/:itemId" component={FullPageItemWithLayoutFull} />
      <Route component={ErrorPageWithLayout} />
    </Switch>
  );
};

export default Main;

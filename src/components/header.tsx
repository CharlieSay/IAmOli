import React, { Fragment } from "react";
import { Navigation } from "./navigation";
import { SocialHeader } from "./social";
import "./header.scss";

export const Header = () => {
  return (
    <Fragment>
      <div className="header_parent o-page-align">
        <div className="child-container">
          <Navigation />
        </div>
        <h1 style={{ alignContent: "center" }}> I AM OLI </h1>
        <div className="child-container">
          <SocialHeader />
        </div>
      </div>
    </Fragment>
  );
};

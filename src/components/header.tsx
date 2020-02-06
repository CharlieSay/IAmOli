import React, { Fragment } from "react";
import "./header.scss";

export const Header = () => {
  return (
    <Fragment>
      <div className="header_parent o-page-align">
        <div className="navigation App-medium">
          <span> STORE </span>
          <span> ABOUT </span>
          <span> PORTFOLIO </span>
        </div>
        <h1 style={{ alignContent: "center" }}> I AM OLI </h1>
        <h1 style={{ alignContent: "center" }}> TFIL </h1>
      </div>
    </Fragment>
  );
};

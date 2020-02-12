import React, { Fragment } from "react";
import heroImage from "../assets/img/hero.png";
import { useMediaQuery } from "react-responsive";

import "../components/page1.scss";

const Page1 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });  

  return (
    <Fragment>
      <div
        className="App  "
        style={{ display: "nowrap", justifyContent: "center" }}
      >
        <div className="page-container o-page-spacer">
          <div>
            <a href="https://www.youtube.com/watch?v=t6S0U0dxcBY">
              {isDesktop && (
                <img
                  className="heroImage"
                  style={{ flex: "nowrap" }}
                  src={heroImage}
                />
              )}
              {isMobile && (
                 <img
                 className="heroImage-mobile"
                 style={{ flex: "nowrap" }}
                 src={heroImage}
               />
              )}
            </a>
          </div>
          <div className="o-page-align section-one">
            <a
              href="https://instagram.com/charliesay"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page1;

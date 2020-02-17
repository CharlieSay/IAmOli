/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import heroImage from "../assets/img/hero.png";
import { useMediaQuery } from "react-responsive";

import "../scss/pages/homepage.scss";

const Page1 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });  

  return (
    <Fragment>
        <div className="o-page-spacer">
            <a href="https://www.youtube.com/watch?v=t6S0U0dxcBY">
              {isDesktop && (
               <span>Click Me To See A Showreel </span>
              )}
            </a>
          </div>
            <a
              href="https://instagram.com/charliesay"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
    </Fragment>
  );
};

export default Page1;

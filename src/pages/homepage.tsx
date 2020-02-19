/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import ContentCarousel from "../components/content-carousel"

import "../scss/pages/homepage.scss";

const Page1 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <Fragment>
      <div className="o-page-align">
        <a href="https://www.youtube.com/watch?v=t6S0U0dxcBY">
          {isDesktop && <span>Click Me To See A Showreel </span>}
        </a>
        <a
          href="https://instagram.com/charliesay"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>

        <ContentCarousel/>
      </div>
    </Fragment>
  );
};

export default Page1;

/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import ContentCarousel from "../components/content-carousel";

import "../scss/pages/homepage.scss";

const Page1 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <Fragment>
      <div className="o-page-align">
        {isDesktop && (
          <section className="app-medium top__spot__text">
            <h4> RECENT CONTENT </h4>
          </section>
        )}
        <ContentCarousel />
      </div>
    </Fragment>
  );
};

export default Page1;

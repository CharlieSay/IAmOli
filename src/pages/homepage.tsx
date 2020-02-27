import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import ContentCarousel from "../components/content-carousel";
import HeroCard from "../components/hero-card";

import "../scss/pages/homepage.scss";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <Fragment>
      {isDesktop && (
        <div className="o-page-align">
          <div>
            <section className="top__spot__hero">
              <HeroCard
                {...{
                  imageSrc: "https://i.imgur.com/kwuQWdc.png",
                  contentTitle: "Wonder Loops",
                  offsiteUrl: "https://www.youtube.com/watch?v=t6S0U0dxcBY",
                  isMobile: false
                }}
              />
            </section>
            <section className="app-medium top__spot__text">
              <h4> RECENT CONTENT </h4>
            </section>
          </div>
          <ContentCarousel />
        </div>
      )}
      {isMobile && (
        <section className="app-medium top__spot__text">
      <section className="top__spot__hero">
              <HeroCard
                {...{
                  imageSrc: "https://i.imgur.com/sxjDQI4.png",
                  contentTitle: "Wonder Loops",
                  offsiteUrl: "https://www.youtube.com/watch?v=t6S0U0dxcBY",
                  isMobile: true
                }}
              />
            </section>
          <h4> RECENT CONTENT </h4>
          <ContentCarousel />
        </section>
      )}
    </Fragment>
  );
};

export default HomePage;

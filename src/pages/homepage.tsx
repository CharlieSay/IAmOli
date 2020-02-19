import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import ContentCarousel from "../components/content-carousel";
import HeroCard from "../components/hero-card";

import "../scss/pages/homepage.scss";

const Page1 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <Fragment>
      <div className="o-page-align">
        {isDesktop && (
          <div>
          <section className="top__spot__hero">
              <HeroCard {...{imageSrc: 'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27', contentTitle: 'Wonder Loops', offsiteUrl: 'https://www.virginmedia.com/mobile/pay-monthly/apple/iphone-11?colour=Black&storage=128&contractDuration=36&tariffID=1009710960&tab=plan'}}/>
          </section>
          <section className="app-medium top__spot__text">
            <h4> RECENT CONTENT </h4>
          </section>
          </div>
        )}
        <ContentCarousel />
      </div>
    </Fragment>
  );
};

export default Page1;

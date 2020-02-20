import ContentCard from "./content-card";
import { useMediaQuery } from "react-responsive";
import React, { Fragment } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

import PackOne from "../assets/img/PACK1.png";
import PackTwo from "../assets/img/PACK2.png";
import PackThree from "../assets/img/FILm3.png";
import PackFour from "../assets/img/PACK4.png";
import PackFive from "../assets/img/PACK6.png";

import "../scss/components/content-carousel.scss";

const carouselDummyData = [
  {
    imageSrc: PackOne,
    imageAltText: "f_g_1",
    imageDescription: "string",
    contentTitle: "Wonder Loops",
    contentDescription: "Hillsong United - Wonder",
    offsiteUrl: "https://www.youtube.com/watch?v=t6S0U0dxcBY"
  },
  {
    imageSrc: PackTwo,
    imageAltText: "f_g_2",
    imageDescription: "string",
    contentTitle: "Awake My Soul",
    contentDescription: "Hillsong - Awake My Soul",
    offsiteUrl: "https://www.youtube.com/watch?v=TKs2O8l23Cg"
  },
  {
    imageSrc: PackThree,
    imageAltText: "f_g_3",
    imageDescription: "string",
    contentTitle: "VJ Loops 1",
    contentDescription: "Start of VJ Loops",
    offsiteUrl: "https://www.audaciouschurch.com"
  },
  {
    imageSrc: PackFour,
    imageAltText: "f_g_4",
    imageDescription: "string",
    contentTitle: "VJ Loops 2",
    contentDescription: "MORE VJ LOOPS",
    offsiteUrl: "https://www.audaciouschurch.com"
  },
  {
    imageSrc: PackFive,
    imageAltText: "f_g_5",
    imageDescription: "string",
    contentTitle: "Film Grain 50mm",
    contentDescription: "Edgy Loopz",
    offsiteUrl: "https://www.audaciouschurch.com"
  }
];

const ContentCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <Fragment>
      <div className="carousel__container o-page-spacer">
        {isMobile && (
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={300}
            totalSlides={5}
          >
            <Slider>
              {carouselDummyData.map((carouselData, i) => (
                <Slide index={(i+1)}>
                  <div id={`content-id-${i}`}>
                    <ContentCard {...carouselData} />
                </div>
                  </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        )}
        {isDesktop && (
          <div className="carousel__container">
            {carouselDummyData.map((carouselData, i) => (
              <div id={`content-id-${i}`}>
                <ContentCard {...carouselData} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ContentCarousel;

import ContentCard from "./content-card";
import React, { Fragment } from "react";

import "../scss/components/content-carousel.scss";

const carouselDummyData = [
  {
    imageSrc: "string",
    imageAltText: "f_g_1",
    imageDescription: "string",
    contentTitle: "Wonder Loops",
    contentDescription: "Hillsong United - Wonder",
    offsiteUrl: "https://www.youtube.com/watch?v=t6S0U0dxcBY"
  },
  {
    imageSrc: "string",
    imageAltText: "f_g_2",
    imageDescription: "string",
    contentTitle: "Awake My Soul",
    contentDescription: "Hillsong - Awake My Soul",
    offsiteUrl: "https://www.youtube.com/watch?v=TKs2O8l23Cg"
  },
  {
    imageSrc: "string",
    imageAltText: "f_g_3",
    imageDescription: "string",
    contentTitle: "VJ Loops 1",
    contentDescription: "Start of VJ Loops",
    offsiteUrl: "https://www.audaciouschurch.com"
  },
  {
    imageSrc: "string",
    imageAltText: "f_g_4",
    imageDescription: "string",
    contentTitle: "VJ Loops 2",
    contentDescription: "MORE VJ LOOPS",
    offsiteUrl: "https://www.audaciouschurch.com"
  },
  {
    imageSrc: "string",
    imageAltText: "f_g_5",
    imageDescription: "string",
    contentTitle: "Film Grain 50mm",
    contentDescription: "Edgy Loopz",
    offsiteUrl: "https://www.audaciouschurch.com"
  }
];

const ContentCarousel = () => {
  return (
    <Fragment>
      <div className="carousel__container o-page-spacer">
        {carouselDummyData.map((carouselData, i) => (
          <div id={`content-id-${i}`}>
            <ContentCard {...carouselData} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ContentCarousel;

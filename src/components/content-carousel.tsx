import ContentCard from "./content-card";
import React, { Fragment } from "react";

import "../scss/components/content-carousel.scss"

const carouselDummyData = [
  {
    imageSrc: "string",
    imageAltText: "string",
    imageDescription: "string",
    contentTitle: "Content Title 1",
    contentDescription: "description 1",
    offsiteUrl: "string"
  },
  {
    imageSrc: "string",
    imageAltText: "string",
    imageDescription: "string",
    contentTitle: "Content Title 2",
    contentDescription: "desc 2",
    offsiteUrl: "string"
  },
  {
    imageSrc: "string",
    imageAltText: "string",
    imageDescription: "string",
    contentTitle: "Content Title 3",
    contentDescription: "desc 3",
    offsiteUrl: "string"
  },
  {
    imageSrc: "string",
    imageAltText: "string",
    imageDescription: "string",
    contentTitle: "Content Title 4",
    contentDescription: "desc 4",
    offsiteUrl: "string"
  },
  {
    imageSrc: "string",
    imageAltText: "string",
    imageDescription: "string",
    contentTitle: "Content Title 5",
    contentDescription: "desc 5",
    offsiteUrl: "string"
  }
];

const ContentCarousel = () => {
  return (
    <Fragment>
      <div className="carousel__container o-page-spacer">
        {carouselDummyData.map((carouselData, i) => (
          <ContentCard {...carouselData} />
        ))}
      </div>
    </Fragment>
  );
};

export default ContentCarousel;

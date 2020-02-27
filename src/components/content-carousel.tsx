import ContentCard, { ContentItemProp } from "./content-card";
import { useMediaQuery } from "react-responsive";
import React, { Fragment } from "react";
import {catalogue} from "../constants/content-catalogue"

import "../scss/components/content-carousel.scss";

const ContentCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  const carouselDummyData : ContentItemProp[] = []

  catalogue.map((item) => (
    carouselDummyData.push(
        {
          id: item.id,
          imageSrc: item.imageSrcHomepage ,
          imageAltText: item.imageAltText,
          contentTitle: item.contentTitle,
          contentTagline: item.contentTagline,
          offsiteUrl: item.contentPreviewUrl
        }
      )
  ))

  return (
    <Fragment>
      <div className="carousel__container o-page-spacer">
        {isMobile && (
          <div className="carousel__results__skeleton">
            <ul className="carousel__results__list">
              {carouselDummyData.map((carouselData, i) => (
                  <li key={`content-id-${i}`} className="carousel-card">
                    <ContentCard {...carouselData} id={i} />
                  </li>
              ))}
            </ul>
            </div>
        )}
        {isDesktop && (
          <div className="carousel__container">
            {carouselDummyData.map((carouselData, i) => (
              <div key={`content-id-${i}`}>
                <ContentCard {...carouselData} id={i}  />
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ContentCarousel;

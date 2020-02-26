import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import "../scss/components/content-card.scss";
import { Redirect } from "react-router";

const ContentCard = (props: ContentItemProp) => {
  const {
    id,
    imageSrc,
    imageAltText,
    imageDescription,
    contentTitle,
    contentDescription,
    offsiteUrl
  } = props;

  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <Fragment>
      <div className="content__card">
        <a href={offsiteUrl} target="_blank" rel="noopener noreferrer">
          <div className="content__card__image">
            {imageSrc && <img src={imageSrc} alt={imageAltText}></img>}
            {!imageSrc && (
              <div className="content__card__image__desc">
                <span>{imageDescription}</span>}
              </div>
            )}
            {isDesktop && (
              <div className="content__card__information">
                <h3>{contentTitle.toUpperCase()}</h3>
                <span className="app-medium">
                  {contentDescription?.toLowerCase()}
                </span>
              </div>
            )}
          </div>
        </a>
        <a href={`item/${id}`}>
        <button>See More</button>
        </a>
      </div>
    </Fragment>
  );
};

export type ContentItemProp = {
  id: number,
  imageSrc?: any;
  imageAltText?: string;
  imageDescription?: string;
  contentTitle: string;
  contentDescription?: string;
  offsiteUrl: string;
};

export default ContentCard;

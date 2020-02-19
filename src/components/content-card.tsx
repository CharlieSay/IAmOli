import React, { Fragment } from "react";

import "../scss/components/content-card.scss"

const ContentCard = (props: ContentCardProps) => {
  const {
    imageSrc,
    imageAltText,
    imageDescription,
    contentTitle,
    contentDescription,
    offsiteUrl
  } = props;

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
            <div className="content__card__information">
              <h4>{contentTitle}</h4>
              <span>{contentDescription}</span>
            </div>
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export type ContentCardProps = {
  imageSrc?: string;
  imageAltText?: string;
  imageDescription?: string;
  contentTitle: string;
  contentDescription?: string;
  offsiteUrl: string;
};


export default ContentCard;
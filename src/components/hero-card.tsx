import React, { Fragment } from "react";

import "../scss/components/hero-card.scss";

const HeroCard = (props: HeroCardProp) => {
  const { imageSrc, contentTitle, offsiteUrl } = props;

  return (
    <Fragment>
      <div className="hero__card">
        <a href={offsiteUrl}>
          <img src={imageSrc} alt="hero text"></img>
          <div className="hero__card__title hero__card__block">
            <span>
              {contentTitle.toLocaleUpperCase()}
            </span>
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export interface HeroCardProp {
  imageSrc: string;
  contentTitle: string;
  offsiteUrl: string;
}

export default HeroCard;

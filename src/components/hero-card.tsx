import React, { Fragment } from "react";

import "../scss/components/hero-card.scss";

const HeroCard = (props: HeroCardProp) => {
  const { imageSrc, contentTitle, offsiteUrl, isMobile } = props;

  const imgClassName = isMobile
    ? "hero__card__img__mobile"
    : "hero__card__img__desktop";

  return (
    <Fragment>
      <div className="hero__card">
        <a href={offsiteUrl}>
          <img className={imgClassName} src={imageSrc} alt="hero text"></img>
          {!isMobile && (
            <div className="hero__card__title hero__card__block">
              <span>{contentTitle.toLocaleUpperCase()}</span>
            </div>
          )}
        </a>
      </div>
    </Fragment>
  );
};

export interface HeroCardProp {
  imageSrc: string;
  contentTitle: string;
  offsiteUrl: string;
  isMobile: boolean;
}

export default HeroCard;

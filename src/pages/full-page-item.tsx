import React from "react";
import { useMediaQuery } from "react-responsive";
import { QualityLevelWithPrice } from "../constants/quality-level";
import "../scss/pages/full-page-item.scss";

type FullPageItemProps = {
  pageTitle: string;
  imageSrc?: any;
  imageAltText?: string;
  contentTitle?: string;
  contentDescription?: string;
  contentPreviewUrl?: string;
  itemQualityLevels: QualityLevelWithPrice[];
};

const FullPageItem = (props: FullPageItemProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  const {
    pageTitle,
    imageSrc,
    imageAltText,
    contentTitle,
    contentDescription,
    contentPreviewUrl,
    itemQualityLevels
  } = props;

  return (
    <div className="full__page">
      {isDesktop && (
        <div className="full__page__desktop">
          <div className="full__page__desktop__col1">
            <img src={imageSrc}></img>
          </div>
          <div className="full__page__desktop__col2 app-medium">
            <a>Preview links</a>
            <h1>{contentTitle?.toUpperCase()}</h1>
            <span>{contentDescription?.toLowerCase()}</span>
            <ul className="full__page__desktop__col2__price__container">
              {itemQualityLevels.map((itemPriceQuality, i) => (
                <div id={`content-id-${i}`}>
                  <li>
                    <span>Price ({itemPriceQuality.qualityLevel}): </span>
                  </li>
                  <li>
                    <h1>£{itemPriceQuality.price}</h1>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="full__page__mobile">
          <img src={imageSrc} className="full__page__mobile__image"></img>
          <h3>{contentTitle?.toUpperCase()}</h3>
          <span className="app__medium">
            {contentDescription?.toLowerCase()}
          </span>
        </div>
      )}
    </div>
  );
};

export default FullPageItem;

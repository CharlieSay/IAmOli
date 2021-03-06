import React from "react";
import { useMediaQuery } from "react-responsive";
import Dropdown, { Option } from "react-dropdown";
import { FullPageItemProps } from "../constants/fpi-utils";
import "../scss/pages/full-page-item.scss";
import "react-dropdown/style.css";

const HandleDropDownSelection = (selection: Option) => {
  console.log(selection.label);
  console.log(selection.value);
};

const FullPageItem = (props: FullPageItemProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });
  
  const {
    id,
    pageTitle,
    imageSrc,
    imageAltText,
    contentTitle,
    contentDescription,
    contentTagline,
    contentPreviewUrl,
    itemPricingArray = []
  } = props

  document.title = pageTitle

  return (
    <div className="full__page">
      {isDesktop && (
        <div className="full__page__desktop">
          <div className="full__page__desktop__col1">
            <div className="full__page__desktop__col1__youtube">
              <a href={contentPreviewUrl}> Preview on YouTube </a>
            </div>
            <div className="full__page__desktop__col1__image">
              <img src={imageSrc} alt={imageAltText}></img>
            </div>
          </div>
          <div className="full__page__desktop__col2 app-medium">
            <h1>{contentTitle.toUpperCase()}</h1>
            <h5>{contentTagline}</h5>
            <span>{contentDescription.toLowerCase()}</span>
            <ul className="full__page__desktop__col2__price__container">
              <Dropdown
                options={itemPricingArray}
                onChange={HandleDropDownSelection}
                placeholder="Content Prices"
              />
            </ul>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="full__page__mobile">
          <img
            src={imageSrc}
            className="full__page__mobile__image"
            alt={imageAltText}
          ></img>
          <h3>{contentTitle.toUpperCase()}</h3>
          <span className="app__medium">
            {contentDescription.toLowerCase()}
          </span>
          <div className="o-page-spacer">
            <Dropdown
              options={itemPricingArray}
              onChange={HandleDropDownSelection}
              placeholder="Content Prices"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullPageItem;

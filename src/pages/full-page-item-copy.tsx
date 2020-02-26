import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Dropdown, { Option } from "react-dropdown";
import { QualityLevelWithPrice } from "../constants/quality-level";
import "../scss/pages/full-page-item.scss";
import "react-dropdown/style.css";

type FullPageItemProps = {
  pageTitle?: string;
  imageSrc?: any;
  imageAltText?: string;
  contentTitle?: string;
  contentDescription?: string;
  contentPreviewUrl?: string;
  itemQualityLevels?: QualityLevelWithPrice[];
};

const FullPageItem = (props: FullPageItemProps) => {
  const { itemId } = useParams();

  return (
    <div className="full__page">
      <h1>{itemId}</h1>
      {/* <div className="full__page__desktop">
          <div className="full__page__desktop__col1">
            <div className="full__page__desktop__col1__youtube">
              <a href={contentPreviewUrl}> Preview on YouTube </a>
            </div>
            <div className="full__page__desktop__col1__image">
              <img src={imageSrc} alt={imageAltText}></img>
            </div>
          </div>
          <div className="full__page__desktop__col2 app-medium">
            <h1>{contentTitle?.toUpperCase()}</h1>
            <span>{contentDescription?.toLowerCase()}</span>
          </div>
        </div> */}
    </div>
  );
};

export default FullPageItem;

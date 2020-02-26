import React from "react";
import { useParams } from "react-router-dom";
import { FullPageItemProps } from "../constants/fpi-utils";
import { catalogue } from "../constants/content-catalogue";
import { Option } from "react-dropdown";
import "../scss/pages/full-page-item.scss";
import "react-dropdown/style.css";
import FullPageItem from "./full-page-item";
import { Redirect } from "react-router";

const FullPageItemContainer = () => {
  const { itemId } = useParams();
  const catalogueItem = catalogue[itemId];
  const itemQualityArrayForDropdown: Option[] = [];

  try {
    catalogueItem.itemQualityLevels.map((item, i) =>
      itemQualityArrayForDropdown.push({
        value: `${i}-${item.qualityLevel}`,
        label: `${item.qualityLevel} : £${item.price}`
      })
    );
  } catch (error) {
    return <Redirect to='/404'/>
  }

  const foundStockItem: FullPageItemProps = {
    id: catalogueItem.id,
    pageTitle: catalogueItem.pageTitle,
    imageSrc: catalogueItem.imageSrc,
    imageAltText: catalogueItem.imageAltText,
    contentTitle: catalogueItem.contentTitle,
    contentDescription: catalogueItem.contentDescription,
    contentPreviewUrl: catalogueItem.contentPreviewUrl,
    contentTagline: catalogueItem.contentTagline,
    itemPricingArray: itemQualityArrayForDropdown
  };

  return <FullPageItem {...foundStockItem} />;
};

export default FullPageItemContainer;

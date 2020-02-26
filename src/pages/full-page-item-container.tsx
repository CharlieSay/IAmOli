import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Dropdown, { Option } from "react-dropdown";
import { FullPageItemProps } from "../constants/full-page-item-prop-type";
import { catalogue } from "../constants/content-catalogue";
import "../scss/pages/full-page-item.scss";
import "react-dropdown/style.css";
import FullPageItem from "./full-page-item";

const FullPageItemContainer = () => {
  console.log('fire 1')
  const { itemId } = useParams();
  console.log('fire 2')
  const catalogueItem = catalogue[itemId]
  console.log('fire 3')
  console.log(catalogueItem)

  const foundStockItem: FullPageItemProps = {
    id: catalogueItem.id,
    pageTitle: catalogueItem.pageTitle,
    imageSrc: catalogueItem.imageSrc,
    imageAltText: catalogueItem.imageAltText,
    contentTitle: catalogueItem.contentTitle,
    contentDescription: catalogueItem.contentDescription,
    contentPreviewUrl: catalogueItem.contentPreviewUrl,
    // itemQualityLevels: catalogueItem.itemQualityLevels
  };

  return <FullPageItem {...foundStockItem} />;
};

export default FullPageItemContainer

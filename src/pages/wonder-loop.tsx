import React from "react";

import FullPageItem from "./full-page-item";
import { QualityLevel } from "../constants/quality-level";

const WonderLoopItem = () => {
  return (
    <FullPageItem
      pageTitle="Item Example | I Am Oli"
      imageSrc="https://cdn.shopify.com/s/files/1/0071/2923/5525/products/Sequence_01.00_00_00_10.Still001_550x825.jpg?v=1578283501"
      imageAltText="Item Example Alternative Text"
      contentTitle="Item Example"
      contentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      contentPreviewUrl="https://www.youtube.com/watch?v=t6S0U0dxcBY"
      itemQualityLevels={[
        {
          qualityLevel: QualityLevel.FourK,
          price: "123"
        },
        {
          qualityLevel: QualityLevel.TenEighty,
          price: "90"
        }
      ]}
    />
  );
};

export default WonderLoopItem
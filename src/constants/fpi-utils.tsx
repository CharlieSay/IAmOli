import { Option } from "react-dropdown";

export type FullPageItemProps = {
    id: number;
    pageTitle: string;
    imageSrc: any;
    imageAltText: string;
    contentTitle: string;
    contentDescription: string;
    contentPreviewUrl: string;
    itemPricingArray: Option[];
  };
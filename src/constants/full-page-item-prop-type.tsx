import { QualityLevelWithPrice } from "./quality-level";

export type FullPageItemProps = {
    id?: number;
    pageTitle?: string;
    imageSrc?: any;
    imageAltText?: string;
    contentTitle?: string;
    contentDescription?: string;
    contentPreviewUrl?: string;
    itemQualityLevels?: QualityLevelWithPrice[];
  };
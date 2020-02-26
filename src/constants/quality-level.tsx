export enum QualityLevel {
    FourK = '4K',
    TenEighty = '1080',
    SevenTwenty = '720',
}

export type QualityLevelWithPrice = {
    qualityLevel: string;
    price: string;
}
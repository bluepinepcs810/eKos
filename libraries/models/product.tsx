import { CATEGORY_KEYS } from "../constants/categories";
import { ProductCondition } from "../constants/products";
import { FileType } from "../types/common";

export enum CoinTypeEnum {
    SOL = 1
}
export type ProductModel = {
    name: string,
    description: string,
    coinType: CoinTypeEnum,
    price: number,
    category: CATEGORY_KEYS,
    condition: ProductCondition,
    hashTags: string[]
    photos: FileType[]
};

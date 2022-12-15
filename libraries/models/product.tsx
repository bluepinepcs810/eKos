import { CATEGORY_KEYS } from '../constants/categories';
import { ProductCondition } from '../constants/products';
import { FileType, ID } from '../types/common';
import { UserShortType } from './user';

export enum CoinTypeEnum {
  SOL = 1,
}
type ProductBaseModel = {
  name: string;
  description: string;
  coinType: CoinTypeEnum;
  price: number;
  category: CATEGORY_KEYS;
  condition: ProductCondition;
  hashTags: string[];
};

export type ProductModel = ProductBaseModel & {
  photos: FileType[];
};

export type ProductShortModel = {
  id: ID;
  name: string;
  coinType: CoinTypeEnum;
  price: number;
  category: CATEGORY_KEYS;
  isLiked: boolean;
};
export type ProductDetailModel = ProductBaseModel & {
  id: ID;
  photos: string[];

  seller: UserShortType;
  rate: number;
  rateCount: number;
  isLiked: boolean;
  viewCount: number;
  likeCount: number;
};

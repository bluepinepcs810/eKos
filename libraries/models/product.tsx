import { CATEGORY_KEYS } from '../constants/categories';
import { ProductCondition } from '../constants/products';
import { FileType, ID } from '../types/common';
import { UserType } from './user';

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
  countryCode?: string;
  city?: string;
};

export type ProductModel = ProductBaseModel & {
  photos: FileType[];
};

export type ProductShortModel = ProductBaseModel & {
  id: ID;
  photos: string[];
};
export type ProductDetailModel = ProductBaseModel & {
  id: ID;
  photos: string[];

  listedUser: UserType;
  rating?: number;
  rated?: number;
  isLiked: boolean;
  viewed: number;
  liked: number;
  reviewed: number;
};

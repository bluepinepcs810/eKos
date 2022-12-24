import { parseIsolatedEntityName } from 'typescript';
import { ID } from '../types/common';
import { CoinTypeEnum, ProductShortModel } from './product';
import { UserType } from './user';

export enum OrderStatusEnum {
  PREPARE = 'prepare',
  NEW = 'new',
  SHIPPED = 'shipped',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
}

export type OrderModel = {
  id: ID;
  status: OrderStatusEnum;
  coinType: CoinTypeEnum;
  amount: number;
  createdAt: string;
  productId: ID;
  product: ProductShortModel;
  buyerId: ID;
  buyer: UserType;
  sellerId: ID;
  seller: UserType;
  txSig?: string;
  escrowPublicKey?: string;

  // need to add
  shippedAt?: string;
  completedAt?: string;
  canceledAt?: string;
};

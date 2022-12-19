import { ID } from '../types/common';

export type UserType = {
  id: ID;
  userName: string;
  walletAddress: string;
  avatar?: string;
  rating?: number;
};

export type UserShortType = {
  id: ID;
  userName: string;
};

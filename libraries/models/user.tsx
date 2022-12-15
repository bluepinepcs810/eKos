import { ID } from '../types/common';

export type UserType = {
  id: ID;
  name: string;
  avatar?: string;
  rate?: number;
};

export type UserShortType = {
  id: ID;
  userName: string;
};

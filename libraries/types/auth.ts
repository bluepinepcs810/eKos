import { UserType } from '../models/user';

export type NonceResponseType = {
  nonce: string;
  ts: number;
};
export type SignInResponseType = {
  accessToken: string;
  ts: number;
  user: UserType;
};

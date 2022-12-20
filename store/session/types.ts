import { Action } from 'easy-peasy';
import { UserType } from '../../libraries/models/user';
import { StoreModel } from '../types';

export type SessionModel = {
  session: {
    initial: boolean;
    signedIn: boolean;
    me?: UserType
  };
  setSignedIn: Action<StoreModel, void>;
  unsetSignedIn: Action<StoreModel, void>;

  setSessionInitial: Action<StoreModel, void>;
  unsetSessionInitial: Action<StoreModel, void>;

  setSessionMe: Action<StoreModel, UserType | undefined>;
};

import { Action } from 'easy-peasy';
import { StoreModel } from '../types';

export type SessionModel = {
  session: {
    initial: boolean,
    signedIn: boolean
  },
  setSignedIn: Action<StoreModel, void>;
  unsetSignedIn: Action<StoreModel, void>;

  setSessionInitial: Action<StoreModel, void>;
  unsetSessionInitial: Action<StoreModel, void>;
}

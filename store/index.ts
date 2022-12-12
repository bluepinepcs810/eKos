import { createStore, action } from 'easy-peasy';
import sessionStore from './session';
import { StoreModel } from './types';

const store = createStore<StoreModel>({
  ...sessionStore
});

export default store;

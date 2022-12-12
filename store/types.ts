import { createTypedHooks } from 'easy-peasy';
import { SessionModel } from './session/types';

export type StoreModel = SessionModel;

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

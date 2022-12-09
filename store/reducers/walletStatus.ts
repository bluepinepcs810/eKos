import { WalletStatusState } from '../../libraries/types/wallet';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { createSlice } from '@reduxjs/toolkit';

const initialState: WalletStatusState = {
  network: process.env.NEXT_PUBLIC_CLUSTER ?? WalletAdapterNetwork.Devnet,
};

export const walletStatusSlice = createSlice({
  name: 'walletStatus',
  initialState,
  reducers: {
    setNetwork(state, action) {
      const { payload } = action;
      state.network = payload;
      return state;
    },
  },
});

export const { setNetwork } = walletStatusSlice.actions;
const walletStatusReducer = walletStatusSlice.reducer;
export default walletStatusReducer;

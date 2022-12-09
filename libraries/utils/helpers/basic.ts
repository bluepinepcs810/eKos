import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const getAdapterNetwork = (net: string) => {
  switch (net) {
    case WalletAdapterNetwork.Testnet:
      return WalletAdapterNetwork.Testnet;
    case WalletAdapterNetwork.Mainnet:
      return WalletAdapterNetwork.Mainnet;
    default:
      return WalletAdapterNetwork.Devnet;
  }
};

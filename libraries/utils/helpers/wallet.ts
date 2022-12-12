import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const getAdapterNetwork = () => {
  const net = process.env.NEXT_PUBLIC_CLUSTER ?? WalletAdapterNetwork.Devnet;
  switch (net) {
    case WalletAdapterNetwork.Testnet:
      return WalletAdapterNetwork.Testnet;
    case WalletAdapterNetwork.Mainnet:
      return WalletAdapterNetwork.Mainnet;
    default:
      return WalletAdapterNetwork.Devnet;
  }
};

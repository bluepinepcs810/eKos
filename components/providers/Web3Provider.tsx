import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  CloverWalletAdapter,
  Coin98WalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SolongWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { getAdapterNetwork } from '../../libraries/utils/helpers/wallet';

import { PropsWithChildren, useMemo } from 'react';

const Web3Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const network = useMemo(() => getAdapterNetwork(), []);
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new Coin98WalletAdapter({ network }),
      new CloverWalletAdapter({ network }),
      new SolongWalletAdapter({ network }),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default Web3Provider;

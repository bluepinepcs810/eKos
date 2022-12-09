import { PropsWithChildren, useMemo } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

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
import { getAdapterNetwork } from '../../libraries/utils/helpers/basic';
import { useAppSelector } from '../../store';
import { WalletStatusState } from '../../libraries/types/wallet';
import { walletNetworkSelector } from '../../store/selectors/walletStatus';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { network: currentNetwork } = useAppSelector<WalletStatusState>(
    walletNetworkSelector
  );

  const network = useMemo(
    () => getAdapterNetwork(currentNetwork),
    [currentNetwork]
  );
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
    <div className="page-layout">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <Header />
          <main>{children}</main>
          <Footer />
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};
export default PageLayout;

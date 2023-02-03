import { useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { truncateString } from '../../libraries/utils/helpers/string';
import { useStoreState } from '../../store/types';

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletInitiator = () => {
  const { connected, publicKey } = useWallet();
  const address = useMemo(() => {
    if (!connected || !publicKey) {
      return '';
    }
    return truncateString(publicKey.toBase58(), 10);
  }, [connected, publicKey]);
  return (
    <div className="absolute bg-neutral-900	w-full h-full flex justify-center">
      <div className="content-container flex flex-col justify-center items-center" style={{ fontFamily: 'Public Sans,sans-serif'}}>
        <p className=" text-white text-3xl font-bold mb-4">Enter EKOS!</p>
        <p className=" text-neutral-500">All holders have access to the platform.</p>
        <div className="mt-10">
          <WalletModalProvider>
            {!connected && <WalletMultiButton style={{ backgroundColor: '#512da8' }}/>}
            {connected && <WalletDisconnectButton style={{ backgroundColor: '#512da8' }}>{address}</WalletDisconnectButton>}
          </WalletModalProvider>
        </div>
      </div>
    </div>
  )
}

export default WalletInitiator;

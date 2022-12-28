import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useStoreActions } from '../../../store/types';

const WalletPane = () => {
  const router = useRouter();
  const { publicKey, disconnect } = useWallet();
  const unsetSignedIn = useStoreActions((actions) => actions.unsetSignedIn);
  const setSessionMe = useStoreActions((actions) => actions.setSessionMe);

  const handleClick = useCallback(() => {
    disconnect();
    setSessionMe(undefined);
    unsetSignedIn();
    router.push('/')
  }, [disconnect, router, setSessionMe, unsetSignedIn])
  return (
    <div className="py-4 px-5">
      <div className="flex justify-center gap-x-2.5 mt-20">
        <div>
          <div className='text-main-weighted font-bold text-xl mb-3'>Wallet Address</div>
          <div>
            <div className='border border-main-weighted px-4 py-2 rounded-md'>
              {publicKey?.toBase58()}
            </div>
            <div className='flex justify-end'>
              <button className="rounded-full text-main-light border border-main-dark px-5 py-2 filled-button mt-3"
                onClick={handleClick}
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WalletPane;

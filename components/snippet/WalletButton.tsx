import Image from 'next/image';
import React, { useCallback } from 'react';
import { useWallet, Wallet } from '@solana/wallet-adapter-react';

type WalletButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  wallet: Wallet;
};

const WalletButton: React.FC<WalletButtonProps> = ({
  wallet,
  className,
  ...rest
}) => {
  const { select } = useWallet();
  const handleConnect = useCallback(() => {
    select(wallet.adapter.name);
  }, [select, wallet.adapter.name]);

  return (
    <button
      className={
        'px-5 py-3.5 flex justify-start items-center gap-x-2 border border-main-dark w-full rounded-md hover:bg-main-strong ' +
        className
      }
      {...rest}
      onClick={handleConnect}
    >
      <Image
        src={wallet.adapter.icon}
        width={25}
        height={25}
        alt="text"
        className="bg-slate-600 rounded-full"
      />
      <div className="text-main-dark font-semibold">{wallet.adapter.name}</div>
    </button>
  );
};
export default WalletButton;

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import ConnectWalletIcon from '../../assets/icon/connect-wallet.svg';
import WalletButton from './WalletButton';
import ArrowDownIcon from '../../assets/icon/arrow-down-1.svg';
import ArrowUpIcon from '../../assets/icon/arrow-up-1.svg';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectWalletButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const [active, setActive] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { wallets, connected } = useWallet();

  useEffect(() => {
    if (!active) {
      setShowMore(false);
    }
  }, [active]);

  return (
    <div className={'connect-wallet-wrapper relative'} id="connect-button">
      <button
        className={
          'rounded-full h-[40px] border border-main-dark text-main-dark flex items-center justify-center gap-2 transition hover:bg-main-strong px-4 ' +
          (active && 'bg-main-strong')
        }
        {...props}
        onClick={() => setActive((old) => !old)}
        disabled={connected}
      >
        <ConnectWalletIcon />
        {connected ? 'Signing ...' : 'Connect Wallet'}
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            className="connect-wallet-panel absolute w-[450px] pt-6 pb-11 top-12 rounded-md bg-main z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="connect-wallet-panel__header border-b-2 px-6 border-third-main">
              <div className="flex justify-between items-center mb-3">
                <div className="text-main-dark font-semibold text-xl">
                  Connect a wallet to continue
                </div>
                <button onClick={() => setActive(false)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.439368 0.43934C-0.146419 1.02513 -0.146419 1.97487 0.439368 2.56066L8.37871 10.5L0.439368 18.4393C-0.146419 19.0251 -0.146419 19.9749 0.439368 20.5607C1.02516 21.1464 1.9749 21.1464 2.56069 20.5607L10.8536 12.2678C11.8299 11.2915 11.8299 9.70855 10.8536 8.73223L2.56069 0.43934C1.9749 -0.146447 1.02516 -0.146447 0.439368 0.43934Z"
                      fill="#5E25D9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5606 0.43934C21.1464 1.02513 21.1464 1.97487 20.5606 2.56066L12.6213 10.5L20.5606 18.4393C21.1464 19.0251 21.1464 19.9749 20.5606 20.5607C19.9748 21.1464 19.0251 21.1464 18.4393 20.5607L10.1464 12.2678C9.17011 11.2915 9.1701 9.70855 10.1464 8.73223L18.4393 0.43934C19.0251 -0.146447 19.9748 -0.146447 20.5606 0.43934Z"
                      fill="#5E25D9"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-2.5 flex justify-center items-center gap-x-2 font-semibold">
                <div>
                  <Image
                    src="/solana.png"
                    alt="Solana Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-main-dark">Solana</div>
              </div>
            </div>
            <div className="connect-wallet-panel__body px-6 pt-6">
              <WalletButton wallet={wallets[0]} />
              <div className="flex justify-end">
                <button
                  className="flex items-center gap-x-3 p-4"
                  onClick={() => setShowMore((old) => !old)}
                >
                  <div className="font-semibold text-main-dark">
                    Show more options
                  </div>
                  <div>{showMore ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
                </button>
              </div>
            </div>
            <AnimatePresence>
              {showMore && (
                <motion.div
                  className="px-6 flex flex-col gap-y-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'inherit', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {wallets.slice(1).map((w) => (
                    <WalletButton wallet={w} key={w.adapter.name} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ConnectWalletButton;

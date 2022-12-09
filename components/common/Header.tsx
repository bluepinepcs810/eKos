import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Logo from '../../assets/eKos.png';
import ConnectWalletButton from '../snippet/ConnectWalletButton';
import ListProductButton from '../snippet/ListProductButton';
import MagnifierIcon from '../../assets/icon/magnifier-gray.svg';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { useGetNonce } from '../../hooks/api.hooks';

const Header = () => {
  const {connected: walletConnected, publicKey, signMessage } = useWallet();
  const nonceResult = useGetNonce(publicKey);

  const signIn = useCallback(async () => {
    const encodedMessage = new TextEncoder().encode(
      "Authorize your wallet to login " + nonceResult.data?.nonce
    );
    if (!signMessage) return;
    const signedMessage = await signMessage(encodedMessage);

  }, [nonceResult.data?.nonce, signMessage])

  useEffect(() => {
    if (nonceResult.isFetched) {
      signIn();
    }
  }, [nonceResult.isFetched, signIn])


  return (
    <div className="header bg-main flex justify-center h-[70px]">
      <div className="content-container flex justify-between">
        <div className="header__logo flex items-center">
          <div>
            <Link href="/">
              <Image src={Logo} width={100} height={50} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="header__left-pane flex items-center">
          <div className="header__search mr-6">
            {/* ----- B Search box ------*/}
            <div className="search-box">
              <div className="flex gap-x-2 bg-white justify-start items-center rounded-full px-3 py-2">
                <div className="icon">
                  <MagnifierIcon />
                </div>
                <div className="search-input rounded-full">
                  <input
                    className="mr-5 w-56"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            {/* ----- E Search box ------*/}
          </div>
          <div className="header__action-group flex items-center gap-4">
            {walletConnected ? (
              <>
                <div className="flex gap-x-2 text-main-dark hover:text-main-weighted group">
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.09 4.70146L13.9996 6.69509L14.9095 4.7016C15.9051 2.52023 18.1147 1 20.6739 1C24.1653 1 27 3.82803 27 7.2917C27 8.04016 26.868 8.75718 26.6271 9.42185C26.3092 10.2956 25.8015 11.0808 25.1516 11.7288L24.8714 12.0081L14.0186 22.7381L3.29648 12.1399L3.26816 12.1119L3.2377 12.0863C2.98448 11.873 2.74952 11.6401 2.53192 11.3882L2.53105 11.3873C2.02241 10.8 1.62209 10.1202 1.35813 9.37663L1.35792 9.37604C1.12601 8.72406 1 8.02396 1 7.2917C1 3.82803 3.83377 1 7.32701 1C9.88483 1 12.0948 2.5202 13.09 4.70146ZM14.4742 23.1884L14.4718 23.1861C14.4726 23.1869 14.4734 23.1876 14.4742 23.1884Z"
                      strokeWidth="2"
                      className="stroke-[#5E25D9] group-hover:stroke-[#C883FF]"
                    />
                  </svg>
                  <div>Favorites</div>
                </div>
                <div className="flex gap-x-2 text-main-dark hover:text-main-weighted">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 0H2.5C1.125 0 0 1.08 0 2.4V24L5 19.2H22.5C23.875 19.2 25 18.12 25 16.8V2.4C25 1.08 23.875 0 22.5 0ZM22.5 16.8H5L2.5 19.2V2.4H22.5V16.8Z"
                      className="fill-[#5E25D9] group-hover:fill-[#C883FF]"
                    />
                  </svg>
                  <div>Inbox</div>
                </div>
                <div className="flex group">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="20"
                      fill="#FCF5FF"
                      className="fill-[#FCF5FF] group-hover:fill-[#D2B6F7]"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.60937 32.773C6.94518 25.6064 15.425 22 20 22C24.575 22 33.0548 25.6064 35.3906 32.773C31.722 37.1885 26.1893 40 20 40C13.8107 40 8.27797 37.1885 4.60937 32.773ZM20 18C23.866 18 27 14.866 27 11C27 7.13401 23.866 4 20 4C16.134 4 13 7.13401 13 11C13 14.866 16.134 18 20 18Z"
                      fill="#5E25D9"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <div className="header__connect-btn">
                <ConnectWalletButton />
              </div>
            )}
            <div className="header__list-product-btn">
              <Link href={'/products/create'}>
                <ListProductButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Footer = () => {
  const router = useRouter();
  const [footerVisible, setFooterVisible] = useState(true);
  useEffect(() => {
    if (router.pathname.startsWith('/profile/inbox/chat'))  {
      setFooterVisible(false);
    } else {
      setFooterVisible(true);
    }
  }, [router.pathname])
  return (
    <footer className={"footer justify-center bg-main-gradient " + (footerVisible ? 'flex' : 'hidden md:flex')}>
      <div className="content-container pt-10 md:pt-5 pb-8 md:pb-8">
        <div className="w-full flex flex-col md:flex-row">
          <div className="footer__section md:w-1/4">
            <div className="footer__logo">
              <Image
                src="/assets/eKosLogo-dark.png"
                alt="eKos Logo"
                height={42}
                width={109}
              />
            </div>
            <div className="mt-5 text-main-light">
              Your business will grow with our innovative product.
            </div>
          </div>

          <div className="footer__section hidden md:block w-1/4">
            <div className="mt-2 mb-6 text-main-light text-lg font-semibold">
              Home Page
            </div>
            <Link className="text-main-light mb-1" href="/#home-banner">
              <div>
                What are you looking for?
              </div>
            </Link>
            <Link className="text-main-light mb-1" href="/#buy-premium"><div>Buy Premium</div></Link>
            <Link className="text-main-light mb-1" href="/#find-product"><div>Find a product near me</div></Link>
            <Link className="text-main-light mb-1" href="/#premium-offerings"><div>Premium offerings</div></Link>
          </div>

          <div className="footer__section w-1/4 hidden md:flex flex-col justify-center">
            <div className="text-main-light mb-1">List a product</div>
            <div className="text-main-light mb-1">Connect Wallet</div>
          </div>
          <div className="footer__section md:w-1/4">
            <div className="mb-4 mt-10 md:mt-2 md:mb-6 text-main-light text-lg font-semibold">
              Stay in the loop
            </div>
            <div className="mt-5 text-main-light">
              Receive notifications when someone is interested in your product.
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between mt-8 md:mt-0">
          <div className="footer__social w-full md:w-1/4 flex justify-center md:justify-start gap-x-3 gap-y-4 mt-4">
            <div className="footer__social-twitter">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM29.6504 16.2953C29.6504 16.0899 29.6504 15.8845 29.6358 15.6792C30.5553 15.0044 31.358 14.1683 32 13.2296C31.1536 13.5963 30.2342 13.8604 29.2855 13.963C30.2633 13.3763 31.0076 12.4522 31.3579 11.352C30.453 11.8948 29.4314 12.2908 28.3661 12.4962C27.5051 11.5721 26.2792 11 24.9219 11C22.3096 11 20.2081 13.1269 20.2081 15.7379C20.2081 16.1046 20.2519 16.4713 20.3248 16.8233C16.4137 16.6179 12.9257 14.7404 10.6053 11.8654C10.1966 12.5695 9.96317 13.3763 9.96317 14.2563C9.96317 15.8992 10.795 17.3514 12.0647 18.2021C11.2912 18.1728 10.5615 17.9528 9.93397 17.6008V17.6594C9.93397 19.9624 11.554 21.8692 13.7139 22.3093C13.3198 22.4119 12.8966 22.4706 12.4734 22.4706C12.1669 22.4706 11.875 22.4413 11.5831 22.3973C12.1815 24.2749 13.9182 25.639 15.9905 25.6831C14.3706 26.9592 12.342 27.7073 10.1383 27.7073C9.74427 27.7073 9.37946 27.6926 9 27.6486C11.0869 28.9981 13.5679 29.7755 16.2386 29.7755C24.9074 29.7755 29.6504 22.5586 29.6504 16.2953Z"
                  fill="#EFDBFF"
                />
              </svg>
            </div>
            <div className="footer__social-discord">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM30.5479 12.4438C30.5479 12.4438 34 18.518 34 26.0118C34 26.0118 31.9623 29.3864 26.6644 29.5493C26.6644 29.5493 25.8014 28.5485 25.0822 27.6642C28.2226 26.8031 29.4212 24.8947 29.4212 24.8947C28.4384 25.5231 27.5034 25.9653 26.6644 26.2678C21.4994 28.3738 15.7518 27.6531 11.7055 25.4533C11.6937 25.4456 11.6507 25.4217 11.5873 25.3863L11.5872 25.3862C11.3885 25.2754 10.9898 25.0531 10.7226 24.8715C10.7226 24.8715 11.8733 26.7333 14.9178 27.6176C14.1986 28.502 13.3116 29.5493 13.3116 29.5493C8.0137 29.3864 6 26.0118 6 26.0118C6 18.518 9.45205 12.4438 9.45205 12.4438C12.9041 9.93038 16.1884 10.0002 16.1884 10.0002L16.4281 10.2795C12.113 11.4896 10.1233 13.3282 10.1233 13.3282C10.1233 13.3282 10.6507 13.0489 11.5377 12.6533C17.0615 10.2977 23.7507 10.2983 29.4452 13.3282C29.4452 13.3282 27.5514 11.5827 23.476 10.3726L23.8116 10.0002C23.8116 10.0002 27.0959 9.93038 30.5479 12.4438ZM11.8928 21.5413C11.8928 19.8407 13.1599 18.4468 14.765 18.4468C16.37 18.4468 17.6652 19.8407 17.6371 21.5413C17.6371 23.2418 16.37 24.6357 14.765 24.6357C13.1881 24.6357 11.8928 23.2418 11.8928 21.5413ZM25.0427 24.6357C26.6477 24.6357 27.9148 23.2418 27.9148 21.5413C27.9148 19.8407 26.6477 18.4468 25.0427 18.4468C23.4377 18.4468 22.1705 19.8407 22.1705 21.5413C22.1705 23.2418 23.4658 24.6357 25.0427 24.6357Z"
                  fill="#EFDBFF"
                />
              </svg>
            </div>
          </div>
          <div className="footer__subscribe w-full md:w-1/4">
            <div className="footer__subscribe__email flex gap-x-2">
              <input
                className="w-full rounded-full px-3.5 py-3"
                placeholder="Enter your email address."
              />
              <button className='border border-main-light rounded-full px-3.5 py-3 text-main-light'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

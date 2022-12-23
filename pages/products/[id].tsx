import { useMemo } from 'react';
import Slider from 'react-slick';
import HeartButton from '../../components/snippet/HeartButton';
import StarRating from '../../components/snippet/StarRating';
import UserTap from '../../components/snippet/UserTap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../../components/snippet/slick/NextArrow';
import PrevArrow from '../../components/snippet/slick/PrevArrow';
import Image from 'next/image';
import ShareButton from '../../components/snippet/ShareButton';
import { useRouter } from 'next/router';
import { useOrderCreate, useProductRetrieve } from '../../hooks/api.hooks';
import { ID } from '../../libraries/types/common';
import PageLoader from '../../components/common/PageLoader';
import { useCallback, useEffect } from 'react';
import { showError, showSuccess } from '../../libraries/utils/toast';
import { getConditionLabel } from '../../libraries/constants/products';
import CategoryBadge from '../../components/products/id/CategoryBadge';
import { CATEGORY_KEYS } from '../../libraries/constants/categories';
import moment from 'moment';
import { countries } from '../../libraries/utils/helpers/location';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import * as ekosProgram from '../../libraries/ekosSDK';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { findEscrowPDA } from '../../libraries/utils/pda';
import { argv } from 'process';
import { BN } from '@project-serum/anchor';
import { sendTransactionWithRetry } from '../../libraries/utils/transaction';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useProductRetrieve(id as ID);

  const wallet = useWallet();
  const { connection } = useConnection();

  const createOrder = useOrderCreate()

  const formatDate = useCallback((date: string) => {
    return moment(date).format('D-MMM-YYYY');
  }, []);
  useEffect(() => {
    if (isError) {
      showError(error as any);
    }
  }, [error, isError]);

  const country = useMemo(() => {
    if (!data?.product.countryCode) return null;
    const value = countries.find(
      (item) => item.isoCode === data.product.countryCode
    );
    if (!value) return null;
    return value.name;
  }, [data?.product.countryCode]);


  const deposit = async () => {
    if (!wallet.publicKey) return;
    // const buyerPublicKey = wallet.publicKey;
    // const sellerPublicKey = new PublicKey(
    //   '9Th78fG1GJ6QcbdXV78TLcsSd5LQ6kHzfvLYViSPbzWM'
    // );
    // const productId = 'a38add00';
    // const [escrow] = findEscrowPDA({
    //   sellerPublicKey,
    //   buyerPublicKey,
    //   productId,
    // });
    // const amount = new BN(1 * LAMPORTS_PER_SOL);
    // const lockupTs = 5 * 60;

    // const accounts = {
    //   buyer: buyerPublicKey,
    //   seller: sellerPublicKey,
    //   escrow,
    // };

    // const args = {
    //   amount,
    //   lockupTs,
    // };

    // const depositIx = ekosProgram.createDepositSolInstruction(accounts, args);

    // try {
    //   const { txid } = await sendTransactionWithRetry(
    //     connection,
    //     wallet,
    //     [depositIx],
    //     []
    //   );
    //   console.log('Signature: ', txid);

    // } catch (e) {
    //   console.log(e);
    // }

    // TODO send txid to server

    createOrder.mutate({ productId: id as string, txSig: "TEST" + (new Date).getUTCMilliseconds()});
  };

  useEffect(() => {
    if (createOrder.isSuccess) {
      showSuccess("Successfully ordered");
    }
  }, [createOrder.isSuccess]);

  useEffect(() => {
    if (createOrder.isError) {
      showError(createOrder.error);
    }
  }, [createOrder.error, createOrder.isError])

  if (!data) {
    return (
      <div className="min-h-[800px] product-detail-page bg-main pt-4">
        <PageLoader loading={isLoading} />
      </div>
    );
  }

  return (
    <div className="product-detail-page bg-main lg:pt-4 flex flex-col items-center justify-center">
      <PageLoader loading={isLoading} />
      <div className="w-full max-w-[828px] md:mb-5">
        <div className="product-detail__card w-full bg-main-light py-5 lg:px-5">
          <div className="product-detail__card__header flex flex-col lg:flex-row justify-between gap-x-5 lg:mb-5 px-4 lg:px-0">
            <div className="product-detail__card__header--info flex justify-between flex-grow">
              <UserTap data={data.product.listedUser} />
              <div className="product-detail__card__header--review hidden lg:flex flex-col justify-center gap-y-3">
                <StarRating rate={2} size={20} spacing={2} />
                <div className="text-center text-main-dark">
                  <span className="font-semibold mr-1">
                    {data.product.reviewed}
                  </span>
                  <span className="text-sm">Reviews</span>
                </div>
              </div>
              <div className="flex items-center">
                <HeartButton
                  productId={id as string}
                  isLiked={data.product.isLiked}
                />
              </div>
            </div>
            <div className="product-detail__card__header--chat-btn flex justify-center items-center mt-3 lg:mt-0 w-full lg:w-fit">
              <button className="rounded-full border border-main-dark py-1.5 px-6 text-main-dark outlined-button w-full">
                Chat
              </button>
            </div>
          </div>
          <div className="w-full border-t lg:hidden border-third-main mt-2 mb-5 px-4 lg:px-0"></div>
          <div className="product-detail__card__body px-4 lg:px-14">
            <div className="product-detail__card__images relative">
              <Slider
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                accessibility
                nextArrow={<NextArrow style={{ right: '-51px' }} />}
                prevArrow={<PrevArrow />}
                centerPadding="10px"
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      dots: false,
                    },
                  },
                ]}
              >
                {data.product.photos.map((item) => (
                  <div key={item} className="rounded-lg">
                    <div className="h-[350px] overflow-hidden relative">
                      <Image
                        className="rounded-md w-full object-cover"
                        src={item}
                        alt="product"
                        width={275}
                        height={187}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
              <ShareButton className="absolute bottom-4 right-2.5" />
            </div>
            <div className="product-detail__card__info mt-10">
              <div className="product-detail__card__info--price mb-2">
                <div className="flex items-center gap-x-2">
                  <svg
                    width="32"
                    height="27"
                    viewBox="0 0 32 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.83007 0.228905C4.92215 0.0862047 5.08037 0 5.2502 0H31.0823C31.4783 0 31.7171 0.438381 31.5024 0.771095L27.1699 7.48538C27.0778 7.62808 26.9196 7.71429 26.7498 7.71429H0.91769C0.521724 7.71429 0.282873 7.27591 0.497562 6.94319L4.83007 0.228905Z"
                      fill="#4703A6"
                    />
                    <path
                      d="M27.1699 9.87182C27.0778 9.72912 26.9196 9.64291 26.7498 9.64291H0.91769C0.521723 9.64291 0.282873 10.0813 0.497561 10.414L4.83007 17.1283C4.92215 17.271 5.08037 17.3572 5.2502 17.3572H31.0823C31.4783 17.3572 31.7171 16.9188 31.5024 16.5861L27.1699 9.87182Z"
                      fill="#4703A6"
                    />
                    <path
                      d="M4.83007 19.5146C4.92215 19.3719 5.08037 19.2857 5.2502 19.2857H31.0823C31.4783 19.2857 31.7171 19.7241 31.5024 20.0568L27.1699 26.7711C27.0778 26.9138 26.9196 27 26.7498 27H0.91769C0.521724 27 0.282873 26.5616 0.497562 26.2289L4.83007 19.5146Z"
                      fill="#4703A6"
                    />
                  </svg>
                  <div className="text-[36px] text-main-thick font-bold">
                    {data.product.price}
                  </div>
                </div>
              </div>
              <div className="product-detail__card__info--name mb-12">
                <h1 className="text-3xl font-semibold text-main-dark">
                  {data.product.name}
                </h1>
              </div>
              <div className="text-sm text-main-dark mb-4">
                {getConditionLabel(data.product.condition)}
              </div>
              <div className="product-detail__card__info--category flex mb-4">
                {/* B category tag */}
                <CategoryBadge category={CATEGORY_KEYS.OTHER} />
                {/* E category tag */}
              </div>
              <div className="border-t-2 border-third-main" />
              <div className="product-detail__card__info--description mt-4 mb-4">
                <p className="text-main-dark text-2xl">
                  {data.product.description}
                </p>
              </div>
              <div className="product-detail__card__info--description mt-4 mb-4 flex gap-x-3.5">
                {!!data.product.hashTags &&
                  data.product.hashTags.map((item, index) => (
                    <div
                      className="hash-tag uppercase text-main-weighted"
                      key={index}
                    >
                      #{item}
                    </div>
                  ))}
              </div>
              <div className="border-t-2 border-third-main" />
              <div className="product-detail__card__info--date mt-4 mb-4 flex justify-between items-center">
                <div className="text-second-main uppercase">
                  {formatDate('2022-09-13')}
                </div>
                <div className="flex gap-x-3">
                  <div className="view-count flex gap-x-2 items-center">
                    <svg
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2.53333C17.4791 2.53333 21.4736 5.23133 23.4236 9.5C21.4736 13.7687 17.4909 16.4667 13 16.4667C8.50909 16.4667 4.52636 13.7687 2.57636 9.5C4.52636 5.23133 8.52091 2.53333 13 2.53333ZM13 0C7.09091 0 2.04455 3.93933 0 9.5C2.04455 15.0607 7.09091 19 13 19C18.9091 19 23.9555 15.0607 26 9.5C23.9555 3.93933 18.9091 0 13 0ZM13 6.33333C14.6309 6.33333 15.9545 7.752 15.9545 9.5C15.9545 11.248 14.6309 12.6667 13 12.6667C11.3691 12.6667 10.0455 11.248 10.0455 9.5C10.0455 7.752 11.3691 6.33333 13 6.33333ZM13 3.8C10.0691 3.8 7.68182 6.35867 7.68182 9.5C7.68182 12.6413 10.0691 15.2 13 15.2C15.9309 15.2 18.3182 12.6413 18.3182 9.5C18.3182 6.35867 15.9309 3.8 13 3.8Z"
                        fill="#B79ADD"
                      />
                    </svg>
                    <span className="text-second-main">
                      {data.product.viewed}
                    </span>
                  </div>
                  <div className="view-count flex gap-x-2 items-center">
                    <svg
                      width="22"
                      height="19"
                      viewBox="0 0 22 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0889 3.80587L10.9996 5.81721L11.9107 3.80601C12.6613 2.14906 14.324 1 16.2438 1C18.8625 1 21 3.13939 21 5.7726C21 6.34129 20.9005 6.88564 20.7191 7.39002C20.4796 8.05315 20.0973 8.64892 19.608 9.14041L19.388 9.36139L11.0146 17.7028L2.74341 9.46526L2.71517 9.43715L2.68479 9.41136C2.49463 9.24998 2.3179 9.07355 2.15395 8.88233L2.15309 8.88133C1.77017 8.43591 1.46868 7.92008 1.26983 7.35571L1.26963 7.35512C1.09501 6.8605 1 6.32907 1 5.7726C1 3.13939 3.13676 1 5.75694 1C7.67558 1 9.33861 2.14904 10.0889 3.80587ZM11.5264 18.2125L11.524 18.2101C11.5248 18.2109 11.5256 18.2117 11.5264 18.2125Z"
                        stroke="#B79ADD"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-second-main">
                      {data.product.liked}
                    </span>
                  </div>
                </div>
              </div>
              {country ? (
                <>
                  <div className="border-t-2 border-third-main" />
                  <div className="product-detail__card__info--location mt-4 mb-4">
                    <div className="flex gap-x-2 mb-8">
                      <svg
                        width="18"
                        height="25"
                        viewBox="0 0 18 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8.75C0 3.9125 4.02429 0 9 0C13.9757 0 18 3.9125 18 8.75C18 15.3125 9 25 9 25C9 25 0 15.3125 0 8.75ZM9 2.5C5.45143 2.5 2.57143 5.3 2.57143 8.75C2.57143 12.3125 6.32571 17.7625 9 21.1C11.7257 17.7375 15.4286 12.35 15.4286 8.75C15.4286 5.3 12.5486 2.5 9 2.5ZM12.2145 8.75007C12.2145 10.476 10.7754 11.8751 9.00017 11.8751C7.22497 11.8751 5.78589 10.476 5.78589 8.75007C5.78589 7.02418 7.22497 5.62507 9.00017 5.62507C10.7754 5.62507 12.2145 7.02418 12.2145 8.75007Z"
                          fill="#5E25D9"
                        />
                      </svg>
                      <div className="text-main-dark font-semibold">
                        {data.product.city ? data.product.city + ', ' : ''}
                        {country}
                      </div>
                    </div>
                    {/* <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={{ lat: 10.99835602, lng: 77.01502627 }}
                        defaultZoom={11}
                      >
                        <div>My Component</div>
                      </GoogleMapReact> */}
                  </div>
                </>
              ) : (
                <div className="mb-4"></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="product-buy-actionbar bg-main-light w-full flex justify-center py-2 items-center px-4 lg:px-0">
        <div className="w-full max-w-[828px] flex justify-between">
          <div className="flex flex-col justify-center items-start">
            <div className="text-main-dark">Your product name</div>
            <div className="flex items-center gap-x-1">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.02864 0.215223C2.12204 0.0804241 2.27561 0 2.43961 0H13.0452C13.4486 0 13.6859 0.453179 13.4562 0.784777L11.9713 2.92763C11.8779 3.06243 11.7243 3.14286 11.5603 3.14286H0.95477C0.551344 3.14286 0.31402 2.68968 0.543793 2.35808L2.02864 0.215223Z"
                  fill="#4703A6"
                />
                <path
                  d="M11.9714 4.14381C11.878 4.00901 11.7244 3.92859 11.5604 3.92859H0.954823C0.551397 3.92859 0.314073 4.38177 0.543846 4.71337L2.02869 6.85622C2.1221 6.99102 2.27567 7.07145 2.43967 7.07145H13.0452C13.4487 7.07145 13.686 6.61827 13.4562 6.28667L11.9714 4.14381Z"
                  fill="#4703A6"
                />
                <path
                  d="M2.02864 8.07243C2.12204 7.93763 2.27561 7.85721 2.43961 7.85721H13.0452C13.4486 7.85721 13.6859 8.31039 13.4562 8.64198L11.9713 10.7848C11.8779 10.9196 11.7243 11.0001 11.5603 11.0001H0.95477C0.551344 11.0001 0.31402 10.5469 0.543793 10.2153L2.02864 8.07243Z"
                  fill="#4703A6"
                />
              </svg>
              <div className="text-main-thick font-semibold text-lg">0.15</div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="rounded-full bg-main-gradient px-7 py-2 text-main-light border border-main-dark filled-button"
              onClick={deposit}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

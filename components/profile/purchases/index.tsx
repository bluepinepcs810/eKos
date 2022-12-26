import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BuyingPane from './buying';
import SellingPane from './selling';

const PurchasesPane = () => {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="py-4 px-5">
      <div className="flex justify-start gap-x-2.5 mb-4">
        <Link
          href="/profile/purchases/selling"
          className={
            'rounded-full hover:opacity-80 px-5 py-2.5 ' +
            (tab === 'selling'
              ? 'bg-main-dark text-main-light'
              : 'bg-main text-main-dark')
          }
        >
          Selling
        </Link>
        <Link
          href="/profile/purchases/buying"
          className={
            'rounded-full bg-main text-main-dark hover:opacity-80 px-5 py-2.5 ' +
            (tab === 'buying'
              ? 'bg-main-dark text-main-light'
              : 'bg-main text-main-dark')
          }
        >
          Buying
        </Link>
      </div>
      {tab === 'selling' ? <SellingPane /> : <BuyingPane />}
    </div>
  );
};
export default PurchasesPane;

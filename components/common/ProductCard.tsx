import Image from 'next/image';
import Link from 'next/link';

import SolanaIcon from '../../assets/icon/solana.svg';
import HeartButton from '../snippet/HeartButton';

const ProductCard = () => {
  return (
    <Link href="/products/1">
      <div className="product-card max-w-[275px] bg-main-light p-[5px] rounded-lg cursor-pointer hover:drop-shadow-lg transition">
        <div className="product-card__image">
          <Image
            className="rounded-md"
            src="/assets/product.jpg"
            alt="product"
            width={275}
            height={187}
          />
        </div>
        <div className="product-card__meta flex justify-between p-3 pt-4">
          <div className="product-card__meta__info">
            <div className="product-card__meta__info__name text-main-thick font-semibold">
              Your product name
            </div>
            <div className="product-card__meta__info__price flex gap-x-2.5 mt-4">
              <div className="product-card__meta__info__price-sol font-semibold flex items-center gap-x-1 text-main-thick">
                <span>0.15</span>
                <div className="sol-icon">
                  <SolanaIcon />
                </div>
              </div>
              <div className="product-card__meta__info__price-dollar text-sm flex items-center text-main-thick">
                <span>(4.77$)</span>
              </div>
            </div>
          </div>
          <div className="product-card__meta__action">
            <div className="product-card__meta_action-like">
              <HeartButton />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;

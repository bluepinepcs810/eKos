import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SolanaIcon from '../../assets/icon/solana.svg';
import { ProductDetailModel } from '../../libraries/models/product';
import HeartButton from '../snippet/HeartButton';
import { CoinGeckoContext } from '../providers/CoingeckoProvider';
import { roundNumber } from '../../libraries/utils/helpers/string';

type ProductCardProps = {
  data: ProductDetailModel;
};
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { solanaPrice } = useContext(CoinGeckoContext);
  return (
    <Link href={'/products/' + data.id}>
      <div className="product-card max-w-[275px] bg-main-light p-[5px] rounded-lg cursor-pointer hover:drop-shadow-lg transition">
        <div className="product-card__image max-w-[275px] max-h-[187px] object-cover overflow-hidden rounded-md">
          <Image
            className="rounded-md"
            src={data.photos.length ? data.photos[0] : '/assets/product.jpg'}
            alt="product"
            width={275}
            height={187}
          />
        </div>
        <div className="product-card__meta flex justify-between p-3 pt-4">
          <div className="product-card__meta__info">
            <div className="product-card__meta__info__name text-main-thick font-semibold">
              {data.name}
            </div>
            <div className="product-card__meta__info__price flex gap-x-2.5 mt-4">
              <div className="product-card__meta__info__price-sol font-semibold flex items-center gap-x-1 text-main-thick">
                <span>{data.price}</span>
                <div className="sol-icon">
                  <SolanaIcon />
                </div>
              </div>
              <div className="product-card__meta__info__price-dollar text-sm flex items-center text-main-thick">
                {/* TODO integrate solana price api */}
                {!!solanaPrice && (
                  <span>({roundNumber(solanaPrice * data.price)}$)</span>
                )}
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

import Image from 'next/image';
import BuyPremiumImage from '../../assets/buypremium.jpg';

export default function BuyPremium() {
  return (
    <section
      className="buypremium bg-main-gradient min-h-[375px] lg:min-h-[300px] flex items-center justify-center"
      id="buy-premium"
    >
      <div className="content-container flex justify-center lg:justify-between">
        <div className="buypremium__left flex flex-col items-start justify-center">
          <h2 className="text-[28px] text-main-light mb-4 font-semibold text-center lg:text-left">
            Buy premium ads to get more visibility
          </h2>
          <ul className="text-lg list-disc ml-[35px] text-main-light leading-8">
            <li>Your products are always at the top of recommendations;</li>
            <li>Premium support;</li>
            <li>Promotion assistance.</li>
          </ul>
          <div className="flex justify-center lg:justify-start w-full mt-4 lg:mt-0">
            <button className="rounded-full text-lg border border-main-light py-2.5 px-7 text-main-light mt-4 transition hover:bg-main-light hover:text-main-dark">
              Buy Premium
            </button>
          </div>
        </div>
        <div className="buypremium__right hidden lg:block">
          <div className="buypremium__right__image">
            <Image src={BuyPremiumImage} alt="logo" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

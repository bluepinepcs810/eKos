import Head from 'next/head';
import Banner from '../components/home/Banner';
import BuyPremium from '../components/home/BuyPremium';
import FindProduct from '../components/home/FindProduct';
import PremiumOfferings from '../components/home/PremiumOfferings';

export default function Home() {
  return (
    <div className="home-page">
      <Banner />
      <BuyPremium />
      <FindProduct />
      <PremiumOfferings />
    </div>
  );
}

import { useState } from "react";
import BuyingPane from "./buying";
import SellingPane from "./selling";

const PurchasesPane = () => {
  const [status, setStatus] = useState<'selling' | 'buying'>('selling');

  return (
    <div className="py-4 px-5">
      <div className="flex justify-start gap-x-2.5 mb-4">
        <button className={"rounded-full hover:opacity-80 px-5 py-2.5 " + (status === 'selling' ? 'bg-main-dark text-main-light' : 'bg-main text-main-dark')}
          onClick={() => setStatus('selling')}
        >
          Selling
        </button>
        <button className={"rounded-full bg-main text-main-dark hover:opacity-80 px-5 py-2.5 " + (status === 'buying' ? 'bg-main-dark text-main-light' : 'bg-main text-main-dark')}
          onClick={() => setStatus('buying')}
        >
          Buying
        </button>
      </div>
      {status === 'selling' ?
        <SellingPane />
        :
        <BuyingPane />
      }
    </div>
  )
}
export default PurchasesPane;

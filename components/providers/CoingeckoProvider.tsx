import { createContext, PropsWithChildren, useEffect, useState } from 'react';
// @ts-ignore
import * as CoinGecko from 'coingecko-api'

const CoinGeckoClient = new CoinGecko()

export enum CoingeckoStatus {
  Success,
  FetchFailed,
  Loading,
}

export type CoinInfo = {
  price: number
  volume_24: number
  market_cap: number
  price_change_percentage_24h: number
  market_cap_rank: number
  last_updated: Date
}

export type CoinInfoResult = {
  data: {
    market_data: {
      current_price: {
        usd: number
      }
      total_volume: {
        usd: number
      }
      market_cap: {
        usd: number
      }
      price_change_percentage_24h: number
      market_cap_rank: number
    }
    last_updated: string
  }
}

export type CoinGeckoResult = {
  coinInfo?: CoinInfo
  status: CoingeckoStatus
}

export type CoinGeckoContextType = {
  solanaPrice: number;
  loading: boolean
}

const initialState: CoinGeckoContextType = {
  solanaPrice: 0,
  loading: false,
}
export const CoinGeckoContext = createContext<CoinGeckoContextType>(initialState)

const COIN_ID = 'solana';
const PRICE_REFRESH = 10000;

const CoingeckoProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [coinInfo, setCoinInfo] = useState<CoinGeckoContextType>(initialState);
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (COIN_ID) {
      const getCoinInfo = (refresh = false) => {
        if (!refresh) {
          setCoinInfo(old => ({ ...old, loading: true }));
        }
        CoinGeckoClient.coins
          .fetch(COIN_ID, {})
          // @ts-ignore
          .then((info: CoinInfoResult) => {
            setCoinInfo(old => ({
              ...old,
              solanaPrice: info.data.market_data.current_price.usd
            }));
          })
          .catch((error: any) => {
            console.log(error);
          })
      }

      getCoinInfo()
      interval = setInterval(() => {
        getCoinInfo(true)
      }, PRICE_REFRESH)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, []);

  return (
    <CoinGeckoContext.Provider value={coinInfo}>
      {children}
    </CoinGeckoContext.Provider>
  )
}

export default CoingeckoProvider;

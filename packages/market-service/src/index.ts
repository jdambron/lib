import { CoinGeckoMarketService } from './coingecko/coingecko'
import { MarketService } from './api'
import {
  GetByMarketCapType,
  HistoryData,
  MarketDataArgs,
  MarketDataType,
  PriceHistoryArgs,
  PriceHistoryType
} from '@shapeshiftoss/types'

export const getDefaultMarketService = (): MarketService => {
  return new CoinGeckoMarketService()
}

export const getByMarketCap: GetByMarketCapType = async () =>
  getDefaultMarketService().getByMarketCap()

export const getMarketData: MarketDataType = async ({ chain, tokenId }: MarketDataArgs) => {
  return getDefaultMarketService().getMarketData({ chain, tokenId })
}

export const getPriceHistory: PriceHistoryType = ({
  chain,
  timeframe,
  tokenId
}: PriceHistoryArgs): Promise<HistoryData[]> => {
  return getDefaultMarketService().getPriceHistory({ chain, timeframe, tokenId })
}

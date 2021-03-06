import { APIBase } from './APIBase'

export class CoinCheckAPI extends APIBase {
  constructor() {
    super({
      baseURL: 'https://coincheck.com/api',
    })
  }

  getTicker() {
    return this.get<Ticker>('/ticker')
  }
}

export interface Ticker {
  last: number
  bid: number
  ask: number
  high: number
  low: number
  volume: number
  timestamp: number
}

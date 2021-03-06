import { GetStaticProps, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useIntervalEffect } from '../libs/uses'
import { CoinCheckAPI, Ticker } from '../modules/api/CoinCheckAPI'

interface Props {
  ticker: Ticker
}

const Demo = (props: Props) => {
  const [ticker, setTicker] = useState(props.ticker)

  useIntervalEffect(async () => {
    // TODO: CORSのpreflightのため、localAPIを返すようにしているが、API経由にしたい
    const result = await fetch('/api/coinCheck/ticker')
    const data = await result.json()
    setTicker(data as Ticker)
  }, 5000)

  return (
    <div>
      <p>Demo</p>
      <Link href="/">To Top Page</Link>
      <div>
        <p>最後の取引の価格: {ticker.last}</p>
        <p>現在の買い注文の最高価格: {ticker.bid}</p>
        <p>現在の売り注文の最安価格: {ticker.ask}</p>
        <p>24時間での最高取引価格: {ticker.high}</p>
        <p>24時間での最安取引価格: {ticker.low}</p>
        <p>24時間での取引量: {ticker.volume}</p>
        <p>現在の時刻: {ticker.timestamp}</p>
      </div>
    </div>
  )
}

export default Demo

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const coinCheckApi = new CoinCheckAPI()
  const ticker = await coinCheckApi.getTicker()
  return { props: { ticker } }
}

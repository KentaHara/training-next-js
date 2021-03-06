import type { NextApiRequest, NextApiResponse } from 'next'
import { CoinCheckAPI } from '../../../modules/api/CoinCheckAPI'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const coinCheckApi = new CoinCheckAPI()
  const result = await coinCheckApi.getTicker()
  res.status(200).json(result)
}

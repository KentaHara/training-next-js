import { EffectCallback, useEffect } from 'react'

export const useOnMountEffect = (effect: EffectCallback): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}

export const useIntervalEffect = <T extends any[]>(
  callback: (args: T) => void,
  ms: number,
  args?: T,
) => {
  useOnMountEffect(() => {
    const intervalId = setInterval(callback, ms, args)
    return () => clearInterval(intervalId)
  })
}

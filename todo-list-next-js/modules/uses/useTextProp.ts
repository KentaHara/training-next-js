import { ChangeEvent, useState } from 'react'

export const useTextProp = () => {
  const [text, updateText] = useState<string>('Default Text')

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value)
  }

  return {
    text,
    onChangeText,
  }
}

export type UseTextProp = ReturnType<typeof useTextProp>

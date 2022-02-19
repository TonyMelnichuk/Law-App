import React, { useState } from 'react'

type UseInputReturnType = [
  string,
  {
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
  },
  () => void
]

export const useInput = (
  type: string,
  placeholder: string,
  allowedSymbols: 'letters' | 'numbers' | 'all'
): UseInputReturnType => {
  const [value, setValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const stringRegex = /^[a-zA-ZА-ЯҐЄІЇа-яґєії\-\s]*$/
    const numberRegex = /^[+]{0,1}[0-9]*$/

    if (allowedSymbols === 'letters' && (!value || stringRegex.test(value.toString()))) setValue(value)
    else if (allowedSymbols === 'numbers' && (!value || numberRegex.test(value.toString()))) setValue(value)
    else if (allowedSymbols === 'all') setValue(value)
    else return
  }

  const resetValue = () => setValue('')

  const bind = { type, value, onChange, placeholder }

  return [value, bind, resetValue]
}


import { useEffect } from 'react'

const useClickOutside = (unclickableItems: React.RefObject<HTMLElement>[], handle: () => void): void => {
  useEffect(() => {
    const possibleHandle = (event: TouchEvent | MouseEvent) => {
      if (
        unclickableItems
          .every(item => item.current) &&
        !unclickableItems
          .some(item => item.current!.contains(event.target as Node))
      ) handle()
    }

    document.addEventListener('mousedown', possibleHandle)

    return () => {
      document.removeEventListener('mousedown', possibleHandle)
    }
  })
}

export default useClickOutside
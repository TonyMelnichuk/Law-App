import { useEffect } from 'react'

const useDisableBodyScroll = (isElementOpen: boolean) => {
  useEffect(() => {
    isElementOpen && (document.body.style.overflow = 'hidden')
    !isElementOpen && (document.body.style.overflow = '')
  }, [isElementOpen])
}

export default useDisableBodyScroll
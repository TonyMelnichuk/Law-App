import { useState, useEffect, FC } from 'react'
import './style.scss'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'
import useDisableBodyScroll from './hooks/useDisableBodyScroll'

// ! Якщо все добре працює то забрати в hoc закомент код

const App: FC = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState<boolean>(false)
  const [isDropdownNavOpen, setIsDropdownNavOpen] = useState<boolean>(false)

  // Disable page scroll when sticky nav is open.
  useDisableBodyScroll(isDropdownNavOpen)

  // This is needed for sticky nav.
  const getWindowScroll = () => window.scrollY > window.innerHeight
    ? setIsHeaderSticky(true)
    : setIsHeaderSticky(false)

  useEffect(() => {
    window.addEventListener('scroll', getWindowScroll)
    return () => window.removeEventListener('scroll', getWindowScroll)
  }, [])

  return (
    <div className='app'>
      <Header
        isHeaderSticky={isHeaderSticky}
        isDropdownNavOpen={isDropdownNavOpen}
        setIsDropdownNavOpen={setIsDropdownNavOpen}
      />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App

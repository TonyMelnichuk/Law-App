import { FC, useRef } from 'react'
import { Link, scroller } from 'react-scroll'
import { motion } from 'framer-motion'
import { useAppearAnimation } from '../../hooks/useAppearAnimation'
import useClickOutside from '../../hooks/useClickOutside'
import Nav from './nav/Nav'

interface HeaderProps {
  isHeaderSticky: boolean,
  isDropdownNavOpen: boolean,
  setIsDropdownNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = ({ isHeaderSticky, isDropdownNavOpen, setIsDropdownNavOpen }) => {
  const cn = require('classnames')
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLElement>(null)

  const appearAnimation = useAppearAnimation('bottom')

  useClickOutside([headerRef, dropdownRef], () => setIsDropdownNavOpen(false))

  const handleLogoEnter = (e: React.KeyboardEvent<HTMLButtonElement>, path: string) => {
    if (e.key = 'Enter') {
      setIsDropdownNavOpen(false)

      scroller.scrollTo(path, {
        duration: 500,
        smooth: true,
        spy: true,
      })
    }
  }

  return (
    <header
      className={cn('header', { 'header--fixed': isHeaderSticky })}
      ref={headerRef}
      id='header'
    >
      <div className='container'>
        <motion.div
          className='header__inner'
          {...appearAnimation}
        >
          <Link
            smooth={true}
            duration={500}
            tabIndex={0}
            spy={true}
            onKeyPress={e => handleLogoEnter(e, 'home')}
            onClick={() => setIsDropdownNavOpen(false)}
            className='header__logo'
            to='home'>
            Law
          </Link>
          <button
            className={cn('header__burger-btn', { 'header__burger-btn--close': isDropdownNavOpen })}
            onClick={() => setIsDropdownNavOpen(!isDropdownNavOpen)}>
            <span />
          </button>
          <Nav
            isDropdownNavOpen={isDropdownNavOpen}
            isHeaderSticky={isHeaderSticky}
            dropdownRef={dropdownRef}
            setIsDropdownNavOpen={setIsDropdownNavOpen}
          />
        </motion.div>
      </div>
    </header>
  )
}

export default Header



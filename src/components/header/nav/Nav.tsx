import { FC, useEffect, useState } from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { NavI } from '../../../interfaces/'

const dropdownVariants = {
  hidden: {
    height: 0,
    transitionEnd: { visibility: 'hidden' as 'hidden'},
    transition: {
      when: 'afterChildren',
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  visible: {
    height: 'auto',
    visibility: 'visible' as 'visible',
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  },
}

const dropdownItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
}

interface NavProps {
  isDropdownNavOpen: boolean
  isHeaderSticky: boolean
  dropdownRef: React.RefObject<HTMLElement>
  setIsDropdownNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: FC<NavProps> = (props) => {
  const {
    isDropdownNavOpen,
    isHeaderSticky,
    dropdownRef,
    setIsDropdownNavOpen,
  } = props

  const cn = require('classnames')
  const { t } = useTranslation()
  const navData: NavI[] = t('nav', { returnObjects: true })
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const defineWindowWidth = () => {
      setIsMobile(window.innerWidth < 1025)
    }

    window.addEventListener('resize', defineWindowWidth)

    defineWindowWidth()
    return () => window.removeEventListener('resize', defineWindowWidth)
  }, [])


  const NavItems = [
    ...navData.map(link => (
      <NavLink
        {...link}
        isDropdownNavOpen={isDropdownNavOpen}
        dropdownItemVariants={dropdownItemVariants}
        setIsDropdownNavOpen={setIsDropdownNavOpen}
        key={link.id}
      />
    )),
    <LanguageSwitcher
      dropdownItemVariants={dropdownItemVariants}
      setIsDropdownNavOpen={setIsDropdownNavOpen}
      key={navData.length}
    />
  ]

  return (
    <>
      {(typeof isMobile === 'boolean' && isMobile)
        ? (
          <motion.nav
            className={cn('nav', { 'nav--grey': !isHeaderSticky })}
            ref={dropdownRef}
            variants={dropdownVariants}
            animate={isDropdownNavOpen ? 'visible' : 'hidden'}
            initial='hidden'
            id='nav'
          >
            <div className='nav__dropdown'>
              {NavItems}
            </div>
          </motion.nav>
        )
        : (
          <nav className='nav' id='nav'>
            {NavItems}
          </nav>
        )
      }
    </>
  )
}

export default Nav
import { FC } from 'react'
import { motion } from 'framer-motion'
import { Link, scroller } from 'react-scroll'

interface NavLinkProps {
  link: string
  path: string
  isDropdownNavOpen: boolean
  dropdownItemVariants: {}
  setIsDropdownNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLink: FC<NavLinkProps> = (props) => {
  const {
    link,
    path,
    isDropdownNavOpen,
    dropdownItemVariants,
    setIsDropdownNavOpen
  } = props

  const handleNavLinkEnter = (e: React.KeyboardEvent<HTMLButtonElement>, path: string) => {
    if (e.key = 'Enter') {
      isDropdownNavOpen && setIsDropdownNavOpen(false)
      scroller.scrollTo(path, {
        duration: 500,
        smooth: true,
        spy: true,
      })
    }
  }

  return (
    <motion.div
      variants={dropdownItemVariants}
      className='nav__item'
    >
      <Link
        className='nav__item-link'
        onKeyPress={e => handleNavLinkEnter(e, path)}
        onClick={() => isDropdownNavOpen && setIsDropdownNavOpen(false)}
        smooth={true}
        duration={500}
        spy={true}
        tabIndex={0}
        to={path}
      >
        {link}
      </Link>
    </motion.div>
  )
}

export default NavLink
import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import i18next from 'i18next'

interface LanguageSwitcherProps {
  dropdownItemVariants: {}
  setIsDropdownNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ dropdownItemVariants, setIsDropdownNavOpen }) => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<'ua' | 'en'>('ua')

  const handleChangeLanguage = () => {
    const currentLanguage = language === 'ua' ? 'en' : 'ua'

    setLanguage(currentLanguage)
    i18n.changeLanguage(currentLanguage)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleChangeLanguage()
  }

  useEffect(() => {
    const currentLanguage = i18next.language as 'ua' | 'en'
    setLanguage(currentLanguage)
  }, [])

  return (
    <motion.div
      className='language-switcher'
      variants={dropdownItemVariants}
    >
      <input
        className='language-switcher__checkbox'
        type='checkbox'
        id='language-switcher'
        name='language-switcher'
        checked={language === 'ua'}
        onChange={handleChangeLanguage}
        onKeyPress={handleEnter}
        onBlur={() => setIsDropdownNavOpen(false)}
      />
      <label
        htmlFor='language-switcher'
        className='language-switcher__label'
      />
    </motion.div>
  )
}

export default LanguageSwitcher

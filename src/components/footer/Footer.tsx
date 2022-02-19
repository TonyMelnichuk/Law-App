import { motion } from 'framer-motion'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppearAnimation } from '../../hooks/useAppearAnimation'
import { FooterI } from '../../interfaces'

const Footer: FC = () => {
  const { t } = useTranslation()
  const appearAnimation = useAppearAnimation('scale')
  const cn = require('classnames')
  const {
    contacts: { title, contactsList: { email, location, phone } },
    copyright
  }: FooterI = t('footer', { returnObjects: true })

  return (
    <footer className='footer'>
      <div className='footer__contacts'>
        <h3 className='footer__contacts-title'>{title}</h3>
        <motion.div className='footer__contacts-links' {...appearAnimation}>
          <a className='footer__contact-link' href={'tel: +123 456 789 47 45'}>
            <i className={cn('footer__contact-img', 'fas fa-phone')} />
            <p className='footer__contact-text'>{phone}</p>
          </a>
          <a className='footer__contact-link' href={'mailto: balance@gmail.com'}>
            <i className={cn('footer__contact-img', 'far fa-envelope')} />
            <p className='footer__contact-text'>{email}</p>
          </a>
          <a className='footer__contact-link' href='https://www.google.com/maps' target='_blank'>
            <i className={cn('footer__contact-img', 'fas fa-map-marker-alt')} />
            <p className='footer__contact-text'>{location}</p>
          </a>
        </motion.div>
      </div>
      <p className='footer__copyright'>{copyright}</p>
    </footer>
  )
}

export default Footer
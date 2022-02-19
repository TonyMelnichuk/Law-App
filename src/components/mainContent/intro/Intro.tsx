import { FC } from 'react'
import { motion } from 'framer-motion'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { useTranslation } from 'react-i18next'

const Intro: FC = () => {
  const appearAnimation = useAppearAnimation('left')
  const { t } = useTranslation()
  const introSubtitleText: string = t('introSubtitle', { returnObjects: true })

  return (
    <div className='intro' id='home' >
      <div className='container'>
        <motion.div className='intro__inner' {...appearAnimation}>
          <h1 className='intro__title'>Balance</h1>
          <p className='intro__subtitle'>{introSubtitleText}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro

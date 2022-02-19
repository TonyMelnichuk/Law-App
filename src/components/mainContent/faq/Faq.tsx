import { useState, FC } from 'react'
import FaqItem from './FaqItem'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import faqImg from '../../assets/faq.svg'
import { motion } from 'framer-motion'
import { FaqI } from '../../../interfaces'
import { useTranslation } from 'react-i18next'

const Faq: FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)

  const appearAnimation = useAppearAnimation('scale')
  const { t } = useTranslation()
  const { title, faqList }: FaqI = t('faq', { returnObjects: true })

  const handleFaqToggle = (index: number) => {
    if (index !== openFaqIndex) setOpenFaqIndex(index)
  }

  return (
    <section className='section' id='faq'>
      <div className='container'>
        <h2 className='section__title'>{title}</h2>
        <motion.div className='faq' {...appearAnimation}>
          <img className='faq__img' src={faqImg} alt={title} />
          <ul className='faq__items'>
            {faqList.map(({id, ...rest}) =>
              <FaqItem
                {...rest}
                isFaqOpen={id === openFaqIndex}
                currentFaqId={id}
                onFaqToggle={handleFaqToggle}
                key={id}
              />)}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Faq

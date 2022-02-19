import { FC } from 'react'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AboutUsI } from '../../../interfaces'
import { SwipeableHandlers } from 'react-swipeable'

interface AboutUsProps {
  currentSlide: number
  sliderContentWidth: number
  handlers: SwipeableHandlers
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
}

const AboutUs: FC<AboutUsProps> = ({ currentSlide, sliderContentWidth, setCurrentSlide, handlers }) => {
  const appearAnimation = useAppearAnimation()
  const { t } = useTranslation()
  const { img, title, sliderData }: AboutUsI = t('aboutUs', { returnObjects: true })
  const cn = require('classnames')

  return (
    <section className='section' id='about-us'>
      <div className='container'>
        <h2 className='section__title'>{title}</h2>
        <motion.div {...appearAnimation}>
          <div className='about-us' {...handlers}>
            <img className='about-us__avatar' src={img} alt='author' />
            <div className='about-us__slider'>
              <div
                className='about-us__slider-content'
                style={{ transform: `translateY(${-(currentSlide * sliderContentWidth)}px)` }}>
                {sliderData.map(({ title, text, author, id }) => (
                  <div className='about-us__slide' key={id}>
                    <h3 className='about-us__slide-title'>{title}</h3>
                    <p className='about-us__slide-text'>{text}</p>
                    <p className='about-us__slide-author'>{author}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='about-us__btns'>
              {sliderData.map(({ id }) => (
                <button
                  className={cn('about-us__btn', { 'about-us__btn--active': currentSlide === id })}
                  onClick={() => setCurrentSlide(id)}
                  key={id}>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
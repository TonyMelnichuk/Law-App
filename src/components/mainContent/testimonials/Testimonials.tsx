import { FC } from 'react'
import Testimonial from './Testimonial'
import { SwipeableHandlers } from 'react-swipeable'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { motion } from 'framer-motion'
import { TestimonialsI } from '../../../interfaces'
import { useTranslation } from 'react-i18next'

interface TestimonialsProps {
  currentSlide: number
  sliderContentWidth: number
  handlers: SwipeableHandlers
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
  setSliderContentWidth: React.Dispatch<React.SetStateAction<number>>
}

const Testimonials: FC<TestimonialsProps> = (props) => {
  const {
    currentSlide,
    sliderContentWidth,
    handlers,
    setCurrentSlide,
    setSliderContentWidth
  } = props

  const appearAnimation = useAppearAnimation('top')
  const { t } = useTranslation()
  const { title, testimonialsList }: TestimonialsI = t('testimonials', { returnObjects: true })

  return (
    <section className='section' id='testimonials' >
      <motion.div className='testimonials' {...appearAnimation}>
        <h2 className='section__title'>{title}</h2>
        <div className='testimonials__content' >
          <div
            className='testimonials__slider'
            style={{ transform: `translateX(${-(currentSlide * sliderContentWidth)}px)` }}
            {...handlers}
          >
            {testimonialsList.map(testimonial =>
              <Testimonial
                {...testimonial}
                currentSlide={currentSlide}
                setSliderContentWidth={setSliderContentWidth}
                key={testimonial.id}
              />)
            }
          </div>
        </div>
        <input
          className='testimonials__input'
          type='range'
          min={0}
          max={testimonialsList.length - 1}
          value={currentSlide}
          onChange={e => setCurrentSlide(+e.target.value)}
        />
      </motion.div>
    </section>
  )
}

export default Testimonials


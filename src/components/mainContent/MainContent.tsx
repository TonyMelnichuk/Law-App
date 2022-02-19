import { FC, memo } from 'react'
import Intro from './intro/Intro'
import AboutUs from './aboutUs/AboutUs'
import Services from './services/Services'
import Testimonials from './testimonials/Testimonials'
import Faq from './faq/Faq'
import Statistics from './statistics/Statistics'
import Team from './team/Team'
import FeedbackForm from './feedbackForm/FeedbackForm'
import { useTranslation } from 'react-i18next'
import { AboutUsI, TestimonialsI } from '../../interfaces'
import { withSliderLogic } from '../../hoc/withSliderLogic'

const MainContent: FC = () => {
  const TestimonialsSlider = withSliderLogic(Testimonials)
  const AboutUsSlider = withSliderLogic(AboutUs)
  const { t } = useTranslation()
  const { testimonialsList }: TestimonialsI = t('testimonials', { returnObjects: true })
  const { sliderData }: AboutUsI = t('aboutUs', { returnObjects: true })

  return (
    <main >
      <Intro />
      <AboutUsSlider
        sliderWidth={400}
        initSlide={0}
        sliderLength={sliderData.length}
        isSliderHorizontal={false}
      />
      <Statistics />
      <Team />
      <Services />
      <TestimonialsSlider
        sliderWidth={600}
        initSlide={5}
        sliderLength={testimonialsList.length}
        isSliderHorizontal={true}
      />
      <Faq />
      <FeedbackForm />
    </main>
  )
}

export default memo(MainContent)
import { FC } from 'react'
import Service from './Service'
import { ServicesI } from '../../../interfaces'
import { useTranslation } from 'react-i18next'

const Services: FC = () => {
  const { t } = useTranslation()
  const { title, servicesList }: ServicesI = t('services', { returnObjects: true })

  return (
    <section className='section' id='services'>
      <h2 className='section__title'>{title}</h2>
      <div className='services'>
        {servicesList.map(({ id, ...rest }) => <Service {...rest} key={id} />)}
      </div>
    </section>
  )
}
export default Services

import { FC } from 'react'
import Stat from './Stat'
import { useTranslation } from 'react-i18next'
import { StatI } from '../../../interfaces'

const Statistics: FC = () => {
  const { t } = useTranslation()
  const statisticsData: StatI[] = t('statistics', { returnObjects: true })

  return (
    <div className='statistics'>
      <div className='container'>
        <div className='statistics__items'>
          {statisticsData.map(({ id, ...rest }) => <Stat {...rest} key={id} />)}
        </div>
      </div>
    </div>
  )
}

export default Statistics
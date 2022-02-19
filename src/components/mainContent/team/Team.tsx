import { FC } from 'react'
import TeamMember from './TeamMember'
import { TeamI } from '../../../interfaces'
import { useTranslation } from 'react-i18next'

const Team: FC = () => {
  const { t } = useTranslation()
  const { title, teamList }: TeamI = t('team', { returnObjects: true })

  return (
    <section className='section' id='team'>
      <h2 className='section__title'>{title}</h2>
      <div className='team'>
        <div className='container'>
          <div className='team__members'>
            {teamList.map(({ id, ...rest }) => <TeamMember {...rest} key={id} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

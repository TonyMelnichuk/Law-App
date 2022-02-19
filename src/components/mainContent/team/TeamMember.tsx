import { FC } from 'react'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { motion } from 'framer-motion'

interface TeamMemberProps {
  name: string
  prof: string
  img: string
  text: string
}

const TeamMember: FC<TeamMemberProps> = ({ name, prof, img, text }) => {
  const appearAnimation = useAppearAnimation()

  return (
    <motion.div className='team__member' {...appearAnimation}>
      <div className='team__member-card'>
        <img className='team__member-img' src={img} alt={name}></img>
        <div className='team__member-inner'>
          <div className='team__member-description'>
            <h3 className='team__member-name team__member-name--black'>{name}</h3>
            <p className='team__member-prof'>{prof}</p>
            <p className='team__member-text'>{text}</p>
          </div>
        </div>
      </div>
      <h3 className='team__member-name'>{name}</h3>
    </motion.div>
  )
}

export default TeamMember

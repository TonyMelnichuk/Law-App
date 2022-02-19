import { FC } from 'react'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { motion } from 'framer-motion'

interface ServiceProps {
  title: string
  img: string
}

const Service: FC<ServiceProps> = ({ title, img }) => {
  const appearAnimation = useAppearAnimation('left')

  return (
    <motion.div className='services__item' {...appearAnimation}>
      <img className='services__item-img' src={img} alt={title} />
      <h3 className='services__item-title'>{title}</h3>
    </motion.div>
  )
}

export default Service

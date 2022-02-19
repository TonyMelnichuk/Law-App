import { FC } from 'react'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { motion } from 'framer-motion'

interface StatProps {
  img: string
  count: string | number
  text: string
}

const Stat: FC<StatProps> = ({ img, count, text }) => {
  const appearAnimation = useAppearAnimation('scale')

  return (
    <motion.div className='statistics__item' {...appearAnimation}>
      <img className='statistics__item-img' src={img} alt={text} />
      <h3 className='statistics__item-count'>{count}</h3>
      <p className='statistics__item-text'>{text}</p>
    </motion.div>
  )
}

export default Stat
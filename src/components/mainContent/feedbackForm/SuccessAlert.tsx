import { FC } from 'react'
import { motion } from 'framer-motion'

interface SuccessAlertProps {
  isSuccessAlertOpen: boolean
  successAlertText: string
}

const SuccessAlert: FC<SuccessAlertProps> = ({ isSuccessAlertOpen, successAlertText }) => {
  return (
    <motion.div
      className='feedback-form__success-alert'
      animate={isSuccessAlertOpen
        ? { x: 0, visibility: 'visible' }
        : { x: '100%', transitionEnd: { visibility: 'hidden' }, transition: { stiffness: 0 } }
      }
      initial={{ x: '100%', visibility: 'hidden' }}>
      {successAlertText}
    </motion.div>
  )
}

export default SuccessAlert
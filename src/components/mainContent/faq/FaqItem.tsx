import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

interface FaqItemProps {
  title: string
  text: string
  currentFaqId: number
  isFaqOpen: boolean
  onFaqToggle: (currentFaqId: number) => void
}

const FaqItem: FC<FaqItemProps> = ({ title, text, currentFaqId, isFaqOpen, onFaqToggle }) => {
  const cn = require('classnames')

  return (
    <li className='faq__item' onClick={() => onFaqToggle(currentFaqId)}>
      <div className='faq__item-header'>
        <h3 className='faq__item-title'>{title}</h3>
        <button className={cn('faq__item-btn', { 'faq__item-btn--open': isFaqOpen })} />
      </div>
      <AnimatePresence initial={false}>
        {isFaqOpen && (
          <motion.p
            className='faq__item-text'
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: .5, ease: [.04, .62, .23, .98] }}
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </li>
  )
}

export default FaqItem
import { useEffect, useState, FC } from 'react'
import { useInput } from '../../../hooks/useInput'
import { useAppearAnimation } from '../../../hooks/useAppearAnimation'
import { motion } from 'framer-motion'
import SuccessAlert from './SuccessAlert'
import { FeedbackFormI, ServicesI } from '../../../interfaces'
import { useTranslation } from 'react-i18next'

const FeedbackForm: FC = () => {
  const { t } = useTranslation()
  const {
    title,
    formPlaceholders: {
      namePlaceholder,
      phonePlaceholder,
      emailPlaceholder,
      messagePlaceholder
    },
    submitButtonText,
    successAlertText
  }: FeedbackFormI = t('feedbackForm', { returnObjects: true })
  const { servicesList }: ServicesI = t('services', { returnObjects: true })

  const [name, bindName, resetName] = useInput('text', namePlaceholder, 'letters')
  const [email, bindEmail, resetEmail] = useInput('email', emailPlaceholder, 'all')
  const [tel, bindPhoneNumber, resetTel] = useInput('text', phonePlaceholder, 'numbers')

  const [services, setServices] = useState<string>('')
  const [textareaValue, setTextareaValue] = useState<string>('')
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState<boolean>(false)

  const appearAnimation = useAppearAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccessAlertOpen(true)
  }

  // hide successful alert
  useEffect(() => {
    if (isSuccessAlertOpen) {
      const timeout = setTimeout(() => setIsSuccessAlertOpen(false), 2000)
      clearForm()
      return () => clearTimeout(timeout)
    }
  }, [isSuccessAlertOpen])

  const clearForm = () => {
    resetName()
    resetEmail()
    resetTel()
    setServices('')
    setTextareaValue('')
  }

  return (
    <>
      <section className='section' id='feedback'>
        <div className='container'>
          <h2 className='section__title'>{title}</h2>
          <motion.form className='feedback-form' onSubmit={handleSubmit} {...appearAnimation}>
            <div className='feedback-form__inputs'>
              <input
                className='feedback-form__input'
                minLength={2}
                maxLength={45}
                {...bindName}
                required
              />
              <input
                className='feedback-form__input'
                {...bindEmail}
                required
              />
              <input
                className='feedback-form__input'
                minLength={10}
                maxLength={13}
                {...bindPhoneNumber}
                required
              />
              <select
                onChange={e => setServices(e.target.value)}
                className='feedback-form__input' >
                {servicesList.map(({ title }) => <option value={title} key={title}>{title}</option>)}
              </select >
            </div>
            <textarea
              className='feedback-form__input feedback-form__input--textarea'
              onChange={e => setTextareaValue(e.target.value)}
              value={textareaValue}
              name='text'
              rows={5}
              required
              placeholder={messagePlaceholder}>
            </textarea>
            <button className='feedback-form__submit-btn' type='submit'>{submitButtonText}</button>
          </motion.form>
        </div>
      </section >
      <SuccessAlert
        isSuccessAlertOpen={isSuccessAlertOpen}
        successAlertText={successAlertText}
      />
    </>
  )
}

export default FeedbackForm
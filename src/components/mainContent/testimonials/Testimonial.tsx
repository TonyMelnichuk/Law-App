import { useRef, useEffect, FC } from 'react'

interface TestimonialProps {
  author: string
  text: string
  img: string
  id: number
  currentSlide: number
  setSliderContentWidth: React.Dispatch<React.SetStateAction<number>>
}

const Testimonial: FC<TestimonialProps> = (props) => {
  const {
    author,
    text,
    img,
    id,
    currentSlide,
    setSliderContentWidth
  } = props

  const cn = require('classnames')

  // ref for slider`s width
  const testimonialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSliderContentWidth(testimonialRef.current!.clientWidth)
  }, [currentSlide])

  return (
    <div
      className={cn('testimonials__item', { 'testimonials__item--active': currentSlide === id })}
      ref={testimonialRef}
    >
      <img className='testimonials__item-avatar' src={img} alt='img' />
      <p className='testimonials__item-text'>{text}</p>
      <p className='testimonials__item-author'>{author}</p>
    </div>
  )
}


export default Testimonial

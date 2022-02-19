import { useState, useEffect, FC } from 'react'
import { SwipeableHandlers, useSwipeable } from 'react-swipeable'

interface SliderComponentPropsI {
  sliderWidth: number
  initSlide: number
  sliderLength: number
  isSliderHorizontal: boolean
}

interface withSliderLogicReturnI {
  currentSlide: number
  sliderContentWidth: number
  handlers: SwipeableHandlers
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
  setSliderContentWidth: React.Dispatch<React.SetStateAction<number>>
}

export const withSliderLogic = (Component: React.ComponentType<withSliderLogicReturnI>) => {
  const SliderComponent: FC<SliderComponentPropsI> = (props) => {
    const {
      sliderWidth,
      initSlide,
      sliderLength,
      isSliderHorizontal
    } = props

    const [currentSlide, setCurrentSlide] = useState<number>(initSlide)
    const [sliderContentWidth, setSliderContentWidth] = useState<number>(sliderWidth)
    // const timeoutRef = useRef<any>(null)

    // const resetTimeout = () => window.clearTimeout(timeoutRef.current)

    useEffect(() => {
      // resetTimeout()
      // timeoutRef.current = window.setTimeout(() => {
      //   setCurrentSlide(prevSlide => prevSlide === sliderLength - 1 ? 0 : prevSlide + 1)
      // }, 3000)
      // return () => resetTimeout()
      const timeout = window.setTimeout(() => {
        setCurrentSlide(prevSlide => prevSlide === sliderLength - 1 ? 0 : prevSlide + 1)
      }, 3000)
      return () => clearTimeout(timeout)
    }, [currentSlide])

    const swipeToNextSlide = () => {
      if (currentSlide < sliderLength - 1) setCurrentSlide(currentSlide + 1)
    }

    const swipeToPrevSlide = () => {
      if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
    }

    const defineSwipeMethods = (isSliderHorizontal: boolean) => (
      isSliderHorizontal
        ? {
          onSwipedLeft: swipeToNextSlide,
          onSwipedRight: swipeToPrevSlide
        }
        : {
          onSwipedUp: swipeToNextSlide,
          onSwipedDown: swipeToPrevSlide,
        }
    )

    const handlers = useSwipeable({
      ...defineSwipeMethods(isSliderHorizontal),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
      delta: 6,
    })

    return (
      <Component
        currentSlide={currentSlide}
        sliderContentWidth={sliderContentWidth}
        setCurrentSlide={setCurrentSlide}
        setSliderContentWidth={setSliderContentWidth}
        handlers={handlers}
      />
    )
  }

  return SliderComponent
}
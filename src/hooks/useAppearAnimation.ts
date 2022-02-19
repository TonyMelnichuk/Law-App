import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const animationVariants = {
  top: {
    initial: { y: -85 },
    visible: { y: 0 },
  },
  bottom: {
    initial: { y: 85 },
    visible: { y: 0 },
  },
  left: {
    initial: { x: -85 },
    visible: { x: 0 },
  },
  right: {
    initial: { x: 85 },
    visible: { x: 0 },
  },
  scale: {
    initial: { scale: .7 },
    visible: { scale: 1 },
  }
}

type AnimationDirectionType = 'top' | 'bottom' | 'left' | 'right' | 'scale'

export const useAppearAnimation = (animationDirection?: AnimationDirectionType) => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  const VISIBLE_ANIMATION = animationDirection
    ? animationVariants[animationDirection].visible
    : animationVariants.bottom.visible

  const INITIAL_ANIMATION = animationDirection
    ? animationVariants[animationDirection].initial
    : animationVariants.bottom.initial

  const wrapperVariants = {
    initial: { ...INITIAL_ANIMATION, opacity: 0 },
    visible: {
      ...VISIBLE_ANIMATION,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return {
    initial: 'initial',
    animate: controls,
    variants: wrapperVariants,
    ref
  }
}

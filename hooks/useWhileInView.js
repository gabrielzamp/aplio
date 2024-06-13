import { useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'

const useWhileInView = (ref) => {
  const inInView = useInView(ref, { once: true })
  const controlAnimation = useAnimation()

  useEffect(() => {
    if (inInView) {
      controlAnimation.start('animate')
    }
  }, [inInView, controlAnimation])
  return controlAnimation
}

export default useWhileInView

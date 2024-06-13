import { useEffect, useRef, useState } from 'react'
const CounterAnimation = ({ number }) => {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true)
        } else {
          setIsCounting(false)
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isCounting && count < number) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 2)
      }, 10)

      return () => {
        clearInterval(timer)
      }
    }
  }, [count, isCounting, number])

  useEffect(() => {
    if (count >= number) {
      return
    }
  }, [count, number])

  return (
    <span className="counter" ref={counterRef}>
      {count}
    </span>
  )
}

export default CounterAnimation

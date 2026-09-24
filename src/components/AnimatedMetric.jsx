import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function AnimatedMetric({ value, label }) {
  const valueRef = useRef(null)
  const number = Number.parseInt(value, 10)

  useEffect(() => {
    const counter = { value: 0 }
    const animation = gsap.to(counter, {
      value: number,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        if (valueRef.current) valueRef.current.textContent = `${Math.round(counter.value)}%`
      },
    })
    return () => animation.kill()
  }, [number])

  return <div className="metric"><strong ref={valueRef}>0%</strong><span>{label}</span><i style={{ width: `${number}%` }} /></div>
}

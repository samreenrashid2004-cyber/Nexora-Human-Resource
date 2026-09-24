import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initHomeAnimations() {
  if (prefersReducedMotion) {
    gsap.set(
      '.trust-section, .impact-section, .services-preview, .people-index-section, .why-nexora-section, .testimonials-section, .final-cta-section, .service-preview-card, .why-card, .testimonial-card',
      { opacity: 1, y: 0 },
    )

    return
  }

  const sections = gsap.utils.toArray(
    '.trust-section, .impact-section, .services-preview, .people-index-section, .why-nexora-section, .testimonials-section, .final-cta-section',
  )

  sections.forEach((section) => {
    const content = section.querySelector('.container > div, .container > article')

    if (!content) return

    gsap.fromTo(
      content,
      { opacity: 0, y: 45 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      },
    )
  })

  gsap.utils.toArray('.service-preview-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      },
    )
  })

  gsap.utils.toArray('.why-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      },
    )
  })

  gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      },
    )
  })

  gsap.utils.toArray('.metric-value').forEach((element) => {
    const targetValue = Number(element.dataset.value)
    const counter = { value: 0 }

    gsap.to(counter, {
      value: targetValue,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        element.textContent = `${Math.round(counter.value)}%`
      },
    })
  })

  return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}

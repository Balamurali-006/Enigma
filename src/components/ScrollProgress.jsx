import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setWidth(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: 3,
      width: `${width}%`,
      background: 'linear-gradient(90deg, #d4af37, #f1d77a)',
      zIndex: 9999,
      transition: 'width 0.1s linear',
      boxShadow: '0 0 8px rgba(212,175,55,0.7)',
    }} />
  )
}

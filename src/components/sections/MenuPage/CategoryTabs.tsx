'use client'

import { useEffect, useRef, useState } from 'react'
import { menuData } from '@/lib/menu-data'

const categoryKeys = Object.keys(menuData)

export default function CategoryTabs() {
  const [active, setActive] = useState(categoryKeys[0])
  const tabsRef = useRef<HTMLDivElement>(null)

  // IntersectionObserver para actualizar tab activa al scrollear
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    categoryKeys.forEach((key) => {
      const el = document.getElementById(`section-${key}`)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(key)
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Animar items al cargar con stagger
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.menu-item')
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), i * 25)
    })
  }, [])

  const scrollToSection = (key: string) => {
    const el = document.getElementById(`section-${key}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(key)
  }

  return (
    <div
      ref={tabsRef}
      className="sticky top-0 z-30 bg-bg border-b border-linea overflow-x-auto scrollbar-hide"
      role="tablist"
      aria-label="Categorías del menú"
    >
      <div className="flex min-w-max px-4 md:px-8 md:justify-center">
        {categoryKeys.map((key) => {
          const isActive = active === key
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`section-${key}`}
              onClick={() => scrollToSection(key)}
              className={`font-jost text-sm px-4 py-4 whitespace-nowrap border-b-2 transition-all duration-200 ${
                isActive
                  ? 'text-bordo border-bordo font-500'
                  : 'text-muted border-transparent hover:text-cafe-texto'
              }`}
            >
              {menuData[key].label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

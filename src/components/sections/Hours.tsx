'use client'

import { useEffect, useState } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const schedule = [
  { label: 'Lunes', days: [1], hours: '8:45 – 19:45' },
  { label: 'Martes', days: [2], hours: '8:45 – 19:45' },
  { label: 'Miércoles', days: [3], hours: '8:45 – 19:45' },
  { label: 'Jueves', days: [4], hours: '8:45 – 19:45' },
  { label: 'Viernes', days: [5], hours: '8:45 – 19:45' },
  { label: 'Sábado', days: [6], hours: '11:00 – 16:00' },
  { label: 'Domingo', days: [0], hours: 'Cerrado', closed: true },
]

const paymentChips = ['Débito', 'Crédito', 'NFC']

export default function Hours() {
  const [today, setToday] = useState<number | null>(null)

  useEffect(() => {
    setToday(new Date().getDay())
  }, [])

  return (
    <section id="horarios" className="bg-bg py-20 px-6" aria-label="Horarios e información">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Columna horarios */}
        <RevealOnScroll direction="left">
          <div>
            <p className="font-jost font-light text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Horarios
            </p>
            <h2 className="font-playfair italic text-4xl text-cafe-texto mb-8">
              Cuándo visitarnos
            </h2>

            <ul className="flex flex-col gap-1" role="list">
              {schedule.map((row) => {
                const isToday = today !== null && row.days.includes(today)
                return (
                  <li
                    key={row.label}
                    className={`flex justify-between items-center px-4 py-3 rounded-lg transition-colors ${
                      isToday
                        ? 'bg-bordo-light text-bordo'
                        : 'text-cafe-texto hover:bg-surface'
                    }`}
                    aria-current={isToday ? 'true' : undefined}
                  >
                    <span className={`font-jost text-sm ${isToday ? 'font-500' : ''}`}>
                      {row.label}
                      {isToday && (
                        <span className="ml-2 text-xs font-light opacity-70">(hoy)</span>
                      )}
                    </span>
                    <span className={`font-jost text-sm ${row.closed ? 'text-muted' : isToday ? 'font-500' : ''}`}>
                      {row.hours}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Columna info */}
        <RevealOnScroll direction="right" delay={150}>
          <div className="flex flex-col gap-8">
            {/* Dirección */}
            <div className="flex gap-3 items-start">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" className="text-bordo mt-0.5 shrink-0" aria-hidden="true">
                <path d="M9 1C5.134 1 2 4.134 2 8c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7Z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <div>
                <p className="font-jost text-sm text-cafe-texto">Quillota 116, piso 2</p>
                <p className="font-jost font-light text-sm text-muted">Puerto Montt, Chile</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-3 items-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-bordo shrink-0" aria-hidden="true">
                <path d="M3.5 2h3l1.5 4-2 1.5c.8 1.6 2.4 3.2 4 4l1.5-2 4 1.5v3C15.5 15.33 9.17 17 3.5 9.5 1 5.5 2.67 2 3.5 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="tel:+56652260977" className="font-jost text-sm text-cafe-texto hover:text-bordo transition-colors">
                (65) 226 0977
              </a>
            </div>

            {/* Google Maps */}
            <a
              href="https://www.google.com/maps/search/Quillota+116+Puerto+Montt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-jost text-sm px-5 py-2.5 border border-cafe-texto text-cafe-texto rounded-lg hover:bg-surface transition-colors duration-200 w-fit"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M15 3h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Abrir en Google Maps
            </a>

            {/* Métodos de pago */}
            <div>
              <p className="font-jost font-light text-xs text-muted mb-2 uppercase tracking-widest">
                Medios de pago
              </p>
              <div className="flex flex-wrap gap-2">
                {paymentChips.map((chip) => (
                  <span key={chip} className="font-jost text-xs px-3 py-1 bg-bordo-light text-bordo rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
            </div>   
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

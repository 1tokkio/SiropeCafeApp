'use client'

import { useState } from 'react'
import { adicionales, formatPrice } from '@/lib/menu-data'

export default function AdicionalesBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-linea rounded-lg overflow-hidden">
      {/* Header colapsable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-surface hover:bg-linea/30 transition-colors duration-200"
        aria-expanded={open}
        aria-controls="adicionales-content"
      >
        <span className="font-playfair italic text-base text-cafe-texto">
          Adicionales
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M3 5.5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Contenido con height transition */}
      <div
        id="adicionales-content"
        role="region"
        aria-label="Lista de adicionales"
        style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 300ms ease',
        }}
      >
        <div className="grid grid-cols-2 gap-px bg-linea border-t border-linea">
          {adicionales.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between gap-2 px-4 py-3 bg-bg"
            >
              <span className="font-jost font-400 text-xs text-cafe-texto">
                {a.name}
              </span>
              <span className="font-jost font-500 text-xs text-bordo whitespace-nowrap">
                +{formatPrice(a.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

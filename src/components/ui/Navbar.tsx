'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/menu', label: 'Carta' },
  { href: '/#horarios', label: 'Horarios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar drawer al presionar Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-bg border-b border-linea shadow-[0_1px_8px_rgba(46,31,20,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-playfair italic text-2xl text-cafe-texto tracking-tight hover:text-bordo transition-colors duration-200"
            aria-label="Café Sirope — inicio"
          >
            Sirope
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-jost text-sm font-400 text-cafe-texto hover:text-bordo transition-colors duration-200 tracking-wide"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón Ver carta (desktop) */}
          <div className="hidden md:block">
            <Link
              href="/menu"
              className="font-jost text-sm font-500 px-5 py-2 bg-bordo text-white rounded-lg hover:bg-[#6a2535] transition-colors duration-200"
            >
              Ver carta
            </Link>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <span className="block w-5 h-px bg-cafe-texto" />
            <span className="block w-5 h-px bg-cafe-texto" />
            <span className="block w-5 h-px bg-cafe-texto" />
          </button>
        </nav>
      </header>

      {/* Overlay semitransparente */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-cafe-texto/40 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer lateral mobile */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-bg flex flex-col transform transition-transform duration-[250ms] ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-linea">
          <span className="font-playfair italic text-xl text-cafe-texto">Sirope</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="p-2 -mr-2 text-muted hover:text-cafe-texto transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-6 py-8">
          <ul className="flex flex-col gap-6" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-jost text-base text-cafe-texto hover:text-bordo transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 pb-8">
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="block text-center font-jost text-sm font-500 px-5 py-3 bg-bordo text-white rounded-lg hover:bg-[#6a2535] transition-colors duration-200"
          >
            Ver carta
          </Link>
        </div>
      </div>
    </>
  )
}

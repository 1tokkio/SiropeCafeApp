import Link from 'next/link'

const navLinks = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/menu', label: 'Carta' },
  { href: '/#horarios', label: 'Horarios' },
]

export default function Footer() {
  return (
    <footer className="bg-cafe-texto text-surface" aria-label="Pie de página">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="font-playfair italic text-2xl text-surface">Sirope</span>
            <p className="font-jost font-light text-xs text-muted leading-relaxed max-w-[180px]">
              El café del sur, con vista al mar.<br />
              Puerto Montt, Chile.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie de página">
            <p className="font-jost font-light text-xs tracking-widest uppercase text-muted mb-4">
              Páginas
            </p>
            <ul className="flex flex-col gap-3 items-center md:items-start" role="list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-jost text-sm text-surface/70 hover:text-surface transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="font-jost font-light text-xs tracking-widest uppercase text-muted">
              Contacto
            </p>
            <address className="not-italic flex flex-col gap-2">
              <span className="font-jost text-sm text-surface/70">
                Quillota 116, piso 2 — Puerto Montt
              </span>
              <a
                href="tel:+56652260977"
                className="font-jost text-sm text-surface/70 hover:text-surface transition-colors"
              >
                (65) 226 0977
              </a>
              <a
                href="https://www.instagram.com/sirope.cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 font-jost text-sm text-surface/70 hover:text-surface transition-colors"
                aria-label="Instagram de Café Sirope"
              >
                {/* Instagram SVG */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
                @sirope.cafe
              </a>
            </address>
          </div>
        </div>

        {/* Divisor */}
        <div
          className="mt-12 mb-6"
          style={{ height: '0.5px', backgroundColor: 'rgba(158,142,128,0.2)' }}
          aria-hidden="true"
        />

        {/* Fila inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <p className="font-jost font-light text-xs text-muted">
            © 2025 Café Sirope · Puerto Montt, Chile
          </p>
          <p className="font-jost font-light text-xs text-muted">
            Diseño y desarrollo por{' '}
            <span className="text-surface/50">Tu Nombre</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

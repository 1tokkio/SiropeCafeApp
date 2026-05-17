import Link from 'next/link'
import { menuData } from '@/lib/menu-data'
import CategoryTabs from '@/components/sections/MenuPage/CategoryTabs'
import MenuSection from '@/components/sections/MenuPage/MenuSection'
import AdicionalesBar from '@/components/sections/MenuPage/AdicionalesBar'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata = {
  title: 'Carta — Café Sirope',
  description: 'Carta completa de Café Sirope: cafés, tés, preparaciones frías, desayunos, sándwiches y pastelería. Puerto Montt, Chile.',
}

export default function MenuPage() {
  return (
    <>
      {/* Header de la carta */}
      <header className="bg-bg border-b border-linea px-6 py-5">
        <div className="max-w-3xl mx-auto flex flex-col gap-1">
          <Link
            href="/"
            className="font-jost font-light text-xs text-muted hover:text-cafe-texto transition-colors flex items-center gap-1 w-fit mb-1"
            aria-label="Volver al inicio"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Inicio
          </Link>
          <h1 className="font-playfair italic text-3xl md:text-4xl text-cafe-texto">
            Carta
          </h1>
          <p className="font-jost font-light text-xs text-muted">
            Quillota 116, piso 2 · Puerto Montt
          </p>
        </div>
      </header>

      {/* Tabs de categorías (sticky) */}
      <CategoryTabs />

      {/* Contenido del menú */}
      <main className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-14">
        {Object.entries(menuData).map(([key, category]) => (
          <MenuSection key={key} id={key} category={category} />
        ))}

        {/* Adicionales colapsables */}
        <AdicionalesBar />

        {/* Footer de la carta */}
        <footer className="border-t border-linea pt-8 flex flex-col gap-5">
          {/* Horarios resumidos */}
          <div>
            <p className="font-jost font-light text-xs text-muted uppercase tracking-widest mb-2">
              Horarios
            </p>
            <p className="font-jost text-sm text-cafe-texto">
              Lun–Vie <span className="text-muted">8:45 – 19:45</span>
              {'  ·  '}
              Sáb <span className="text-muted">11:00 – 16:00</span>
              {'  ·  '}
              Dom <span className="text-muted">Cerrado</span>
            </p>
          </div>

          {/* Nota de precios */}
          <p className="font-jost font-light text-xs text-muted">
            Precios en pesos chilenos (CLP) · Sujeto a cambios sin aviso previo
          </p>

          {/* CTA WhatsApp + Instagram */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/56652260977"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-jost text-sm px-5 py-2.5 bg-bordo text-white rounded-lg hover:bg-[#6a2535] transition-colors"
            >
              Pedir por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/sirope.cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-jost text-sm px-5 py-2.5 border border-linea text-cafe-texto rounded-lg hover:bg-surface transition-colors"
            >
              @sirope.cafe
            </a>
          </div>
        </footer>
      </main>

      <WhatsAppButton />
    </>
  )
}

import Link from 'next/link'
import { menuData, formatPrice } from '@/lib/menu-data'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const previewCategories = ['cafes', 'desayunos', 'pasteleria'] as const
const ITEMS_PER_CATEGORY = 4

export default function MenuPreview() {
  return (
    <section className="bg-surface py-20 px-6" aria-label="Vista previa de la carta">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <RevealOnScroll>
          <div className="mb-12 text-center md:text-left">
            <h2 className="font-playfair italic text-4xl md:text-5xl text-cafe-texto mb-2">
              Una probada de la carta
            </h2>
            <p className="font-jost font-light text-sm text-muted">
              Carta completa disponible en{' '}
              <Link href="/menu" className="text-bordo hover:underline">
                /menu
              </Link>
            </p>
          </div>
        </RevealOnScroll>

        {/* Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {previewCategories.map((key, i) => {
            const category = menuData[key]
            const items = category.items.slice(0, ITEMS_PER_CATEGORY)
            return (
              <RevealOnScroll key={key} delay={i * 100}>
                <div>
                  <h3 className="font-playfair italic text-lg text-cafe-texto mb-4 pb-3 border-b border-linea">
                    {category.label}
                  </h3>
                  <ul role="list">
                    {items.map((item, idx) => (
                      <li
                        key={item.name}
                        className={`flex items-baseline justify-between gap-4 py-3 ${
                          idx < items.length - 1 ? 'border-b border-linea/60' : ''
                        }`}
                      >
                        <span className="font-jost text-sm text-cafe-texto">{item.name}</span>
                        <span className="font-jost font-500 text-sm text-bordo whitespace-nowrap shrink-0">
                          {formatPrice(item.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={200}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <Link
              href="/menu"
              className="font-jost text-sm px-8 py-3 bg-bordo text-white rounded-lg hover:bg-[#6a2535] transition-colors duration-200"
            >
              Ver carta completa
            </Link>
            <p className="font-jost font-light text-xs text-muted">
              Precios en pesos chilenos · Sujeto a cambios
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

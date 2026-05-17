import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const cards = [
  {
    num: '01',
    title: 'Espresso de autor',
    desc: 'Granos seleccionados para el mejor café del sur de Chile',
    photo: '/images/cafe-torta.webp',
    photoAlt: 'Cappuccino con latte art junto a torta artesanal en Café Sirope',
    photoPosition: 'center 55%',
    filter: 'brightness(1.05) contrast(1.1) saturate(1.08)',
  },
  {
    num: '02',
    title: 'Pastelería artesanal',
    desc: 'Preparaciones frescas del día, postres que invitan a quedarse',
    photo: '/images/postre-bowl.webp',
    photoAlt: 'Bowl de postre artesanal con frambuesas frescas en Café Sirope',
    photoPosition: 'center center',
    filter: 'brightness(1.05) contrast(1.08) saturate(1.1)',
  },
  {
    num: '03',
    title: 'Selección de tés',
    desc: 'Más de 10 variedades para cada momento del día',
    photo: '/images/te-tetera.webp',
    photoAlt: 'Tetera vertiendo té en taza de vidrio en Café Sirope',
    photoPosition: 'center 40%',
    filter: 'brightness(1.1) contrast(1.08) saturate(0.9) sepia(0.1)',
  },
]

export default function Highlights() {
  return (
    <section className="bg-bg py-20 px-6" aria-label="Lo que nos define">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-playfair italic text-4xl md:text-5xl text-cafe-texto mb-12 text-center md:text-left">
            Lo que nos define
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <RevealOnScroll key={card.num} delay={i * 130}>
              <article className="bg-bg border border-linea rounded-lg overflow-hidden hover:border-bordo transition-colors duration-300 group flex flex-col h-full">
                {/* Foto — sin overlay, bordes limpios */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={card.photo}
                    alt={card.photoAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      objectPosition: card.photoPosition,
                      filter: card.filter,
                    }}
                  />
                </div>

                {/* Texto */}
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="font-playfair text-[42px] leading-none text-muted/40 block mb-3 select-none transition-colors duration-300 group-hover:text-bordo/30"
                    aria-hidden="true"
                  >
                    {card.num}
                  </span>
                  <h3 className="font-playfair italic text-xl text-cafe-texto mb-2">
                    {card.title}
                  </h3>
                  <p className="font-jost font-light text-sm text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

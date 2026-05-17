import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const stats = [
  { value: '7.000+', label: 'Seguidores en Instagram' },
  { value: '2020', label: 'Año de apertura' },
  { value: 'Piso 2', label: 'Con vista al mar' },
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-surface py-20 px-6"
      aria-label="Sobre nosotros"
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats mobile */}
        <div className="grid grid-cols-3 gap-4 mb-12 md:hidden">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center">
              <span className="font-playfair text-2xl text-cafe-texto">{s.value}</span>
              <span className="font-jost font-light text-[11px] text-muted mt-1 leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:gap-16 items-start">
          {/* Columna texto */}
          <RevealOnScroll direction="left" className="flex-[3]">
            <p className="font-jost font-light text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Sobre nosotros
            </p>
            <h2 className="font-playfair italic text-4xl md:text-5xl text-cafe-texto mb-6 leading-tight">
              Un rincón con vista al sur
            </h2>
            <p className="font-jost font-light text-base text-cafe-texto/80 leading-relaxed mb-4">
              Café Sirope nació en 2020 como un espacio para quienes valoran los pequeños placeres: un espresso bien extraído, una media luna recién horneada, una vista al mar desde el piso 2 mientras llueve afuera.
            </p>
            <p className="font-jost font-light text-base text-cafe-texto/80 leading-relaxed mb-4">
              Somos un lugar ideal para trabajar con tu laptop, encontrarte con alguien o simplemente desconectarte. Un espacio inclusivo, moderno y acogedor que da la bienvenida a familias, turistas y grupos.
            </p>
            <p className="font-jost font-light text-base text-cafe-texto/80 leading-relaxed">
              Nuestros desayunos se preparan con ingredientes seleccionados, los granos de café son de origen, y la pastelería sale del horno cada mañana. Eso es Sirope.
            </p>

            {/* Stats desktop inline bajo el texto */}
            <div className="hidden md:grid grid-cols-3 gap-px mt-10 border border-linea rounded-lg overflow-hidden">
              {stats.map((s) => (
                <div key={s.value} className="px-5 py-5 bg-surface">
                  <span className="font-playfair text-2xl text-cafe-texto block">{s.value}</span>
                  <span className="font-jost font-light text-xs text-muted mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Columna fotos */}
          <div className="hidden md:flex flex-[2] flex-col gap-3 mt-2">
            {/* Foto principal — exterior del local */}
            <RevealOnScroll direction="right" delay={100}>
              <div className="relative w-full overflow-hidden rounded-lg border border-linea" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/exterior-local.jpg"
                  alt="Fachada de Café Sirope en Quillota 116, piso 2, Puerto Montt"
                  fill
                  sizes="35vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  style={{ filter: 'brightness(1.02) contrast(1.06) saturate(0.9)' }}
                />
              </div>
            </RevealOnScroll>

            {/* Foto secundaria — interior atmosférico */}
            <RevealOnScroll direction="right" delay={220}>
              <div className="relative w-full overflow-hidden rounded-lg border border-linea" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/hero-ambiente.webp"
                  alt="Clientes disfrutando el ambiente de Café Sirope con vista al verde del sur"
                  fill
                  sizes="35vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  style={{ filter: 'brightness(1.0) contrast(1.06) saturate(1.05) sepia(0.06)' }}
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

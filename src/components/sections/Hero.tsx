import Link from 'next/link'

const bgPhotos = [
  { src: '/images/exterior-local.jpg', pos: 'center top'    }, // esquina sup-izq
  { src: '/images/cafe-torta.webp',    pos: 'center 55%'    }, // centro sup — tonos cálidos/oscuros
  { src: '/images/postre-bowl.webp',   pos: 'center center' }, // esquina sup-der
  { src: '/images/about-local.webp',   pos: 'center center' }, // esquina inf-izq
  { src: '/images/te-tetera.webp',     pos: 'center 40%'    }, // centro inf — fondo oscuro
  { src: '/images/hero-ambiente.webp', pos: 'center center' }, // esquina inf-der
]

const zoomDuration = ['22s', '27s', '19s', '24s', '29s', '21s']
const zoomDir      = ['normal', 'alternate', 'alternate', 'normal', 'normal', 'alternate']

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem', overflow: 'hidden', backgroundColor: '#FAF7F2' }}
      aria-label="Sección principal"
    >
      {/* ── Collage de fondo ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 0,
        }}
      >
        {bgPhotos.map((photo, i) => (
          <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: photo.pos,
                opacity: 0.42,
                filter: 'saturate(0.28) sepia(0.12)',
                animation: `subtle-zoom ${zoomDuration[i]} ease-in-out infinite ${zoomDir[i]}`,
                willChange: 'transform',
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Viñeta radial — aclara el centro donde va el texto ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 50% 55% at 50% 48%, rgba(250,247,242,0.78) 0%, rgba(250,247,242,0.22) 55%, rgba(250,247,242,0.0) 100%)',
        }}
      />

      {/* ── Texto ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <p
          className="font-jost font-light text-xs tracking-[0.25em] uppercase text-muted mb-8"
          style={{ animation: 'hero-enter 550ms ease 80ms both' }}
        >
          Puerto Montt, Chile
        </p>

        <h1
          className="font-playfair italic font-normal text-[44px] leading-tight md:text-[72px] text-cafe-texto"
          style={{ animation: 'hero-enter 600ms ease 220ms both' }}
        >
          Café Sirope
        </h1>

        <div
          className="mt-6 mb-6 h-px bg-bordo"
          style={{ width: '60px', animation: 'hero-enter 400ms ease 380ms both' }}
          aria-hidden="true"
        />

        <p
          className="font-jost font-light text-lg md:text-xl text-muted"
          style={{ animation: 'hero-enter 550ms ease 480ms both' }}
        >
          El café del sur, con vista al mar
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          style={{ animation: 'hero-enter 550ms ease 620ms both' }}
        >
          <Link
            href="/menu"
            className="font-jost text-sm px-7 py-3 bg-bordo text-white rounded-lg hover:bg-[#6a2535] transition-colors duration-200 text-center"
          >
            Ver carta
          </Link>
          <a
            href="https://maps.app.goo.gl/zc2Njf7r95kxMBBJ6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-sm px-7 py-3 border border-cafe-texto text-cafe-texto rounded-lg hover:bg-surface/80 transition-colors duration-200 text-center"
          >
            Cómo llegar
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted z-10"
        style={{ animation: 'hero-enter 500ms ease 900ms both' }}
        aria-hidden="true"
      >
        <span className="font-jost font-light text-xs tracking-widest uppercase">Scroll</span>
        <svg className="animate-bounce-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v12M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

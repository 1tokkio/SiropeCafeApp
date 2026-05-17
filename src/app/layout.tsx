import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Café Sirope — El café del sur, con vista al mar',
  description:
    'Cafetería en Puerto Montt, Chile. Quillota 116, piso 2. Espresso de autor, pastelería artesanal y gran selección de tés. Lun–Vie 8:45–19:45 | Sáb 11:00–16:00.',
  openGraph: {
    title: 'Café Sirope — El café del sur, con vista al mar',
    description:
      'Cafetería en Puerto Montt, Chile. Espresso de autor, pastelería artesanal y gran selección de tés.',
    type: 'website',
    locale: 'es_CL',
  },
  keywords: ['café', 'cafetería', 'Puerto Montt', 'Chile', 'espresso', 'desayuno', 'pasteles'],
}

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jost.variable}`}>
      <body className="bg-bg text-cafe-texto font-jost antialiased">
        {children}
      </body>
    </html>
  )
}

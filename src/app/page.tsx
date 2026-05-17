import Navbar from '@/components/ui/Navbar'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Highlights from '@/components/sections/Highlights'
import MenuPreview from '@/components/sections/MenuPreview'
import Hours from '@/components/sections/Hours'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <MenuPreview />
        <Hours />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

import { type MenuCategory } from '@/lib/menu-data'
import MenuItemComponent from './MenuItem'

interface Props {
  id: string
  category: MenuCategory
}

export default function MenuSection({ id, category }: Props) {
  return (
    <section
      id={`section-${id}`}
      className="scroll-mt-[88px]"
      aria-label={category.label}
    >
      {/* Título con borde izquierdo */}
      <h2 className="font-playfair italic text-[22px] text-cafe-texto pl-3 border-l-2 border-bordo mb-6">
        {category.label}
      </h2>

      {/* Grid 2 columnas en md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
        {category.items.map((item) => (
          <MenuItemComponent key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

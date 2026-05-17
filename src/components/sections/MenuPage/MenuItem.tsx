import { type MenuItem as MenuItemType, formatPrice } from '@/lib/menu-data'

interface Props {
  item: MenuItemType
}

export default function MenuItem({ item }: Props) {
  return (
    <div className="menu-item flex items-start justify-between gap-4 py-3.5 border-b border-linea/50 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="font-jost font-500 text-sm text-cafe-texto leading-snug">
          {item.name}
        </p>
        {item.desc && (
          <p className="font-jost font-light text-xs text-muted mt-0.5 leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
      <span className="font-jost font-500 text-sm text-bordo whitespace-nowrap shrink-0">
        {formatPrice(item.price)}
      </span>
    </div>
  )
}

export interface MenuItem {
  name: string
  desc?: string
  price: number
}

export interface MenuCategory {
  label: string
  items: MenuItem[]
}

export interface Adicional {
  name: string
  price: number
}

export function formatPrice(n: number): string {
  return `$${n.toLocaleString('es-CL')}`
}

export const menuData: Record<string, MenuCategory> = {
  cafes: {
    label: 'Cafés',
    items: [
      { name: 'Ristretto', desc: 'Shot espresso 15ml', price: 2000 },
      { name: 'Espresso', desc: 'Shot espresso 30ml', price: 2000 },
      { name: 'Doppio', desc: 'Espresso doble', price: 2600 },
      { name: 'Lungo', desc: 'Espresso largo', price: 2000 },
      { name: 'Americano', desc: 'Shot espresso con agua', price: 2400 },
      { name: 'Americano Doble', desc: 'Espresso doppio con agua', price: 3100 },
      { name: 'Macchiato', desc: 'Shot espresso con mancha de leche', price: 2100 },
      { name: 'Macchiato Doble', desc: 'Espresso doppio con mancha de leche', price: 2600 },
      { name: 'Cortado', desc: 'Shot espresso con 120ml leche texturizada', price: 2800 },
      { name: 'Cortado Doble', desc: 'Espresso doppio con leche texturizada', price: 3800 },
      { name: 'Cappuccino', desc: 'Shot espresso, cacao y leche texturizada', price: 2900 },
      { name: 'Cappuccino Doble', desc: 'Espresso doppio, cacao y leche texturizada', price: 3900 },
      { name: 'Cappuccino Crema', desc: 'Shot espresso, cacao, leche texturizada y crema', price: 4500 },
      { name: 'Cappuccino Sirope', desc: 'Shot espresso, cacao, leche texturizada y sirope', price: 4500 },
      { name: 'Latte', desc: 'Shot espresso con 200ml leche texturizada', price: 3400 },
      { name: 'Latte Doble', desc: 'Espresso doppio con leche texturizada', price: 3900 },
      { name: 'Vienna', desc: 'Espresso doppio con crema', price: 3500 },
      { name: 'Sirope', desc: 'Shot espresso, sirope, leche texturizada y crema', price: 4900 },
      { name: 'Mocaccino', desc: 'Shot espresso, chocolate y leche texturizada', price: 3800 },
      { name: 'Mocaccino Crema', desc: 'Shot espresso, chocolate, leche texturizada y crema', price: 4500 },
      { name: 'Mocka After Eight', desc: 'Shot espresso, chocolate, leche texturizada y sirope de menta', price: 4900 },
      { name: 'Dirty Chai', desc: 'Shot espresso, chai y leche texturizada oat', price: 3800 },
    ],
  },
  tes: {
    label: 'Tés y Especiales',
    items: [
      { name: 'Chai Latte', desc: 'Té chai con leche texturizada', price: 3900 },
      { name: 'Matcha Latte', desc: 'Té verde japonés con leche texturizada', price: 3800 },
      { name: 'Golden Milk', desc: 'Cúrcuma y especias con leche texturizada oat', price: 4500 },
      { name: 'Chocolate Caliente', desc: 'Chocolate cacao con leche texturizada', price: 3800 },
      { name: 'Chocolate Crema', desc: 'Chocolate cacao, leche texturizada y crema', price: 4500 },
      { name: 'Chocolate Marsh', desc: 'Chocolate cacao, leche texturizada y marshmallow', price: 4500 },
      { name: 'Té Individual', desc: 'Té de bolsa', price: 1900 },
      { name: 'Té de Hoja', desc: 'Té de hoja a elección', price: 2600 },
      { name: 'Tetera Para Dos', desc: 'Té de hoja a elección', price: 3700 },
    ],
  },
  frias: {
    label: 'Preparaciones Frías',
    items: [
      { name: 'Expreso Tonic', desc: 'Shot espresso, tónica y hielo', price: 4200 },
      { name: 'Orange Coffee', desc: 'Shot espresso con naranja', price: 4500 },
      { name: 'Affogatto', desc: 'Shot espresso con helado de vainilla', price: 4500 },
      { name: 'Lette Frío', desc: 'Espresso doppio, leche y hielo', price: 4000 },
      { name: 'Café Frappé', desc: 'Shot espresso, hielo frappé, leche y azúcar', price: 3900 },
      { name: 'Frappuccino Caramelo', desc: 'Espresso, hielo frappé, leche, caramelo y crema', price: 4800 },
      { name: 'Moccafrape', desc: 'Espresso, hielo frappé, leche, chocolate y crema', price: 4800 },
      { name: 'Café Helado', desc: 'Espresso, helado vainilla, leche y crema', price: 4700 },
      { name: 'Chocolate Helado', desc: 'Chocolate, helado vainilla, leche y crema', price: 4700 },
      { name: 'Ice Latte Chai', desc: 'Té chai, leche y hielo', price: 4200 },
      { name: 'Ice Tea', desc: 'Té y hielo', price: 3200 },
      { name: 'Limonada', desc: 'Menta jengibre o albahaca', price: 3500 },
      { name: 'Vitamina Naranja', desc: 'Exprimido de naranja', price: 4500 },
      { name: 'Naranja Jengibre', price: 3800 },
      { name: 'Naranja Plátano', price: 4200 },
      { name: 'Jugos Naturales', desc: 'Frambuesa, arándano, mix berries, piña y mango', price: 3800 },
      { name: 'Frambuesa Menta', price: 3800 },
      { name: 'Leche con Plátano', price: 3800 },
      { name: 'Milkshake', desc: 'Helado sabor con leche', price: 4200 },
      { name: 'Smoothie', desc: 'Fruta, leche y azúcar', price: 4200 },
      { name: 'Agua Mineral sin Gas', price: 2200 },
      { name: 'Agua Mineral con Gas', price: 2200 },
      { name: 'Bebida', price: 2200 },
    ],
  },
  desayunos: {
    label: 'Para Comenzar el Día',
    items: [
      { name: 'Amanecer Untado', desc: 'Café, tostadas con mantequilla y mermelada casera', price: 4200 },
      { name: 'Clásico Dulzón', desc: 'Café más dos medias lunas', price: 5500 },
      { name: 'Tostadas Francesas', desc: 'Pan en mezcla sirope, fruta y jarabe de agave', price: 5500 },
      { name: 'Tostadas con Palta', desc: 'Tostadas ciabatta o integral con palta', price: 4500 },
      { name: 'Tostadas con Huevo', desc: 'Tostadas con paila de huevo revuelto · +jamón o tocino $1.800', price: 4200 },
      { name: 'Despertar Clásico', desc: 'Café, vitamina, tostadas con paila de huevo de gallinas libres', price: 8200 },
      { name: 'Mañana Verde', desc: 'Café, vitamina, tostadas con palta', price: 8900 },
      { name: 'Despertar Vital', desc: 'Café, bowl de yoghurt, granola, semillas, fruta y jarabe de agave', price: 5800 },
    ],
  },
  sandwiches: {
    label: 'Sándwiches y Ensaladas',
    items: [
      { name: 'Ciabatta Nordic', desc: 'Pan masa madre, salmón, queso crema y lechuga', price: 7200 },
      { name: 'Serranía Verde', desc: 'Pan masa madre, jamón serrano, queso crema y rúcula', price: 6500 },
      { name: 'Ciabatta New York', desc: 'Pan masa madre, pastrami, queso crema y pepinillo', price: 6500 },
      { name: 'Mediterráneo Vivo', desc: 'Pampita, humus, pesto de tomate, cherry y rúcula', price: 6500 },
      { name: 'Pampita Caprese', desc: 'Pampita, queso mantecoso, cherry y albahaca', price: 6500 },
      { name: 'Croissant Clásico', desc: 'Jamón y queso', price: 3400 },
      { name: 'Croissant Rojo Oriente', desc: 'Croissant, humus y pimentón rojo', price: 4500 },
      { name: 'Croissant Provenzal', desc: 'Queso de cabra con pesto de tomate', price: 4500 },
      { name: 'Ensaladas', desc: 'Mix hojas verdes, cherry · salmón, pastrami o serrano', price: 7200 },
      { name: 'Quiche + Ensaladilla', desc: 'Cebolla, tomate, albahaca, jamón, tocino, espinaca, champiñón', price: 7200 },
    ],
  },
  pasteleria: {
    label: 'Pastelería',
    items: [
      { name: 'Medialuna', price: 1500 },
      { name: 'Rollito Manzana Canela', price: 1900 },
      { name: 'Galletones', price: 2900 },
      { name: 'Brownie', price: 2200 },
      { name: 'Brownie + Helado', price: 3800 },
      { name: 'Strudel', price: 4500 },
      { name: 'Strudel + Crema o Helado', price: 5200 },
      { name: 'Pie de Limón', price: 3800 },
      { name: 'Torta del Día', price: 4500 },
      { name: 'Cheesecake del Día', price: 3800 },
      { name: 'Copa de Helado', price: 4200 },
    ],
  },
}

export const adicionales: Adicional[] = [
  { name: 'Sirope / Crema', price: 800 },
  { name: 'Miel', price: 300 },
  { name: 'Descafeinado', price: 500 },
  { name: 'Sin lactosa', price: 300 },
  { name: 'Leche vegetal', price: 800 },
  { name: 'Palta', price: 1800 },
  { name: 'Pepinillo', price: 800 },
  { name: 'Cherry', price: 800 },
  { name: 'Jamón', price: 1800 },
  { name: 'Tocino', price: 1800 },
  { name: 'Huevo', price: 600 },
  { name: 'Pan', price: 1200 },
]

# Café Sirope — Sitio Web

Sitio web oficial de **Café Sirope**, cafetería ubicada en Quillota 116, piso 2, Puerto Montt, Chile.

---

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**

## Estructura

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # Landing principal
│   ├── globals.css
│   └── menu/
│       └── page.tsx      # Carta completa
├── components/
│   ├── sections/         # Hero, About, Highlights, MenuPreview, Hours, Footer
│   │   └── MenuPage/     # CategoryTabs, MenuSection, MenuItem, AdicionalesBar
│   └── ui/               # Navbar, WhatsAppButton, RevealOnScroll
└── lib/
    └── menu-data.ts      # Datos del menú y formatPrice()
```

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy

El proyecto está desplegado en **Vercel**. Cada push a `main` genera un deploy automático.

## Contacto del negocio

| | |
|---|---|
| Dirección | Quillota 116, piso 2, Puerto Montt |
| Teléfono | (65) 226 0977 |
| Instagram | [@sirope.cafe](https://www.instagram.com/sirope.cafe) |
| Horario | Lun–Vie 8:45–19:45 · Sáb 11:00–16:00 |

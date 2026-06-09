# InfoPaíses - Vue.js

Una SPA desarrollada con **Vue.js 3** y **Vite** que permite explorar información de países de todo el mundo. Filtra por continente, busca por nombre y consulta capital, población y región con una interfaz dark profesional construida con PrimeVue.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![PrimeVue](https://img.shields.io/badge/PrimeVue-4.x-41b883?style=for-the-badge&logo=vue.js&logoColor=white)
![Vuex](https://img.shields.io/badge/Vuex-4.x-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11.x-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

## Demo

[https://vue-paises-spa.vercel.app/](https://vue-paises-spa.vercel.app/)

## Características

- **Búsqueda en tiempo real** — por nombre común u oficial del país
- **Filtros por continente** — Europa, América, Asia, Oceanía y África con SelectButton reactivo
- **Ordenamiento por población** — descendente mediante getter de Vuex
- **UI dark profesional** — PrimeVue 4 con tema Aura y primario verde personalizado
- **Estado de carga** — Skeleton cards mientras se obtienen los datos de la API
- **Rendimiento optimizado** — Vite 5 con chunking vendor separado

## Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Vue.js | 3.5 | Framework UI (Options API + Composition API) |
| Vite | 5.4 | Build tool y dev server |
| Vuex | 4.1 | Gestión de estado global |
| PrimeVue | 4.x | Librería de componentes (Card, Tag, SelectButton, InputText, Skeleton) |
| PrimeIcons | 7.x | Iconografía |
| ESLint | 9.x | Linting (flat config + eslint-plugin-vue) |
| Prettier | 3.x | Formateo de código |
| pnpm | 11.x | Gestor de paquetes |

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/cmurestudillos/paises-vue.git
cd paises-vue

# Instalar dependencias
pnpm install

# Servidor de desarrollo (http://localhost:8080)
pnpm dev
```

## Scripts

```bash
pnpm dev        # Servidor de desarrollo
pnpm build      # Build de producción en /dist
pnpm preview    # Previsualizar build local
pnpm lint       # Verificar errores ESLint
pnpm lint:fix   # Corregir errores automáticamente
pnpm format     # Formatear con Prettier
```

## Estructura

```
paises-vue/
├── index.html                  # Entrada — clase app-dark para tema dark
├── vite.config.js              # Puerto 8080, alias @, vendor chunk
├── eslint.config.js            # ESLint 9 flat config
├── vercel.json                 # Config deploy Vercel
├── .prettierrc                 # Prettier — singleQuote, printWidth 120
├── public/
│   ├── css/styles.css          # Bootstrap CSS estático (background)
│   └── img/logo.png
└── src/
    ├── main.js                 # PrimeVue config — GreenAura dark preset
    ├── assets/main.css         # Estilos globales — layout, grid, overrides
    ├── App.vue
    ├── store/index.js          # Vuex — paises, filtros, loading, selectedRegion
    └── components/
        ├── Navbar.vue          # SelectButton de regiones
        ├── Buscador.vue        # IconField + InputText
        ├── CardList.vue        # Grid + Skeleton loading
        ├── Card.vue            # PvCard + PvTag (capital, población, región)
        └── Footer.vue          # Versión desde package.json
```

## API

- **Endpoint:** `https://countries-api-service.vercel.app/api/countries`
- Sin autenticación, sin variables de entorno necesarias

## Licencia

MIT — [Carlos Mur](https://github.com/cmurestudillos)

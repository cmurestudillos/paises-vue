# 🌍 Paises - Vue.js

Una aplicación web moderna desarrollada con **Vue.js 3** y **Vite** que permite explorar información detallada de países de todo el mundo. Filtra por continente, busca por nombre y descubre datos interesantes sobre población, capitales y más.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vuex](https://img.shields.io/badge/Vuex-4.x-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## ✨ Características

- 🔍 **Búsqueda inteligente** - Busca países por nombre común u oficial
- 🌐 **Filtros por continente** - Europa, América, Asia, Oceanía y África
- 📊 **Ordenamiento por población** - Visualiza los países más poblados primero
- 🎨 **Interfaz moderna** - Diseño responsivo con Bootstrap 5
- ⚡ **Rendimiento optimizado** - Construido con Vite para máxima velocidad
- 🗂️ **Gestión de estado** - Vuex para manejo eficiente del estado global

## 🚀 Demo

[Ver Demo en Vivo](https://vue-paises-spa.vercel.app/) <!-- Agrega tu URL de deployment aquí -->

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3** - Framework JavaScript progresivo
- **Vite** - Build tool ultrarrápido
- **Vuex 4** - Gestión de estado
- **Bootstrap 5** - Framework CSS
- **Composition API** - API moderna de Vue
- **REST API** - [Countries API Service](https://countries-api-service.vercel.app/api/countries)

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🔧 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/cmurestudillos/paises-vue.git
cd paises-vue
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador**
```
http://localhost:8080
```

## 📦 Scripts Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
countries-explorer/
├── public/
│   └── img/
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── Buscador.vue      # Componente de búsqueda
│   │   ├── Card.vue           # Tarjeta individual de país
│   │   ├── CardList.vue       # Lista de tarjetas
│   │   ├── Footer.vue         # Pie de página
│   │   └── Navbar.vue         # Barra de navegación
│   ├── store/
│   │   └── index.js           # Configuración de Vuex
│   ├── App.vue                # Componente principal
│   └── main.js                # Punto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Funcionalidades Principales

### Filtrado por Continente
Selecciona un continente para ver solo los países de esa región:
- 🇪🇺 Europa (EU)
- 🌎 Américas (AM)
- 🌏 Asia (AS)
- 🌊 Oceanía (OC)
- 🌍 África (AF)

### Búsqueda de Países
Escribe el nombre de cualquier país en el buscador y obtén resultados en tiempo real.

### Información Detallada
Cada tarjeta de país muestra:
- 🏳️ Bandera oficial
- 🏛️ Capital
- 👥 Población formateada
- 🗺️ Continente/Región

## 🔌 API Utilizada

Este proyecto consume datos de:
- **Endpoint**: `https://countries-api-service.vercel.app/api/countries`
- **Documentación**: Proporciona información completa de 240+ países

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

- [ ] Agregar modo oscuro
- [ ] Implementar filtros combinados
- [ ] Añadir página de detalles por país
- [ ] Incluir gráficos de estadísticas
- [ ] Agregar comparador de países
- [ ] Implementar favoritos con localStorage
- [ ] Añadir internacionalización (i18n)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Carlos Mur**

- GitHub: [@tu-usuario](https://github.com/cmurestudillos)

## 🙏 Agradecimientos

- API de países proporcionada por [Countries API Service](https://countries-api-service.vercel.app)
- Iconos y recursos de [Bootstrap](https://getbootstrap.com)
- Comunidad de Vue.js

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!

**Hecho con ❤️ y Vue.js**
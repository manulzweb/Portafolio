# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.1.0/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [No publicado]

Cambios en `develop` que aún no forman parte de una versión etiquetada.

## [2.1.0] — 2026-07-07

### Añadido
- Sección **Trayectoria** con línea de tiempo editable (`src/js/data/timeline.js`).
- Sección **Testimonios** auto-ocultable (`src/js/data/testimonials.js`).
- **CV en PDF** descargable desde el hero, con fuente editable en `public/cv/cv.html`.
- **Formulario de contacto** funcional (Web3Forms con respaldo `mailto:`).
- Comandos de terminal: `github` (stats en vivo), `snake` 🐍 jugable, `theme light|dark`, `particles`.
- **Modo claro** con toggle en la navbar y persistencia.
- **SEO**: JSON-LD (schema Person), `sitemap.xml`, `robots.txt` e imagen Open Graph.
- Página **404** personalizada estilo terminal.
- **PWA**: `manifest.webmanifest` + service worker con soporte offline.
- **Tests E2E** con Playwright (8 specs) integrados en CI.
- Despliegue continuo a GitHub Pages (`.github/workflows/deploy.yml`).

### Cambiado
- Proyecto destacado principal ahora usa una captura real.

## [2.0.0] — 2026-07-03

### Añadido
- Rediseño completo **"Dev OS"** con terminal interactiva en el hero.
- Pantalla de boot, fondo de partículas en canvas y auras moradas ambientales.
- Microinteracciones: glitch en el nombre, typewriter de roles, tilt 3D,
  botones magnéticos, contadores animados y reveal-on-scroll.
- Comando `matrix`: lluvia de caracteres en el fondo de la página.
- Proyectos **data-driven** desde `src/js/data/projects.js`.
- Navbar con scrollspy de sección activa y estado con scroll.
- Fuentes self-hosteadas (Nunito + JetBrains Mono), sin Google Fonts.
- Smooth scroll con Lenis.
- Tooling: Vite, ESLint 9, Prettier y CI con Lighthouse.

### Cambiado
- Estética morada + glassmorphism refinada, conservando la identidad original.
- Hero móvil reorganizado a distribución [foto | nombre] con tarjeta debajo.

[No publicado]: https://github.com/manulzweb/manulzweb.github.io/compare/v2.1.0...develop
[2.1.0]: https://github.com/manulzweb/manulzweb.github.io/releases/tag/v2.1.0
[2.0.0]: https://github.com/manulzweb/manulzweb.github.io/releases/tag/v2.0.0

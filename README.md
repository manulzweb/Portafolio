# Portafolio de Manuel Vasquez

Este repositorio contiene un portafolio personal estático con diseño responsivo y componentes JavaScript modulares. El sitio está compuesto por una página principal de presentación y una página secundaria dedicada a una galería de mascotas con datos cargados dinámicamente.

## Descripción

- Sitio web estático construido con HTML, CSS y JavaScript moderno.
- Página principal (`index.html`) con secciones de inicio, tecnologías, proyectos, servicios y contacto.
- Página de mascotas (`mascotas.html`) con galería dinámica, botones interactivos y mensajes de bienvenida.
- Estructura modular de CSS y JS para separar responsabilidades entre estilos, datos y comportamiento.

## Características

- Navegación responsiva con menú hamburguesa.
- Hero section con presentación profesional.
- Sección de tecnologías con tarjetas visuales.
- Sección de proyectos destacados.
- Sección de servicios.
- Página de mascotas con tarjetas generadas desde JSON.
- Componente `tech-card` para tarjetas de tecnología.
- Mensaje toast de bienvenida según la hora del día.
- Botón de WhatsApp para contacto rápido.
- Buenas prácticas de modularidad y código organizado.

## Estructura del proyecto

├── index.html
├── LICENSE
├── mascotas.html
├── public
│   ├── img
│   │   ├── ManuelVasquezPhoto.webp
│   │   ├── pets
│   │   │   ├── ares.webp
│   │   │   ├── camille.webp
│   │   │   ├── dalilaydante.webp
│   │   │   ├── leila.webp
│   │   │   ├── lucky.webp
│   │   │   ├── perla.webp
│   │   │   └── princesa.webp
│   │   ├── placeholder-api.svg
│   │   ├── placeholder-portafolio.svg
│   │   ├── placeholder-tareas.svg
│   │   └── whatsapp.webp
│   └── video
├── README.md
└── src
    ├── components
    │   ├── atoms
    │   ├── layouts
    │   ├── molecules
    │   ├── organisms
    │   └── pages
    ├── css
    │   ├── animated-border.css
    │   ├── big-card.css
    │   ├── buttons.css
    │   ├── footer.css
    │   ├── hero-section.css
    │   ├── navbar.css
    │   ├── pets.css
    │   ├── projects-section.css
    │   ├── services-section.css
    │   ├── style.css
    │   ├── technologies-section.css
    │   ├── toast.css
    │   └── whatsapp-button.css
    └── js
        ├── data
        │   └── PetData.json
        ├── main.js
        ├── model
        │   └── Pet.js
        ├── petsScript.js
        ├── services
        │   ├── GalleryManager.js
        │   ├── GreetingManager.js
        │   └── Toast.js
        └── ui
            └── PetCard.js

## 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+ (módulos)
- API Fetch
- Componentes Web nativos
- Animaciones CSS

## 📦 Cómo ejecutar el proyecto

Este sitio es estático. Se recomienda ejecutarlo con una extensión de servidor local, ya que `fetch` de JSON puede fallar con `file://`.

**Opción recomendada:**
- Usar **Live Server** en VSCode u otra extensión equivalente de servidor local.

##  Notas de entrega final

- El proyecto no requiere instalación de dependencias.
- `index.html` y `mascotas.html` se pueden desplegar como sitio estático.
- La galería de mascotas se puede ampliar editando `src/js/data/PetData.json`.
- `TechCard` y `PetCard` son dos formas distintas de renderizado de tarjetas usadas en el proyecto.

## ✨ Mejoras futuras sugeridas

- Añadir formulación de contacto funcional.
- Mejorar las rutas y enlaces internos para navegación más fluida.
- Incorporar pruebas unitarias para `PetCard`, `TechCard` y los servicios.
- Añadir más contenido real a los proyectos y servicios.

## Contacto

- WhatsApp: `https://wa.me/573016778673`
- Autor: Manuel Vasquez

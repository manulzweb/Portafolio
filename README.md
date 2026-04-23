# Portafolio de Manuel Vasquez

Este repositorio contiene un portafolio personal estático con diseño responsivo y componentes JavaScript modulares. Incluye una página principal de presentación profesional y una página secundaria con una galería dinámica de mascotas.

## Descripción

- Sitio web estático construido con HTML, CSS y JavaScript moderno.
- Página principal (`index.html`) con secciones de inicio, tecnologías, proyectos, servicios y contacto.
- Página de mascotas (`mascotas.html`) con una galería cargada desde JSON, animaciones y botones interactivos.
- Estructura modular de CSS y JS para mantener separación de responsabilidades.

## Características

- Navegación responsiva con menú hamburguesa.
- Hero section con presentación personal.
- Secciones de proyectos y servicios.
- Sección de tecnologías destacadas.
- Galería dinámica de mascotas basada en datos JSON.
- Componente de tarjeta de mascota reutilizable.
- Toast de bienvenida según la hora del día.
- Botón de WhatsApp para contacto rápido.
- Animaciones de aparición y toggling de elementos.

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
    │   ├── proyectos-section.css
    │   ├── servicios-section.css
    │   ├── style.css
    │   ├── tecnologias-section.css
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
- Animaciones con CSS

## 📦 Cómo ejecutar el proyecto

Este es un sitio estático. Para ejecutarlo localmente se recomienda usar un servidor HTTP simple, ya que la carga de `JSON` mediante `fetch` puede no funcionar correctamente con el protocolo `file://`.

Opciones:

1. Usar Python:

```bash
cd nombreCarpetaConRepoClonado
python3 -m http.server 8000
```

Luego abrir `http://localhost:8000` en el navegador.

2. Usar la extensión Live Server de VSCode.

## 📁 Notas sobre desarrollo

- No requiere dependencias ni herramientas de compilación.
- El proyecto está listo para desplegarse como sitio estático en plataformas como GitHub Pages.
- Para extender la galería, agrega nuevas entradas en `src/js/data/PetData.json`.

## Mejoras futuras sugeridas

- Añadir navegación entre páginas más fluida.
- Incluir formularios de contacto funcionales.
- Mejorar accesibilidad con atributos ARIA adicionales.
- Agregar tests unitarios para los componentes JavaScript.

## Contacto

- WhatsApp: `https://wa.me/573016778673`
- Autor: Manuel Vasquez

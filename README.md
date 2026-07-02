# Portafolio - Manuel Vasquez

Bienvenido al repositorio de mi portafolio profesional. Este proyecto es un sitio web estático de alto rendimiento, diseñado con una estética moderna glassmorphism y una arquitectura modular pensada para la escalabilidad.

## ✨ Rediseño v2 — "Dev OS"

La página principal (`index.html` + `src/css/portfolio.css` + `src/js/portfolio.js`) fue rediseñada con un concepto creativo de "terminal de desarrollador", **conservando la identidad visual original**: paleta morada (`--accent-700: #7100c2`), glassmorphism, bordes animados cónicos (`animated-border.css`) y tipografía Nunito. 100% vanilla (cero frameworks, cero dependencias):

- **Terminal interactiva real** en el hero: escribe `help`, `whoami`, `cat stack.txt`, `pets` o `sudo hire-me`.
- **Pantalla de boot** estilo sistema operativo al cargar (solo la primera vez por sesión).
- **Fondo de partículas** en canvas que reacciona al mouse.
- **Cursor personalizado** con anillo magnético (solo desktop).
- **Efecto glitch** en el nombre, typewriter de roles y contadores animados.
- **Tarjetas con tilt 3D**, botones magnéticos y reveal-on-scroll con `IntersectionObserver`.
- **i18n ES/EN** sin recarga, con persistencia en `localStorage`.
- **Easter egg**: código Konami (↑↑↓↓←→←→BA) activa el modo fiesta 🎉.
- **Accesible**: respeta `prefers-reduced-motion` desactivando partículas y animaciones.

La galería de mascotas (`mascotas.html`) conserva la arquitectura original documentada abajo.

## Resumen del Proyecto

Este portafolio no es solo una carta de presentación, sino una demostración técnica de habilidades en **Frontend Development**. Implementa animaciones avanzadas, componentes personalizados y una gestión de datos dinámica.

### Arquitectura y Diseño

- **Metodología BEM**: El CSS sigue la convención *Block Element Modifier* para un código organizado y reutilizable.
- **Arquitectura Modular**: Los estilos y la lógica están fragmentados por secciones y funcionalidades, facilitando el mantenimiento.
- **Diseño Premium**:
    - **Glassmorphism**: Fondos traslúcidos con desenfoque (`backdrop-filter`).
    - **Bordes Animados**: Uso de `@property` y gradientes cónicos para crear bordes que brillan y rotan.
    - **Responsive Design**: Totalmente adaptado para móviles, tablets y escritorio.

## Características Técnicas

### 1. Sistema de Componentes (Dual Strategy)
Para demostrar diferentes enfoques de desarrollo, el proyecto utiliza dos métodos de renderizado:
- **Renderizado Imperativo**: La clase `PetCard.js` crea cada elemento del DOM manualmente usando `document.createElement`. Es ideal para entender el funcionamiento base del navegador.
- **Web Components (Declarativo)**: El elemento `<tech-card>` es un componente nativo (`customElements`) que utiliza plantillas y `innerHTML`. Es un enfoque más moderno y reutilizable.

### 2. Navegación Inteligente
- **Menu Hamburguesa (Sin JS)**: El menú móvil funciona mediante el "checkbox hack" en CSS, lo que garantiza funcionalidad incluso si el script falla.
- **Sticky Navbar**: Barra de navegación fija con efectos de cristal.

### 3. Modal de Contacto
- Ventana emergente integrada con validación básica y manejo de eventos por teclado (tecla `Esc`).

### 4. Notificaciones Dinámicas
- Sistema de **Toast** que saluda al usuario de forma personalizada según su hora local (mañana, tarde o noche).

### 5. Sistema de Internacionalización (i18n)
- Soporte para múltiples idiomas (Español/Inglés) sin recarga de página.
- Gestión de textos mediante archivos JSON externos.
- Persistencia de preferencia de idioma en el navegador.
### 6. Sistema de chatbot para mejorar comunicación con el usuario interesado

- Chatbot
---

## 🌍 Sistema de Traducciones
Para que el sitio sea traducible, se utiliza un servicio que mapea claves del HTML con un diccionario JSON.

### **Cómo usarlo**
Agrega el atributo `data` a cualquier elemento HTML con la clave correspondiente en `translations.json`:
```html
<h1 data="greeting">Hola, soy</h1>
```

### **Cómo agregar más idiomas**
1. Añade el nuevo idioma en `src/js/translations.json`.
2. Actualiza `toggleLanguage()` en `TranslationService.js` para soportar más de dos idiomas.

## Gestión de Mascotas (Galería Dinámica)

La sección de mascotas es totalmente dinámica. No necesitas editar el HTML para añadir o quitar mascotas.

### **¿Cómo actualizar la galería?**
Para añadir nuevas mascotas o cambiar la información actual, debes editar el archivo de datos:
**Ruta**: `src/js/data/PetData.json`

**Formato del JSON**:
```json
{
  "type": "perro",
  "name": "Nombre",
  "description": "Descripción de la mascota",
  "imgUrl": "ruta/a/la/imagen.webp",
  "alt": ""
}
```
*Si dejas el campo `alt` vacío, el sistema generará uno automáticamente combinando el nombre y el tipo.*

## 📁 Estructura de Carpetas

```
.
├── index.html
├── LICENSE
├── mascotas.html
├── public
│   ├── img
│   │   ├── ManuelVasquezPhoto.webp
│   │   ├── pets
│   │   │   ├── ares.webp
│   │   │   ├── camille.webp
│   │   │   ├── dante-dalila.webp
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
    ├── css
    │   ├── animated-border.css
    │   ├── big-card.css
    │   ├── buttons.css
    │   ├── footer.css
    │   ├── hero-section.css
    │   ├── lang-toggle.css
    │   ├── modal.css
    │   ├── navbar.css
    │   ├── pets.css
    │   ├── projects-section.css
    │   ├── services-section.css
    │   ├── style.css
    │   ├── style.min.css
    │   ├── technologies-section.css
    │   ├── toast.css
    │   └── whatsapp-button.css
    └── js
        ├── data
        │   └── PetData.json
        ├── petsScript.js
        ├── scripts.js
        ├── translations.json
        ├── services
        │   ├── ContactModal.js
        │   ├── GalleryManager.js
        │   ├── Toast.js
        │   └── TranslationService.js
        ├── types
        │   └── Pet.js
        └── ui
            ├── PetCard.js
            └── TechCard.js
```

## ⚙️ Ejecución y Despliegue

Este es un sitio **estático**, pero debido al uso de `fetch` para cargar el JSON, **debe ejecutarse en un entorno de servidor**.

1.  **Local**: Usa la extensión **Live Server** de VSCode.
2.  **Producción**: Se puede desplegar en GitHub Pages, Netlify o Vercel sin configuración adicional.

## 👨‍💻 Autor
**Manuel Vasquez**
- [LinkedIn](https://github.com/manulzweb)
- [WhatsApp](https://wa.me/573016778673)

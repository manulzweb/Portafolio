/* ═══════════════════════════════════════════════════════════════
   PROYECTOS DESTACADOS
   ─────────────────────────────────────────────────────────────
   Para añadir un proyecto, copia un bloque { ... } y edítalo.
   El orden de este array es el orden en pantalla.

   Campos:
   - file  : nombre de archivo que se muestra en la barra de la
             ventana de código (dale sabor: App.jsx, api.py…)
   - tags  : tecnologías, separadas por " • "
   - title : título en español (es) e inglés (en)
   - desc  : descripción corta en ambos idiomas (1-2 líneas)
   - image : (opcional) ruta a una captura del proyecto, p. ej.
             "public/img/projects/mi-app.webp". Si se omite, se
             dibuja la ventana de código animada.
   - links : botones inferiores; label corto + url.
             Deja [] si aún no hay enlaces.
   ═══════════════════════════════════════════════════════════════ */

export const PROJECTS = [
    {
        file: "portfolio.js",
        tags: "HTML • CSS • JavaScript",
        title: {
            es: "Portafolio personal",
            en: "Personal portfolio",
        },
        desc: {
            es: "Sitio estático de alto rendimiento con terminal interactiva, i18n sin recarga y animaciones hechas a mano. Sin frameworks.",
            en: "High-performance static site with an interactive terminal, reload-free i18n and hand-crafted animations. No frameworks.",
        },
        links: [
            { label: "code", url: "https://github.com/manulzweb/manulzweb.github.io" },
            { label: "live", url: "https://manulzweb.github.io/" },
        ],
    },
    {
        file: "TaskApp.jsx",
        tags: "React • LocalStorage",
        title: {
            es: "Aplicación de tareas",
            en: "Task app",
        },
        desc: {
            es: "Gestor de tareas en React para organizar el día a día de forma eficiente, con estado persistente y UI reactiva.",
            en: "React task manager to organize your day efficiently, with persistent state and a reactive UI.",
        },
        links: [{ label: "code", url: "https://github.com/manulzweb" }],
    },
    {
        file: "UserController.java",
        tags: "Java • Spring Boot • REST",
        title: {
            es: "API REST con Spring Boot",
            en: "REST API with Spring Boot",
        },
        desc: {
            es: "API RESTful para gestión de usuarios: backend sólido para aplicaciones web y móviles, con buenas prácticas y capas limpias.",
            en: "RESTful API for user management: a solid backend for web and mobile apps, with best practices and clean layers.",
        },
        links: [{ label: "code", url: "https://github.com/manulzweb" }],
    },
];

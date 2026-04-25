/**
 * TranslationService - Servicio para manejar traducciones del sitio
 */
import translations from '../translations.json' with { type: 'json' };

class TranslationService {
    constructor() {
        /** @type {string} Idioma seleccionado actualmente (obtenido de localStorage o por defecto 'es') */
        this.currentLang = localStorage.getItem('language') || 'es';

        /** @type {Object} Diccionario de traducciones importado desde el JSON */
        this.translations = translations;

        this.init();
    }

    /**
     * Inicializa el servicio aplicando las traducciones actuales y creando el botón de cambio de idioma.
     */
    init() {
        this.applyTranslations();
        this.createLanguageToggle();
    }

    createLanguageToggle() {
        // Crear el botón de toggle de idioma
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'lang-toggle';
        toggleBtn.className = 'lang-toggle';

        // Estructura interna: Icono de idioma y texto del idioma actual
        toggleBtn.innerHTML = `
            <span class="material-icons">language</span>
            <span class="lang-text">${this.currentLang.toUpperCase()}</span>
        `;
        toggleBtn.title = 'Cambiar idioma';

        // Agregamos el toggle botton al body
        document.body.appendChild(toggleBtn);


        // Agregamos el addevenlistener para "escuchar" cuando el usuario hace click y activamos la funcion toggleLanguage
        toggleBtn.addEventListener('click', () => this.toggleLanguage());
    }

    /**
     * Cambia el idioma actual entre las opciones disponibles (Español / Inglés).
     * Guarda la selección en localStorage para futuras visitas.
     */
    toggleLanguage() {
        //Ternario que evalua si hay un currentlang y si es del mismo valor y tipo de "es". en dado caso lo pone a "en", sino lo deja en "es". Esto solo sirve para cuando son dos idiomas.
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        //guardamos en el localstorage el string curretLang con el valor "language"
        localStorage.setItem('language', this.currentLang);

        // Actualizar la interfaz con los nuevos textos
        this.applyTranslations();
        this.updateToggleButton();
    }

    /**
     * Actualiza el texto visible dentro del botón de toggle para reflejar el idioma actual.
     */
    updateToggleButton() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            const langText = toggleBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLang.toUpperCase();
            }
        }
    }

    /**
     * Recorre el DOM y actualiza todos los elementos que posean el atributo 'data' 
     * con su traducción correspondiente. También actualiza metadatos del sitio.
     */
    applyTranslations() {
        const lang = this.currentLang;
        const translations = this.translations[lang];

        if (!translations) return;

        // 1. Actualizar elementos con atributo 'data' (buscando su clave en el JSON)
        document.querySelectorAll('[data]').forEach(element => {
            const key = element.getAttribute('data');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // 2. Actualizar el título de la pestaña del navegador
        document.title = lang === 'es'
            ? 'Manuel Vasquez | Desarrollador Full-Stack & UI/UX'
            : 'Manuel Vasquez | Full-Stack Developer & UI/UX';

        // 3. Actualizar la meta-descripción para SEO
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = lang === 'es'
                ? 'Portafolio de Manuel Vasquez, Desarrollador Full-Stack especializado en JS, Java Spring Boot y arquitecturas modernas.'
                : 'Manuel Vasquez\'s portfolio, Full-Stack Developer specialized in JS, Java Spring Boot and modern architectures.';
        }

        // 4. Actualizar el atributo lang global del documento HTML
        document.documentElement.lang = lang;
    }

}

export default TranslationService;

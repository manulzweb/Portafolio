/**
 * Web Component personalizado para mostrar una tarjeta de categoría tecnológica.
 * Utiliza un enfoque de renderizado DECLARATIVO mediante innerHTML y plantillas de texto.
 * 
 * @extends HTMLElement
 * 
 * Atributos soportados (vía data-attributes):
 * - data-title: El título de la categoría (ej: Frontend).
 * - data-icon: El nombre del icono de Material Icons.
 * - data-items: Lista de tecnologías separadas por comas.
 */
class TechCard extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Método del ciclo de vida de los Web Components que se ejecuta cuando 
     * el elemento se inserta en el DOM.
     */
    connectedCallback() {
        // Obtenemos los valores de los atributos o definimos valores por defecto
        const title = this.getAttribute('data-title') || 'Technology';
        const icon = this.getAttribute('data-icon');

        // Procesamos la cadena de items para convertirla en una lista de etiquetas <li>
        const items = (this.getAttribute('data-items') || '')
            .split(',')
            .map(item => `<li>${item.trim()}</li>`)
            .join('');

        this.innerHTML = `
        <article class="tech-card pointer">
            <h3 class="tech-card__title">${title}</h3>
            <div class="tech-card__content">
                <span class="material-icons tech-card__icon">${icon}</span>
                <ul class="tech-card__list">
                    ${items}
                </ul>
            </div>
        </article>`;
    }
}

// Registramos el nuevo elemento para que el navegador lo reconozca
customElements.define('tech-card', TechCard);
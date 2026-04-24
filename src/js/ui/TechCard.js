class TechCard extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        // El componente <tech-card> se renderiza directamente en el DOM.
        // Usa atributos data-* para recibir contenido desde el HTML padre.
        const title = this.getAttribute('data-title') || 'Technology';
        const icon = this.getAttribute('data-icon') || 'desktop_windows';
        const items = (this.getAttribute('data-items') || '').split(',').map(item => `<li>${item.trim()}</li>`).join('');

        this.innerHTML = `
        <article class="tech-card">
            <h3 class="tech-card__title">${title}</h3>
            <div class="tech-card__content">
                <span class="material-icons tech-card__icon">${icon}</span>
                <ul class="tech-card__list">
                    ${items}
                </ul>
            </div>
        </article>`
    }
}

customElements.define('tech-card', TechCard)
export class GreetingManager {
    /**
     * Component focus just on the greeting logic.
     * Dependency Inversion Principle (DIP): Receives external dependencies.
     */

    // constructor of the class
    constructor(btnElement, titleElement) {
        this.btnElement = btnElement;
        this.titleElement = titleElement;
        this.originalTitle = titleElement ? titleElement.textContent : '';

        this.init();
    }
    // method to initialize the greeting
    init() {
        if (!this.btnElement || !this.titleElement) return;

        this.btnElement.addEventListener('click', () => {
            this.toggleGreeting();
        });
    }
    // method to toggle the greeting
    toggleGreeting() {
        if (this.titleElement.textContent === this.originalTitle) {
            this.titleElement.textContent = '¡Mis Mascotas te saludan! 👋🐾';
            this.titleElement.style.color = 'var(--accent-300)';
            this.btnElement.textContent = 'Volver al Título Original';
        } else {
            this.titleElement.textContent = this.originalTitle;
            this.titleElement.style.color = 'var(--accent-700)';
            this.btnElement.textContent = 'Saludar';
        }
    }
}

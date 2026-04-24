/**
 * Clase encargada de gestionar la visibilidad de la galería de mascotas.
 * Controla las animaciones de apertura y cierre y actualiza el texto del botón.
 */
export class GalleryManager {
    /**
     * @param {HTMLElement} btnElement - El botón que dispara la acción de mostrar/ocultar.
     * @param {HTMLElement} galleryContainer - El contenedor que contiene los elementos de la galería.
     */
    constructor(btnElement, galleryContainer) {
        this.btnElement = btnElement;
        this.galleryContainer = galleryContainer;

        this.init();
    }

    /**
     * Configura el listener de eventos inicial.
     */
    init() {
        if (!this.btnElement || !this.galleryContainer) return;

        this.btnElement.addEventListener('click', () => {
            this.toggleVisibility();
        });
    }

    /**
     * Alterna entre mostrar y ocultar la galería basándose en su estado actual.
     */
    toggleVisibility() {
        const isHidden = this.galleryContainer.style.display === 'none';

        if (isHidden) {
            this.showGallery();
        } else {
            this.hideGallery();
        }
    }

    /**
     * Muestra la galería con una animación de entrada.
     */
    showGallery() {
        this.galleryContainer.style.display = 'grid';
        this.btnElement.textContent = 'Ocultar Galería';

        // Animación fluida de aparición (Fade In + Slide Up)
        this.galleryContainer.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 500, easing: 'ease-out' });
    }

    /**
     * Oculta la galería con una animación de salida.
     */
    hideGallery() {
        // Animación de desaparición (Fade Out + Slide Up)
        const animation = this.galleryContainer.animate([
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(-20px)' }
        ], { duration: 300, easing: 'ease-in' });

        // Esperamos a que la animación termine antes de cambiar el display a 'none'
        animation.onfinish = () => {
            this.galleryContainer.style.display = 'none';
            this.btnElement.textContent = 'Mostrar Galería';
        };
    }
}

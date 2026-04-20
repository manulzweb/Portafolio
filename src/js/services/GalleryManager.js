export class GalleryManager {
    /**
     * Component focus just on showing or hiding the gallery.
     * Single Responsibility Principle (SRP) and Dependency Inversion Principle (DIP).
     *
     * @param {HTMLElement} btnElement - DOM element to toggle the gallery.
     * @param {HTMLElement} galleryContainer - DOM container of the gallery.
     */
    // constructor of the class
    constructor(btnElement, galleryContainer) {
        this.btnElement = btnElement;
        this.galleryContainer = galleryContainer;

        this.init();
    }
    // method to initialize the gallery
    init() {
        if (!this.btnElement || !this.galleryContainer) return;

        this.btnElement.addEventListener('click', () => {
            this.toggleVisibility();
        });
    }
    // method to toggle the visibility of the gallery
    toggleVisibility() {
        const isHidden = this.galleryContainer.style.display === 'none';

        if (isHidden) {
            this.showGallery();
        } else {
            this.hideGallery();
        }
    }
    // method to show the gallery
    showGallery() {
        this.galleryContainer.style.display = 'grid';
        this.btnElement.textContent = 'Ocultar Galería';

        this.galleryContainer.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 500, easing: 'ease-out' });
    }
    // method to hide the gallery
    hideGallery() {
        const animation = this.galleryContainer.animate([
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(-20px)' }
        ], { duration: 300, easing: 'ease-in' });

        animation.onfinish = () => {
            this.galleryContainer.style.display = 'none';
            this.btnElement.textContent = 'Mostrar Galería';
        };
    }
}

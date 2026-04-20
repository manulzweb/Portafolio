import { GreetingManager } from './services/GreetingManager.js';
import { GalleryManager } from './services/GalleryManager.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Show welcome message
    const currentHour = new Date().getHours();
    const isMorning = currentHour < 12;
    console.log(`${isMorning ? 'Buenos días' : 'Buenas tardes'}, ¡Bienvenido/a a mi Portafolio Full-Stack Modular!`);

    const btnSaludoMascotas = document.getElementById('btn-saludo-mascotas');
    const titleMascotas = document.querySelector('.section-title');

    // if btnSaludoMascotas and titleMascotas exist we create an instance of GreetingManager and inject the DOM explicitly without coupling the logical classes to the abstract HTML.
    if (btnSaludoMascotas && titleMascotas) {
        new GreetingManager(btnSaludoMascotas, titleMascotas);
    }

    const btnToggleGallery = document.getElementById('btn-toggle-gallery');
    const galleryContainer = document.getElementById('mascotas-gallery');

    // if btnToggleGallery and galleryContainer exist we create an instance of GalleryManager and inject the DOM explicitly without coupling the logical classes to the abstract HTML.
    if (btnToggleGallery && galleryContainer) {
        new GalleryManager(btnToggleGallery, galleryContainer);
    }
});

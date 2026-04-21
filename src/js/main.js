import { GreetingManager } from './services/GreetingManager.js';
import { GalleryManager } from './services/GalleryManager.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Show welcome message

    const currentHour = new Date().getHours();

    let dayMoment;
    if (currentHour < 12) {
        dayMoment = 'Buenos días';
    } else if (currentHour < 18) {
        dayMoment = 'Buenas tardes'
    } else {
        dayMoment = 'Buenas noches'
    }

    const welcomeToast = document.createElement('div');
    welcomeToast.classList.add('toast-glass');
    document.body.appendChild(welcomeToast);

    welcomeToast.textContent = `${dayMoment}, ¡Bienvenido/a a mi portafolio!`;

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

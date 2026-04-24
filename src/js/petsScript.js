import { GalleryManager } from './services/GalleryManager.js';
import { PetCard } from './ui/PetCard.js';
import { Pet } from './model/Pet.js'
import { showToast } from './services/Toast.js';
import ContactModal from './services/ContactModal.js';

document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadPets();
    if (data && data.pets) {
        renderPets('.pets__grid', data.pets, PetCard)
    }
    // 1. Show welcome message
    showToast()
    
    // 2. Initialize contact modal
    new ContactModal();

    const btnToggleGallery = document.getElementById('btn-toggle-gallery');
    const galleryContainer = document.getElementById('pets-gallery');
    console.log(btnToggleGallery.textContent);
    console.log(galleryContainer.textContent);
    
    // if btnToggleGallery and galleryContainer exist we create an instance of GalleryManager and inject the DOM explicitly without coupling the logical classes to the abstract HTML.
    if (btnToggleGallery && galleryContainer) {
        new GalleryManager(btnToggleGallery, galleryContainer);
    }
});

function renderPets(selector, arr, to_render){
    // Toma un selector y un arreglo de datos, crea instancias de PetCard y los inyecta en el DOM.
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = '';
    arr.forEach(p => {
        const petCard = new to_render(new Pet(p));
        container.appendChild(petCard.render())
    });

}

async function loadPets() {
    try {
        const res = await fetch('src/js/data/PetData.json')
        const data = await res.json();
        return data
    } catch (error) {
        console.error('Error:'+error.message)
    }
}
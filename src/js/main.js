import { showToast } from './services/Toast.js';
import './ui/TechCard.js'; // Registra el custom element <tech-card> usado en index.html
import ContactModal from './services/ContactModal.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Show welcome message
    showToast();
    
    // 2. Initialize contact modal
    new ContactModal();
});
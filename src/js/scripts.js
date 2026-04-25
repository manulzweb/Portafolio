import { showToast } from './services/Toast.js';
import './ui/TechCard.js'; // Registra el custom element <tech-card> usado en index.html
import ContactModal from './services/ContactModal.js';
import TranslationService from './services/TranslationService.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mostrar mensaje de bienvenida personalizado según la hora
    showToast();

    // 2. Inicializar el gestor del modal de contacto
    new ContactModal();

    // 3. Initialize translation service
    new TranslationService();
});
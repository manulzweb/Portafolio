/**
 * main.js - Punto de entrada principal para el index.html.
 * Se encarga de coordinar la carga de servicios y componentes una vez que el DOM está listo.
 */
import { showToast } from './services/Toast.js';
import './ui/TechCard.js'; // Registro del Web Component <tech-card>
import ContactModal from './services/ContactModal.js';
import TranslationService from './services/TranslationService.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mostrar mensaje de bienvenida personalizado según la hora
    showToast();

    // 2. Inicializar el gestor del modal de contacto
    new ContactModal();

    // 3. Inicializar el servicio de traducciones (i18n)
    new TranslationService();
});
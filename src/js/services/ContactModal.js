/**
 * ContactModal - Servicio para gestionar el modal de contacto
 */
class ContactModal {
    constructor() {
        this.modal = document.getElementById('contact-modal');
        this.contactBtns = document.querySelectorAll('#contact-btn, #contact-btn-services');
        this.closeBtn = document.getElementById('modal-close');
        this.form = document.getElementById('contact-form');
        this.overlay = document.querySelector('.modal__overlay');
        
        this.init();
    }

    init() {
        // Agregar listeners a todos los botones de contacto
        this.contactBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        // Cerrar modal
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        // Prevenir cierre al hacer clic en el contenido
        this.modal.querySelector('.modal__content').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Enviar formulario
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Cerrar modal con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.form.reset();
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Aquí podrías enviar los datos a un servidor
        console.log('Datos del formulario:', formData);

        // Mostrar notificación de éxito
        alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
        
        // Cerrar modal
        this.close();
    }
}

export default ContactModal;

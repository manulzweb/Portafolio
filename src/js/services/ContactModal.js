class ContactModal {
    // Inicializa las referencias a los elementos del DOM necesarios para el modal.
    constructor() {
        this.modal = document.getElementById('contact-modal');
        // Botones que pueden abrir el modal
        this.contactBtns = document.querySelectorAll('#contact-btn, #contact-btn-services');
        this.closeBtn = document.getElementById('modal-close');
        this.form = document.getElementById('contact-form');
        this.overlay = document.querySelector('.modal__overlay');

        this.init();
    }

    /**
     * Configura todos los escuchadores de eventos click keydow y esc.
     */
    init() {
        // Eventos para abrir el modal desde diferentes botones
        this.contactBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        // Eventos para cerrar el modal
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        // Evita que el click dentro del contenido del modal lo cierre (propagación)
        this.modal.querySelector('.modal__content').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Manejo del envío del formulario
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Cerrar con la tecla Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    /**
     * Muestra el modal y deshabilita el scroll del cuerpo.
     */
    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Oculta el modal, habilita el scroll y resetea los campos del formulario.
     */
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.form.reset();
    }

    /**
     * Procesa los datos del formulario al enviarlo.
     * 
     * @param {Event} e - El evento de envío (submit).
     */
    handleSubmit(e) {
        e.preventDefault();

        // Recolección de datos del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Simulación de envío de datos
        console.log('Form data:', formData);

        alert('Thank you for your message! I will contact you soon.');

        this.close();
    }
}

export default ContactModal;

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
     * Configura todos los escuchadores de eventos (clicks, pulsaciones de teclas y envío de formulario).
     */
    init() {
        // Eventos para abrir el modal desde diferentes botones de la interfaz
        this.contactBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        // Eventos para cerrar el modal al hacer click en el botón de cerrar o en el fondo (overlay)
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        // Evita que el click dentro del contenido del modal cierre el mismo (frenar propagación)
        this.modal.querySelector('.modal__content').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Manejo del envío del formulario de contacto
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Cerrar el modal automáticamente al presionar la tecla Escape
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
     * Procesa los datos del formulario al enviarlo, los registra en consola 
     * y muestra una notificación de éxito al usuario.
     * 
     * @param {Event} e - El evento de envío (submit).
     */
    handleSubmit(e) {
        e.preventDefault();

        // Recolección de los datos ingresados por el usuario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Simulación de envío de datos (aquí se integraría un servicio de backend o email)
        console.log('Datos del formulario recibidos:', formData);

        alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');

        // Cerrar el modal tras el envío exitoso
        this.close();
    }
}

export default ContactModal;

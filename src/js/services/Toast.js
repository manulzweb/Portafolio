/**
 * Muestra un mensaje flotante (toast) de bienvenida personalizado 
 * según la hora del día del usuario.
 */
export function showToast() {
    // Obtenemos la hora local actual
    const currentHour = new Date().getHours();

    // Determinamos el saludo adecuado
    let dayMoment;
    if (currentHour < 12) {
        dayMoment = 'Good morning';
    } else if (currentHour < 19) {
        dayMoment = 'Good afternoon';
    } else {
        dayMoment = 'Good evening';
    }

    // Creamos dinámicamente el elemento del Toast
    const welcomeToast = document.createElement('div');
    welcomeToast.classList.add('toast-glass');
    document.body.appendChild(welcomeToast);

    // Asignamos el texto del mensaje
    welcomeToast.textContent = `${dayMoment}, Welcome to my portfolio!`;

    // El toast se oculta automáticamente mediante animaciones CSS
}
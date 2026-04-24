export function showToast(){
    const currentHour = new Date().getHours();

    let dayMoment;
    if (currentHour < 12) {
        dayMoment = 'Buenos días';
    } else if (currentHour < 19) {
        dayMoment = 'Buenas tardes'
    } else {
        dayMoment = 'Buenas noches'
    }

    const welcomeToast = document.createElement('div');
    welcomeToast.classList.add('toast-glass');
    document.body.appendChild(welcomeToast);

    welcomeToast.textContent = `${dayMoment}, ¡Bienvenido/a a mi portafolio!`;

}
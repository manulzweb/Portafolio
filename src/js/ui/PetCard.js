export class PetCard {
    /**
     * @param {Pet} pet - Objeto que contiene los datos de la mascota (nombre, descripción, imagen, etc.).
     */
    constructor(pet) {
        this.pet = pet;
    }

    // Renderizado imperativo: se crean los elementos uno por uno usando el DOM
    render() {
        // Creamos el contenedor principal de la tarjeta
        const card = document.createElement('article');
        card.classList.add('pet-card');
        card.classList.add('pointer');

        // Contenedor de la imagen
        const figure = document.createElement('figure');
        figure.classList.add('pet-card__fig');

        // Elemento de imagen con sus atributos
        const img = document.createElement('img');
        img.classList.add('pet-card__img');
        img.src = this.pet.img;
        img.alt = this.pet.alt;

        figure.appendChild(img);

        // Título de la tarjeta (Nombre de la mascota)
        const title = document.createElement("h3");
        title.classList.add('pet-card__title');
        title.textContent = `${this.pet.name}`;

        // Descripción de la mascota
        const description = document.createElement("p");
        description.classList.add('pet-card__desc');
        description.textContent = `${this.pet.description}`;

        // Contenedor para el texto de la tarjeta
        const info_container = document.createElement("div");
        info_container.classList.add('pet-card__body');
        info_container.appendChild(title);
        info_container.appendChild(description);

        // Ensamblamos la tarjeta completa
        card.appendChild(figure);
        card.appendChild(info_container);

        // Retornamos el nodo completo listo para ser insertado en el DOM
        return card;
    }
}
export class PetCard {
    constructor(pet) {
        this.pet = pet;
    }

    render() {
        const card = document.createElement('article');
        card.classList.add('pet-card');
        const figure = document.createElement('figure');
        figure.classList.add('pet-card__fig');

        const img = document.createElement('img');
        img.classList.add('pet-card__img');
        img.src = this.pet.img;
        img.alt = this.pet.alt
        figure.appendChild(img);
        card.appendChild(figure);
        
        const title = document.createElement("h3");
        title.classList.add('pet-card__title')
        title.textContent=`${this.pet.name}`

        const description = document.createElement("p");
        description.classList.add('pet-card__desc');
        description.textContent = `${this.pet.description}`

        const info_container = document.createElement("div");
        info_container.classList.add('pet-card__body')
        info_container.appendChild(title);
        info_container.appendChild(description);

        card.appendChild(figure);
        card.appendChild(info_container);
        return card;
    }

}
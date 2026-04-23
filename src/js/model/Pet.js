export class Pet {
    constructor({type, name, description, imgUrl, alt}){
        this.type = type;
        this.name = name;
        this.description = description;
        this.img = imgUrl;
        this.alt = alt  == "" ? `${this.name} the ${this.type}` : alt;
    }

    setType(type) {
        this.type = type;
    }

    setName(name){
        this.name = name;
    }

    setdDescription(description){
        this.description = description;
    }

    setImg(path){
        this.img = path;
    }

    setAlt(alt){
        this.img = alt;
    }

    getName(){
        return this.name;
    }
    
    getDescription(){
        return this.description;
    }

    getType() {
        return this.type;
    }

    getImg(){
        return this.img;
    }

    getAlt(){
        return this.alt;
    }

    getInfo(){
        return `Tipo: ${this.type}| Nombre: ${this.name} | Descripción: ${this.description}`;
    }
}
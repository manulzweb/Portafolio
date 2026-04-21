export class Pet {
    constructor(name, description, path){
        this.name = name;
        this.description = description;
        this.img = path;
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

    getName(){
        return this.name;
    }
    
    getDescription(){
        return this.description;
    }

    getImg(){
        return this.img;
    }

    getInfo(){
        return `Nombre: ${this.name} | Descripción: ${this.description}`;
    }
}
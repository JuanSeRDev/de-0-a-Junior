class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${color}`;
    }
}

let perro = new animal("perro", 5, "rojo");

document.write(perro.info);
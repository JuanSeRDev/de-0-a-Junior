document.write("<h1>Programacion orientada a objetos</h1>");

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${color}`;
    }
    verInfo(){
        document.write(this.info, '<br>');
    }
}

const perro = new animal("perro", 5, "rojo");
const gato = new animal("gato", 2, "gris");
const pajaro = new animal("perico", 1, "verde");

document.write("<h4>Resultado con sistema tradicional</h4>")
document.write(perro.info, '<br>'); 
document.write(gato.info, '<br>');
document.write(pajaro.info, '<br>');

//metodos son acciones que podemos hacer. ahora vamos a utilizar un metodo
//Los metodos se crean dentro de una clase (practicamente es una funcion pero dentro de una clase)

document.write("<h4>Resultado con metodo</h4>")
perro.verInfo();
gato.verInfo();
pajaro.verInfo();
document.write('<br> Como se esta utlizando el metodo <br><b>"verInfo(){document.write(this.info)}"</b><br> Al final solo debemos ejecutar la funcional y nos ahorramos mucho codigo a diferencia del ejemplo anterior que esta escrito de forma tradicional.')

//Una clase es una plantilla para crear objetos
//la clase crea el obejto
//constuctor que es una propiedad obligatoria
//los atributos son las particularidades que tiene nuestra clase y se ponen entre parentesis dentro del constuctor
//metodo son las coas que puedes hacer nuestro objeto
/*
Abstracion
Intentamos reducir la complejidad del objeto lo maximo posible
*/

//Ejemplo

class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info, "<br>");
    }
    //Herencia
    /*ladrar(){
        if (this.especie == "perro"){
            document.write("comosoy perro puedo ladrar: ¡Waw! <br>");
        }else{
            document.write("No puede ladrar ya que es un ", this.especie, "<br>");
        }
    }*/ //no es la mejor manera de hacer esto
}

//Herencia de verdad
class perro extends animal {
    constructor(especie, edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        if (this.especie == "perro"){
            document.write("comosoy perro puedo ladrar: ¡Waw! <br>");
        }else{
            document.write("No puede ladrar ya que es un ", this.especie, "<br>");
        }
    }
}


const Perro = new animal("perro", "5", "marron", "doberman");
const Gato = new animal("gato", "2", "negro");
const Pajaro = new animal("pajaro", "1", "verde") ;

Perro.verInfo();
//Perro.ladrar();
Gato.verInfo();
//Gato.ladrar();
Pajaro.verInfo();
//Pajaro.ladrar();
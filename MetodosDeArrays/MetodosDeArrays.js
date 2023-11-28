//! TRANSFORMADORES

/* let nombres =["pedro","maria","jorge"];

let resultado = nombres.pop();

document.write(resultado);*/

//* Elimina el ultimo elemento de un array y lo devuele

/* let nombres =["pedro","maria","jorge"];

let resultado = nombres.shift();

document.write(resultado);*/

//* Elimina el primer elemento de un array y lo devuele

/*let nombres =["pedro","maria","jorge"];
let resultado = nombres.push("Sebastian");

document.write(resultado);
document.write(nombres);*/

//* Agrega el ultimo elemento de un array y devuelve la cantidad que ahora tiene el array

/*let nombres =[1,2,3,4,5];
let resultado = nombres.reverse();

document.write(resultado);*/

//* nos devuelve el array alrevez

/*let numeros =[1,2,3,4,5];
let resultado = numeros.unshift(1,3);

document.write(numeros);*/

//* Agrega uno o mas elemento al inicio del array y devuelva la nueva longitud del array

/*let numeros =[1,5,2,4,7,3,6];
let resultado = numeros.sort();

document.write(resultado);*/

//* Ordena los elementos de un array localmente y devuelve el arreglo ordenado

/*let numeros =["abecedario", "manzana", "pedro", "dedo", "bobo"];
let resultado = numeros.splice(1,3, "roberto", "gustavo", "maximo");
document.write(numeros);*/

//* desde la poscion 1 a la posicion 3 estan eliminados y reemplazados por los siguientes
//* cambia el contenido de un array elimiando elementos existentes y/o agregando nuevos elementos

//! ACCESORES

/*let numeros =["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(numeros + "<br>");
let resultado = numeros.join("<br> Elemento: ")
document.write("Elemento: " + resultado);*/

//* se convirtio en una cadena de texto - En todos los elementos de una matriz (u objeto similar) convierte en una cadena de texto y la devuelve

/*let numeros =["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(numeros + "<br>");
let resultado = numeros.slice(0,4)
document.write(resultado);*/

//* Devuelve una parte del array dentro de un nuevo array empezando por incio hasta fin (fin no incluido)

//! DE REPETICION

/*let numeros =["abecedario", "manzana", "pedro", "dedo", "bobo"];
numeros.filter(numero => document.write(numero + "<br>"));*/

let numeros =["abecedario", "manzana", "pedro", "dedo", "bobo"];
resultado = numeros.filter(numero => numero.length > 4);
document.write(resultado);

//* Crea un nuevo array con todos los elementos que cumplen la condicion


/*let numeros =["abecedario", "manzana", "pedro", "dedo", "bobo"]; 
numeros.forEach(numero => document.write(numero + "<br>"));

//* Ejecuta la funcion inidicada una vez por cada elemento del array*/
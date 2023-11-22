// frutas = ["banana ","manzana ","pera "];
// document.write(frutas[0]);

// let pc1 = {
//     nombre: "JuanPC",
//     procesador: "Intel Core I7",
//     ram: "16GB",
//     espacio: "1TB",
// } 

// pc2 = ["juanPC", "Intel Core I7", "16GB", "1TB"];

// // document.write(pc1["ram"]);

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

// frase = `El nombre de mi pc es: <b>${nombre}</b> <br>
//          el procesador es: <b>${procesador}</b> <br>
//          la memoria ram es: <b>${ram}</b> <br>
//          el espacio en disco es de <b>${espacio}</b>`;

// document.write(frase);

// numeroParaSumar = 0;

// if (numeroParaSumar < 10) {document.write("es menor que 10")}

// numero = 0;

// while (numero < 10) {
//     numero++;
// document.write(numero + "<br>")
// }

// let numero = 0;

// do {
//     document.write(numero + "<br>");
//     numero++;
// }
// while (numero <= 6)

// let numero = 0;

// while(numero < 1000) {
//     numero++;
//     document.write(numero);
//     if (numero == 10){
//         break;
//     }
// }
// document.write("fin")

// for (let i = 0; i < 6; i++) {
//     document.write(i + "<br>")
// }

// let i = 6;
// for (i; i >= 0; i--) {
//     document.write(i + "<br>")
// }
// document.write(i);

// for (let i = 0; i < 20; i++) {
//     if (i == 12) {
//         continue;
//     }
//     document.write(i + "<br>");
    
// }

// let animales = ["gato","perro","tirenosaurio rex"];

// for (animal in animales) {
//     document.write([animal] + "<br>");
// }

// document.write("<br>")

// for (animal of animales) {
//     document.write(animal + "<br>");
// }


// array1 = ["maria","josefa","roberta"];
// array2 = ["pedro","marcerlo", array1, "josefina"];
// forJuan:
// for (array in array2) {
//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>");
//             break forJuan;
//         }
//     } else {
//         document.write(array2[array] + "<br>");
//     }
// }

// function saludar () {
//     respuesta = prompt("¡Hola Juan! ¿Como fue tu dia?");
// if (respuesta == "bien") {
//     alert("me alegro")
// } else {
//     alert("una pena")
// }
// }
// saludar()
// saludar()

// function saludar () {
//     alert("hola");
//     return "la funcion se ejecuto correctamente"
// }

// let saludo = saludar()

// document.write(saludo);

// EJEMPLO DE FUNCION CON PAREMETROS



// function suma(num1,num2){
//     let res = num1 + num2;
//     document.write(res);
//     document.write("<br>");
// }

// suma(12,32)
// suma(10,5)
// suma(91,20)

// function suma(num1,num2) {
//     let res = num1 + num2;
//     return res
// }

// let resultado = suma(20,25)
// document.write(resultado)

// function saludar(nombre) {
//     let frase = `hola ${nombre}! ¿como estas?`;
//     document.write(frase);
// }

// saludar("petrosky")

// const saludar = function(nombre){
//     let frase = `hola ${nombre}! ¿como estas?`;
//     document.write(frase);
// }

// saludar("pedro")

// const saludar = nombre=> {
//     let frase = `¡Hola ${nombre}! ¿como estas?`;
//     document.write(frase);
// }

// saludar("Juan")

// const saludar = (nombre)=> {
//     document.write("hola como estas? " + nombre);
// }

// saludar("juan")


// PARAMETROS

// esto es una declaracion de variales normal
let num1 =32;
let num2 = 12;
let numero1 = 30;
let numero2 = 45;

let res = num1 + num2;
document.write('Este resultado es creado con una variable nomral; ');
document.write(res, '<br>');

function suma(){
    let res = numero1 + numero2;
    document.write(res);
}
document.write("Este resultado es creado con una funcion: "); 
suma();
document.write('<br>');

//AQUI VAMOS A UTILIZAR PARAMETROS

function sumar(num1,num2) {
    let res = num1 + num2;
    document.write(res);
    document.write('<br>');
}
document.write('Este resultado es creado con una fucnion con parametros: ');
sumar(12,45);

/*
1. Los parametros estan definidos dentro del parentesis del nombre de la funcion
2. Function sumar "(num1,num2)". Num1 y Num2 son los parametros de la funcion
3. Especificamos que se escriba el resultado y un salto de linea
4. llamamos a la funcion nombrando la funcion y determiando los parametros internos dentro de los parentesis
5. suma(12,45). asi esta parametrizada la funcion.
*/

function suma1(num1,num2) {
    let res = num1 + num2;
    return res;
}
document.write('Este resultado es creado con una fucnion con parametros y RETURN: ');
let resutlado = suma1(12,25);
document.write(resutlado);
document.write('<br><br>');



function saludar(nombre) {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}
saludar("Sebastian");
document.write('<br><br>');

document.write('<i>La funcion se llama "saludar" y el parametro en "nombre",<br> Dentro de la funcion tengo una variable que se llama "frase" la cual contiene la frase con el parametro escrito ${nombre} <br> luego tengo un "document.write("frase")"; para que se muestre la frase <br> por ultimo cierro la funcion y escribo el nombre de la variable que es "saludar("Sebastian")" donde el nombre "Sebastian" es el parametro "nombre"</i>')

document.write('<br><br>');

const saludo = nombre=> {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}
saludo('Carlos')

//Function se convierte en => y se pone despues del parametro de todas maneras hay que declarar la variable
// let saludo = ()=> {} "saludo" viene siendo la variable que a su vez es el nombre de la funcion
//Si solamente se utiliza un parametro no es necesario ponerle perentesis
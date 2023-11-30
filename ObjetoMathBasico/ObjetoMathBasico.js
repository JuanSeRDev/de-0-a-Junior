//* Raiz cuadrada sqrt
let num1 = Math.sqrt(25); 
document.write(num1, '<br>');

//* Raiz cubica cbrt
let num2 = Math.cbrt(27); 
document.write(num2, '<br>');

//* devuelve el numreo mayor de cero o mas numeros (maximo)
let num3 = Math.max(27, 100, 12, 15, 243, 90, 100); 
document.write(num3, '<br>');

//* devuelve el numreo menor de cero o mas numeros (minimo)
let num4 = Math.min(27, 100, 12, 15, 243, 90, 100); 
document.write(num4, '<br>');

//* devuelve un numero pseudo-aleatorio entre 0 y 1
let num5 = Math.random(); 
document.write(num5, '<br>');

//* Devuelve un numero redondeado al numero entero mas cercano
let num6 = Math.random()*100; //aqui me da un numero aleatorio entre 0 y 100 con decimales
num6 = Math.round(num6); //! redondeado y quito los numero decimales
document.write(num6, '<br>');

//* Devuelveel mayor entero menor que o igual a un numero
let num7 = Math.random()*99; //aqui me da un numero aleatorio entre 0 y 100 con decimales
num7 = Math.floor(num7 +1); //! redondeado y quito los numero decimales
document.write(num7, '<br>');
// logramso un numero en 0 y 100 donde no aparece ni el 0 ni el 100

//* Elimina los decimales y queda el numero entero
let num8 = Math.trunc(9,9);
document.write(num8, '<br>');

//! PROPIEDADES

let num9 = Math.PI; //Pi
document.write(num9, '<br>');

let num10 = Math.SQRT1_2; //Raiz cuadrada de 1/2 
document.write(num10, '<br>');

let num11 = Math.SQRT2; //Raiz cuadrada de 2
document.write(num11, '<br>');

//* E = Constante de Euler, la base de los logaritmos naturales
let num12 = Math.E; 
document.write(num12, '<br>');

//* LN2 = logaritmo natural de 2
let num13 = Math.LN2; 
document.write(num13, '<br>');

//* LN10 = logaritmo natural de 10
let num14 = Math.LN10; 
document.write(num14, '<br>');

//* LOGG2E = logaritmo de E con base 2
let num15 = Math.LOG2E; 
document.write(num15, '<br>');

//* LOGG10E = logaritmo de E con base 10
let num16 = Math.LOG10E; 
document.write(num16, '<br>');
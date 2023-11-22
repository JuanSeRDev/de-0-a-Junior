//como numero es menor que 10 se genera un bucle infinito preo entre corchetes {especificamos que cuando se ejecute cada bucle aumente en 1 el valor de la variables "numero" con "nomero++"} y por ultimo lo mostramos en pantalla.
let numero = 0;

while (numero < 10){
    numero++;
    document.write(numero, "<br>");
};
document.write("<br><br>");

document.write('<h1> While con Break</h1>')
let numero1 = 0;

while (numero1 < 10){
        numero1++;
    document.write(numero1, "<br>");
    if (numero1 == 6){ //se aplica una condicion
        break; //y se ejecuta break para detener el programa en un punto determiando como aqui en el numero "6"
    }
};
document.write('Fin del bucle con la utilizacion de "break" en el numero 6. <br><br>');



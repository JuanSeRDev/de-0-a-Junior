Las variables pueden ser declaradas de la siguiente manera
var, let, const

var = aplica la variable para todo el codigo
let = aplica la variable especificamente dentro de la condicional
const = esta variable siempre va significar lo mismo, es para dejar variables fijas.
<!-- las variables constantes no pueden cambiar su valor como por ejemplo "Pi = 3,1416" -->
Const debe ser declarada e inicializada

EJEMPLO

var variable = 19
let variable = 19
const variable = Hola 

para declar una variable simplemente colocamos la declarcion antes de la variable por ejemplo:

## let nombre = "pedro"
## var nombre = "pedro"
## const nombre = "pedro"

valores
1. Undefined = indica que la variable no esta definida
## ejemplo 
let nombre;

2 NaN = not a number = nos indica que debemos hacer una operacion con un numero

3. Null = Nos dice que la variable esta vacia pero esto es intencional

## EJEMPLO

Let numero = null;

# DECLARACION DE VARIAS VARIALES

DECLARACION DE VARIAS VARIABLES

## EJEMPLO

let numero, numero1, numero2;

numero = 2;
numero1 = 9;
numero2 = 13;

otra opcion es declararlas de forma individual 
<!-- para mi seria lo mejor -->

let numero = 2;
let numero1 = 9;
let numero2 =13;

siempre separadas por ";" (punto y coma)

prompt() = es una funcion lo que esta entre parentesis es el parametro de la funcion "("Dime tu nombre")"

<!-- EJEMPLO DE PROMT -->

let nombre = prompt("dime tu nombre")

alert("hola " + nombre)

Aqui se hace un pregunta con el prompt para que se almacene en la variable "nombre", el resultado de esto es que cuando el usuario responda la pregunta, la respuesta va quedar almacenada en la variable "nombre"

 ## OPERADORES
 
 ### OPERADORES ARITMETICOS

 suma
 sustracion
 division
 exponenciacion

 let numero = 10;
 numero += 5;

 document.write(numero)

 <!-- ALERT FUNCIONA COMO UN AVISO EN PANTALLA Y DOCUMENT.WRITE ESCRIBE EN EL DOCUMENTO -->

## concantenacion

saludo = "¡Hola pedro! "
pregunta = "¿Como estas?"

frase = saludo + pregunta

document.write(frase)

para concatenar hay que incluir distintas variables, es como encanedar las variables para obtener un resultado

.concat(<!--es para los string-->) este es un metodo para las cadenas

<!-- EJEMPLO -->
numero1 = "53";
numero2 = "8";

frase = numero1.concat(numero2)

document.write(frase)

## OTRA MANERA DE CONCATENAR ES USANDO "${}"

nombre = "juan rodriguez  ";
frase = `soy ${nombre} y estoy caminando`;

document.write(frase)

<!-- RESULTADO -->

soy juan rodriguez y estoy caminando


## OPERADORES LOGICOS

let valor = true;
let valor2 = true;

// let resultado = true;

resultado = valor && valor2; <!-- "AND" SOLO ACEPTA VALORES BOLEANOS -->
resultado2 = valor || valor2; <!-- "OR"  -->
resultado3 = !valor2; <!-- "distinto"  -->

document.write(resultado)  <!--true-->
document.write(resultado2)  <!--true-->
document.write(resultado3)  <!--false-->

## OPERADORES DE COMPARACION

true o talse

si la relacion es verdadera es "true"
si la relacion es falsa es "false"

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

<!-- OPERACION -->

<!-- op = (true || true) && (false && true)
op = true && false
op = false -->


document.write(op) <!-- RESULTADO --> false

<!-- EJEMPLO -->

let numero = 23;
let numero2 = 13;

document.write(numero == 23)

<!-- RESULTADO --> true

let numero = 23;
let numero2 = 13;

document.write(numero != numero2)

<!-- RESULTADO --> true

let numero = 23;
let numero2 = 13;
let texto = "texto 1";
let texto2 = "texto 2";

document.write(numero == numero2)

<!-- RESULTADO --> false

let numero = 23;
let numero2 = 13;
let texto = "texto 1";
let texto2 = "texto 2";

document.write(texto === numero2) <!-- con 3 === verifica que sea extrictamente igual-->

<!-- RESULTADO --> false

## camel case

la primera letra va con minuscula y las primeras letras de las siguientes palabras va con mayuscula

<!-- EJEMPLO -->
parseInt()
Document.getElementById()

## CONDICIONALES

un condicional hace que un bloque se ejecute si una condicion se cumple

{ alert("hola");   document.write("pedro")} <!-- ESTO ES UN BLOQUE -->

# if = si la condicion se cumple se ejecuta el bloque

if (true) {alert("hola")}

<!-- EJEMPLO -->
la condicion es "if" que dice que si es "true - verdadero" se ejecuta el bloque que es el esta encerrado en "{}", si la condicion es "false - falso" no se ejecuta el bloque.

if (10<15) {alert("hola")} <!-- se ejecuta el bloque -->
if (10>15) {alert("hola")} <!-- no se ejecuta el bloque porque da false -->

nombre = "Juan Rodriguez"
if (nombre == "Juan Rodriguez") {alert("hola")} <!-- se ejecuta el bloque -->
nombre = "Juan Rodriguez"
if (nombre == "Juan") {alert("hola")} <!-- no se ejecuta el bloque porque da false -->

# else if = si lo anterior no se cumple vemos otra condicion, ademas que se peude ejecuta las veces que se quiera

nombre = "Juan Rodriguez"
if (nombre == "Juan") {alert("tu nombre es" + nombre)};

else if (nombre = "Rodriguez") {alert("tu nombre es" + nombre)}

<!-- AQUI NO SE EJECUTA NINGUNA DEBIDO A LA VARIABLE NOMBRE -->

nombre = "Juan"
if (nombre == "Juan") {alert("tu nombre es" + nombre)};

else if (nombre = "Rodriguez") {alert("tu nombre es" + nombre)}

<!-- AQUI SE EJECUTA IF -->

nombre = "Rodriguez"
if (nombre == "Juan") {alert("tu nombre es" + nombre)};

else if (nombre == "Rodriguez") {alert("tu nombre es" + nombre)}

<!-- AQUI SE EJECUTA ELSE IF -->

nombre = "carlos"
if (nombre == "Juan") {alert("tu nombre es " + nombre)}

else if (nombre == "Rodriguez") {alert("tu nombre es " + nombre)}

else {alert("tu nombre es otro")} 

# else se ejecutando cuando ninguna de las condiciones se da
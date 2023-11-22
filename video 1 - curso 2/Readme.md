# Arrays
es como si fuera un recipiente con un contenido dentro del recipiente y lo que esta adentro del array esta dentro de un bloque se expresa dentro de "[]"

en vez de ser un recipiente que contiene un unico elemento como si lo tienen las variables, es un recipiente que puede almacenar varios elementos.

<!-- por ejemplo: -->

frutas = ["banana ","manzana ","pera "];
document.write(ftutas);

esto como resultado muestra todo lo que contiene el array, si en el caso queremos mostrar uno de los contenidos que contiene un array en especifico lo debemos escribir de la siguiente manera.

<!-- por ejemplo: -->

frutas = ["banana ","manzana ","pera "];
document.write(frutas[0]);

teniendo en cuenta que en contenido de array se enumero comenzando desde el numero "0". Esto sucede porque estamos llamando al elemento con la posicion y no con el elemento

<!-- por ejemplo: -->

banana es el elemento 1 que esta en la posicion 0.
por esta razon se especifica basandonos en la pocision.

# Arrays asociativos

ESTAS DOS OPCIONES DESCRIBEN LO MISMO

let pc1 = {
    nombre: "JuanPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
} 

pc2 = ["juanPC", "Intel Core I7", "16GB", "1TB"];
document.write(pc2);

<!-- EJEMPLO -->

En el ejemplo anteiror en pc2 escribe el texto tal pero dandole a pc1 muestra [objet Object]

<!-- EJEMPLO 2 -->

let pc1 = {
    nombre: "JuanPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
} 

pc2 = ["juanPC", "Intel Core I7", "16GB", "1TB"];

document.write(pc2[0]);

Como resultado muestra el elemento 1 que esta en la posicion 0 = JuanPC

––––––––––––––––––––––––––––––––––––––––––

para el caso del pc1 los vamos a especificar por nombres

<!-- EJEMPLO -->

// frutas = ["banana ","manzana ","pera "];
// document.write(frutas[0]);

let pc1 = {
    nombre: "JuanPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
} 

pc2 = ["juanPC", "Intel Core I7", "16GB", "1TB"];

document.write(pc1["nombre"]);

de esta manera optenemos como resultado el contenido almacenado en la variable "[nombre"] dentro de (pc1)

de esta forma es mucho mas intuitivo y facilita mucho el trabajo ya que es mas facil leer el codigo.

aqui un ejemplo distinto un poco mas enredado

<!-- EJEMPLO -->

let pc1 = {
    nombre: "JuanPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
} 

pc2 = ["juanPC", "Intel Core I7", "16GB", "1TB"];

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `El nombre de mi pc es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de <b>${espacio}</b>`;

document.write(frase);

<!-- ESTO ES LO QUE MUESTRA EN PANTALLA -->

El nombre de mi pc es: JuanPC
el procesador es: Intel Core I7
la memoria ram es: 16GB
el espacio en disco es de 1TB

––––––––––––––––––––––––––––––––––––––––

# BUCLES E ITERACION

## DEFINICION Y USO

### SENTENCIA WHILE

- es casi igual que un "if" solamente que se repite contantemente, o sea que por ejemplo si se cumple dicha condicion, se muestra en pantalla y vuelve y la repite.

<!-- EJEMPLO -->

if = 2>1 = verdadero = y contunua con su pagina
while = 2>1 verdadero = se repite como si fuera un bucle

hasta que la condicion no sea falsa no continua con el flujo normal del programa

<!-- EJEMPLO CON IF -->

numero = 0;

if (numero < 10) {
    numero++;
    numero++;
    numero++;
document.write(numero)
}

<!-- EJEMPLO CON WHILE -->

numero = 0;

while (numero < 10) {
    numero++;
document.write(numero)
}

Aqui debido al "numero++" se van sumando de 1 en 1 cada vez que se repite el bucle y cuando numero deje ser menor a 10 deja de repetir el bucle y por esta razon se muestra en pantalla numeros del 1 al 10.

### SENTENCIA DO WHILE

primero se ejecuta el codigo y despues pregunta

let numero = 0;

do {
    document.write(numero + "<br>");
    numero++;
}
while (numero <= 6)

### SENTENCIA FOR

se compone por 3 partes
1. Declaramos e inicializamos las variables
2. Condicionamos las variables
3. Iteramos las variables (hacer lo mismo varias veces)

<!-- EJEMPLO -->

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>")
}

SE MUESTRA EN PANTALLA
0
1
2
3
4
5

Declaramos la variable "i" con un valor = 0

"i < 6" lo condicionamos especificando que este codigo se va a ejecutar mientras "i" sea menor que "6"

i++ la variable en cada iteracion en cada vuelta que de el bucle aumente

<!-- EJEMPLO 2 -->

let i = 6;
for (i; i >= 0; i--) {
    document.write(i + "<br>")
}
document.write(i);

Aqui se especifica el valor de la variable fuera del bloque {}, esto es otra opcion para utilizar "for"

### SENTENCIA CONTINUE

con la sentencia continue salta la orden condicionada

<!-- EJEMPLO -->

for (let i = 0; i < 20; i++) {
    if (i == 12) {
        continue;
    }
    document.write(i + "<br>");   
}

RESULTADO

1
2
3
4
5
6
7
8
9
10
11
13
14
15
16
17
18
19

### SENTENCIA FOR IN

este se utiliza para conconer la posicion del Array

### SENTENCIA FOR OF

este se utiliza para mostrar el valor de los elementos del Array

<!-- EJEMPLO PARA FOR IN Y FOR OF -->

let animales = ["gato","perro","tirenosaurio rex"];

for (animal in animales) {
    document.write([animal] + "<br>");
}

document.write("<br>")

for (animal of animales) {
    document.write(animal + "<br>");
}

RESULTADO

0
1
2

gato
perro
tirenosaurio rex

––––––––––––––––––––––––––––––––––––––––

### SENTENCIA BREAK

Detiene el bucle bajo una condicion especifica 

<!-- EJEMPLO -->
let numero = 0;
while(numero < 1000) {
    numero++;
    document.write(numero);
    if (numero == 10){
        break;
    }
}
document.write("fin")

esto me da como resultado = 12345678910fin

aqui se dice que la variable numero "0" se sume hasta que sea mayor que 1000 pero tiene una condicion que si (if) la variable numero es igual a 10 se detiene.

si no estuviera la condicion "if" la palabra fin se muestra al final en el numero 1000

### SENTENCIA LABEL

nos permite asociar un bucle a un nombre

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcerlo", array1];
for (array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>")
        }
    } else {
        document.write(array2[array] + "<br>")
    }
}

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcerlo", array1, "josefina"];
for (array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>");
            break;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcerlo", array1, "josefina"];
for (array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>");
            continue;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

# funciones

las funciones son nombres que se le asigan a un codigo en especifico, dentro de la funcion esta asignado el codigo y para repetirlo la intencion no es volver a escribir el codigo si no llamar al codigo.

<!-- EJEMPLO  -->

function saludar () {
    respuesta = prompt("¡Hola Juan! ¿Como fue tu dia?");
if (respuesta == "bien") {
    alert("me alegro")
} else {
    alert("una pena")
}
}

aqui esta declarada la funcion pero no esta ejectada, para ejecutarla debo llamar a la funcion.

<!-- EJEMPLO 2 -->

function saludar () {
    respuesta = prompt("¡Hola Juan! ¿Como fue tu dia?");
if (respuesta == "bien") {
    alert("me alegro")
} else {
    alert("una pena")
}
}

saludar()
saludar()

en este caso esta delcara la funcion y ejecutada 2 veces debido a que la fucion tiene de nombre "saludar ()" solamente llamando a la funcion se ejecuta el codigo del bloque dentro de la funcion.

tambien se puede asignar una funcion en una variable

# return

return tiene como valor lo que se retorna de la funcion. Esto quiere decir que cuando la funcion cumpla un objetivo se ordena que haga algo con el resultado del codigo dentro de la fucion.

<!-- EJEMPLO -->

function saludar () {
    alert("hola");
    return "la funcion se ejecuto correctamente"
}

let saludo = saludar()

document.write(saludo)

<!-- resutaldo -->

aqui prinero muestra un "alert" que dice "hola" y despues escribe en pantalla la variable "saludo" que tiene guardada la funcion "saludar()"

El retrun finaliza la funcion, si existe algo de codigo despues de un return no se accionara porque no lo ejecuta.

# PARAMETROS

<!-- EJEMPLO DE FUNCION CON PAREMETROS -->

function suma(){
    let num1 = 32;
    let num2 =12;
    let res = num1 + num2;
    document.write(res);
}

suma()

este codigo aunque esta bien escrito no tiene parametros ya que no estamos deficinedo acciones dentro del codigo de la funcion.

<!-- EJEMPLO -->

function suma(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(12,32)
suma(10,5)
suma(91,20)

En este ejemplo lo que hacemos es colocar un parametro dentro de la funcion de nombre "suma()" asignando variables internas por ejemplo "suma(num1,num2)" definiendo que "num1" va a ser el primer valor dentro de los parentensis de la funcion suma u el segundo valor va a ser la variable "num2" y de esta manera se ejecuta el codigo del bloque dentro de la variables con valores diferentes ofreciendo distintos resultados ya que podemos parametrizar las varibles dentro de la funcion.

De esta manera las variables declaradas quedan especificamente funcionando para dicha funcion.

<!-- EJEMPLO -->

function saludar(nombre) {
    let frase = `hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("petrosky")

const saludar = nombre=> {
    let frase = `¡Hola ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("Juan")

en ves de escribir funcion(nombre) podemos poner "nombre" con la flecha adealnte "=>" ya que solo tiene un parentesis y ademas se puede simplicar todavia mas.

<!-- EJEMPLO -->

const saludar = (nombre)=> {
    document.write("hola como estas? " + nombre);
}

saludar("juan")
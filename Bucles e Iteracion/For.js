//For es igual que while pero la diferencia e que es un bucle determinado
/*For se compone de 3 partes.
1. Declaramos e inicialización
2. Inicializamos
3. Iteramos = hacer lo mismo varias veces */

document.write("<h4>For incremento</h4>");

for (let i = 0; i < 6; i++){ 
    document.write(i + '<br>');
}

/*
- "for (let i = 0;....)" aqui se declara la variable "i" con un valor de "0"
- for (let i = 0; i < 6;...) aqui ponemos la condicion, o sea que este bucle se va a iniciar mientras que i sea menor que 6
- for (let i = 0; i < 6; i++){ aqui aplicamos el "incremento o el decremento" cnon i++

- entonces esto quiere decir que como i vale 0 y es menor que 6 a i se le va sumar 1 y vuelve a repetir la accion hasta que i valga 6
- con el "document.write(i + '<br>')" muestra como se repite la funcion hasta que i vale 6 por ende en pantalla solo muestra hasta el numero 5.

- si cambio i < 6 por i <= 6:

for (let i = 0; i <= 6; i++){ 
    document.write(i + '<br>');
}

me va a mostrar en patalla hasta el numero 6
*/
document.write("<h4>For decremento</h4>");

for (let i = 6; i > 0; i--){ 
    document.write(i + '<br>');
}

// es lo mismo que el ejemplo anterior pero en decremento.

document.write("<h2>Este es un ejemplo</h2>");
document.write("<h4>Break</h4>");

for (let i = 0; i < 20; i++){ 
        if (i == 10){
        break; //este lo puse para practicar
    }
    document.write(i + '<br>');
}

document.write('<br>Aqui puse un "break" con la condicion if. <br> Cuando el "i == 10" hace el "break" y detiene el bucle <br><br>');
document.write("<h4>Contine</h4>");

for (let i = 0; i < 20; i++){ 
    if (i == 10){
        continue; //este lo puse para practicar
    }
    if(i == 16){
        break;
    }
    document.write(i + '<br>');
}
document.write('<br>Aqui ponemos "contine" en vez de "break" y lo que hace es que salta el valor en el pundo delcarado en la condicion "if" que es "if = 10" y continua sumando y ademas como modo de prueba añadi otro "if" para que cumpla las dos condiciones (los dos if) y en la segunda condision hga un "break".<br><br>');

document.write("<h1>For In</h1>");

let animales = ["gato", "perro", "perico"]

for (animal in animales){ //lo que hace in es devolvernos la posicion del array
    document.write(animal, '<br>');
}
document.write('<br>lo que hace "For in" es devolvernos la posicion del array');
document.write("<h1>For of</h1>");

for (animal of animales){ //lo que hace el of es mostrar el contenido de la posicion
    document.write(animal, '<br>');
}
document.write('<br>lo que hace el"For of" es mostrar el valor de la posicion del array');

document.write("<h2>Este es un ejemplo distinto a los anterioes</h2>");

document.write(animales[0], '<br>');
document.write(animales[1], '<br>');
document.write(animales[2], '<br><br>');

//aqui lo mostre como se muestra normalmente un array
document.write('Aqui se ve el contido de cada posision del "Aarray animales" de forma manual<br>')
//creamos un array con nombre asocioado a un contenido a diferencia de un array comun que es posicion "0 = tal"

let pc = {
    nombre: "JuanSePc",
    procesador: "intel core I7",
    ram: "16bg",
    espacio: "1TB",
};

document.write(pc["nombre"], "<br>"); //aqui ponemos el array "pc" dentro "[]" el nombre de la asociacion en este caso "nombre"
document.write(pc["procesador"], "<br>");
document.write(pc["ram"], "<br>");
document.write(pc["espacio"], "<br><br>");

//–––––––––––––––––––––––––––––––––––

//En este campo asigne variales a campos de array asociativa "pc"
nombre = pc["nombre"];
procesador = pc["procesador"]
ram = pc["ram"]
espacio = pc["espacio"]

frase = `El nombre de mi PC es: <b>${nombre}</b><br>
El procesador es: <b>${procesador}</b><br>
La memoria Ram es: <b>${ram}</b><br>
Y el espacio en disco duro es: <b>${espacio}</b> <br><br>`;

document.write(frase);
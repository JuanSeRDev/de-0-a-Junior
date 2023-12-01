parrafo = document.getElementById("parrafo"); //selecciono por id
document.write(parrafo);
document.write("<br>");
parrafo2 = document.getElementsByTagName("p"); // selecciono por etiqueta
document.write(parrafo2[1]); 
document.write("<br>");
let parrafo3 = document.querySelector(".parrafo"); //seleccion por clases, si quiere seleccionar por id con querySelector tenemos que poner # en vez de .
document.write(parrafo3);
document.write("<br>");

let parrafo4 = document.querySelectorAll("#parrafo");
document.write(parrafo4[5]);
document.write("<br>");
// const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent
// document.write(resultado)
//* devuelve el texto de cualquier nodo

// const titulo = document.querySelector(".titulo");
// let resultado = titulo.innerHTML
// document.write(resultado)
//* devuelve el contenido html de un elemento

// const titulo = document.querySelector(".titulo");
// let resultado = titulo.outerHTML
// document.write(resultado)
//* devuelve el contenido html completo del elemento

//! CREACION DE ELEMENTOS

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI");
// const textoDelItem = document.createTextNode("este es un item de la lista");
// item.appendChild(textoDelItem);
// contenedor.appendChild(item);
// console.log(item);

// const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();
// for (i = 0; i < 20; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento)

//! Obtencion y modificacion de childs (hijos)

//const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstChild;//*devuelve el elutimo elemento hijo ya sea un espacio o cualquier cosa 
//? este ya no se usa
// const ultimoHijo = contenedor.lastChild; //*devuelve el elutimo elemento hijo ya sea un espacio o cualquier cosa 
//? este ya no se usa
// const primerHijo = contenedor.firstElementChild; //*devuelve el primer elemento hijo sin necesidad de quitar la identacion
// const ultimoHijo = contenedor.lastElementChild; //*devuelve el ultimo elemento hijo sin necesidad de quitar la identacion
// const Hijo = contenedor.childNodes; //*devuelve todos los elementos hijos
// const hijos = contenedor.children; //* muestra todas las etiquetas HTML
// console.log(hijos);

//! propiedades de childs (hijos)

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("h2")
// h2_nuevo.innerHTML = "Titulo";

// const h2_antiguo = document.querySelector(".h2");
// contenedor.replaceChild(h2_nuevo, h2_antiguo); //*modificamios el elemento
// contenedor.removeChild(h2_antiguo) //* removemos el elemento

// let respuesta = h2_antiguo.hasChildNodes();
// if (respuesta){
//     document.write("El elemento tiene hiejos");
// }else{
//     document.write("El elemento NO tiene hijos");
// }

// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.parentElement)

//! Propiedades de siblings (hermanos)

// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.nextElementSibling)

const div = document.querySelector(".div-3");
console.log(div.closest(".div")) //* selecciona el elemento ascendente mas cercano

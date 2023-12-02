const titulo = document.querySelector(".titulo");

//titulo.classList.add("grande");
//* add añade una clase

//titulo.classList.remove("grande")
//*remuebe una clase

// let valor = titulo.classList.item(0)
// document.write(valor)
//* Esto no es para modificar las clases si no que es algo para pedirle informacion

// let valor = titulo.classList.contains("grande")
// document.write(valor)
//* funciona con valores "true" y "false"

let valor = titulo.classList.replace("grande", "chico");
document.write(valor);


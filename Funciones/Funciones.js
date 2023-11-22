//se crea la funcion con nombre Saludar con todo el codigo requerido y y ahi es donde se declara y para inicializarla al fina se ejecutando colocando el nombre de la funcion

function saludar(){
    let respuesta = prompt('Hola Sebastian! ¿Como fue tu dia hoy?');
    if (respuesta == "bien"){
        alert("Me alegro");
    }else {
        alert("Que pena");
    }
}
saludar()
//Esta es otra forma de declarar una funcion como si fuera una variable. la variable "Saludar = funcion(){} "
saludo = function(){
    let respuesta = prompt('Hola Sebastian! ¿Como fue tu dia hoy?');
    if (respuesta == "bien"){
        alert("Me alegro");
    }else {
        alert("Que pena");
    }
}
saludo()
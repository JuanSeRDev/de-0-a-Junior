function saludar (){
    alert("hola");
    return "La funcion se ejecuto correctamente"
    alert("todo ok"); //esto no lo ejecuta
}
saludo = saludar();
document.write(saludo)

/* al poner Return significa que cuando se ejecute la funcion va a mostar lo que especifiques que quiera que se retorne. 
En este caso retorna "la funcion se ejecuta correctamente"
Si la funcion retorna un valor enseguida finaliza la funcion.
todo lo que se coloque despues de "return" no lo ejecuta
*/
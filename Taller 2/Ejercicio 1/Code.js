let free = false;

const validarCliente = (time)=> {
    let edad = prompt("¿cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis por eres la primer persona despuesd e las 2 AM");
            free = true;  
        } else { 
           alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else {
        alert("mira papu, sos menor de edad, por ende no vas a pasar, MALPARIDO MENOR");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1.2);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
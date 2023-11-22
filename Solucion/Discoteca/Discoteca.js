let free = false;
const ValidarCliente = (time)=>{
    let edad = prompt('¿Que edad tienes?');
    if (edad >= 18) {
        if (time <= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis");
            document.write('Tu edad es: '+ edad + '<br>' + 'la hora es: ' + time + ' ' + ':Hrs.' + '<br>' + 'Puedes pasar gratis' + '<br>' + '<br>'),
            free = true;
        }else {
            alert(`Son las ${time} Hrs. Puedes pasar pero tienes que pagar la entrada`);
            document.write('Tu edad es: ' + edad + '<br>' + 'La hora es: '+ time + '<br>' + 'Tienes ' + edad + ' Puedes pasar pero tienes que pagar la entrada' + '<br>' + '<br>');
        }
    }else {
        alert('Mira, eres menor de edad por ende no puedes pasar.');
        document.write('Tu edad es: ' + edad + '<br>' + 'Como eres menor de edad no puedes pasar.' + '<br>' + '<br>');
    }
}

ValidarCliente(prompt('Que hora es?'));
ValidarCliente(prompt('Que hora es?'));
ValidarCliente(prompt('Que hora es?'));
ValidarCliente(prompt('Que hora es?'));
ValidarCliente(prompt('Que hora es?'));
ValidarCliente(prompt('Que hora es?'));

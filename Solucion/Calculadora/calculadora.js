const sumar = (num1, num2)=> {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=> {
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2)=> {
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2)=> {
    return parseInt(num1) * parseInt(num2);
}


const problema = (respuesta)=>{

    alert('Que operacion deseas realizar?');
    const operacion = prompt('1: Sumar, 2: Restar, 3: Divirdir, 4: Multiplicar');

    if (operacion == 1) {
        let numero1 = prompt('Primer numero para sumar');
        let numero2 = prompt('Segundo numero para sumar');
        resultado = sumar(numero1,numero2);
        alert(`Tu resultado es ${resultado}`);
        document.write('Sumar <br>');
        document.write(numero1, ' + ');
        document.write(numero2, ' = ');
        document.write(resultado, '<br><br>');
        alert("Quieres realizar otra operacion?");
        respuesta = prompt("Si/No");
        if (respuesta == "si" || respuesta == "Si") {
            problema();
        }else {
            alert("Goodbye");
            document.write("Terminamos por ahora");
        }
    }
    else if (operacion == 2) {
        let numero1 = prompt('Primer numero para restar');
        let numero2 = prompt('Segundo numero para restar');
        resultado = restar(numero1,numero2);
        alert(`Tu resultado es ${resultado}`);
        document.write('Restar <br>');
        document.write(numero1, ' - ');
        document.write(numero2, ' = ');
        document.write(resultado, '<br><br>');
        alert("Quieres realizar otra operacion?");
        respuesta = prompt("Si/No");
        if (respuesta == "si" || respuesta == "Si") {
            problema();
        }else {
            alert("Goodbye");
            document.write("Terminamos por ahora");
        }
    }
    else if (operacion == 3) {
        let numero1 = prompt('Primer numero para dividir');
        let numero2 = prompt('Segundo numero para dividir');
        resultado = dividir(numero1,numero2);
        alert(`Tu resultado es ${resultado}`);
        document.write('Dividir <br>');
        document.write(numero1, ' / ');
        document.write(numero2, ' = ');
        document.write(resultado, '<br><br>');
        alert("Quieres realizar otra operacion?");
        respuesta = prompt("Si/No");
        if (respuesta == "si" || respuesta == "Si") {
            problema();
        }else {
            alert("Goodbye");
            document.write("Terminamos por ahora");
        }
    }
    else if (operacion == 4) {
        let numero1 = prompt('Primer numero para multiplicar');
        let numero2 = prompt('Segundo numero para multiplicar');
        resultado = multiplicar(numero1,numero2);
        alert(`Tu resultado es ${resultado}`);
        document.write('Multiplicar <br>');
        document.write(numero1, ' * ');
        document.write(numero2, ' = ');
        document.write(resultado, '<br><br>');
        alert("Quieres realizar otra operacion?");
        respuesta = prompt("Si/No");
        if (respuesta == "si" || respuesta == "Si") {
            problema();
        }else {
            alert("Goodbye");
            document.write("Terminamos por ahora");
        }
    }
    else {
        alert('No se ha encontrado la operacion')
    }
}
problema()


/*alert('Que operacion deseas realizar?');
const operacion = prompt('1: Sumar, 2: Restar, 3: Divirdir, 4: Multiplicar');

if (operacion == 1) {
    let numero1 = prompt('Primer numero para sumar');
    let numero2 = prompt('Segundo numero para sumar');
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
    document.write('Sumar <br>');
    document.write(numero1, ' + ');
    document.write(numero2, ' = ');
    document.write(resultado, '<br><br>');
    alert(respuesta = prompt("Quieres realizar otra operacion? Si / No"));
    if (respuesta == "si" || "si") {
        problema();
    }else{
        alert("Goodbye");
    }
}
else if (operacion == 2) {
    let numero1 = prompt('Primer numero para restar');
    let numero2 = prompt('Segundo numero para restar');
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
    document.write('Restar <br>');
    document.write(numero1, ' - ');
    document.write(numero2, ' = ');
    document.write(resultado, '<br><br>');
}
else if (operacion == 3) {
    let numero1 = prompt('Primer numero para dividir');
    let numero2 = prompt('Segundo numero para dividir');
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
    document.write('Dividir <br>');
    document.write(numero1, ' / ');
    document.write(numero2, ' = ');
    document.write(resultado, '<br><br>');
}
else if (operacion == 4) {
    let numero1 = prompt('Primer numero para multiplicar');
    let numero2 = prompt('Segundo numero para multiplicar');
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
    document.write('Multiplicar <br>');
    document.write(numero1, ' * ');
    document.write(numero2, ' = ');
    document.write(resultado, '<br><br>');
}
else {
    alert('No se ha encontrado la operacion')
}*/
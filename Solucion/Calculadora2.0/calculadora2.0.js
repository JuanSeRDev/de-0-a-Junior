class Caluculadora {
    constructor(){
    }
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        let numero = num;
        for (var i = 1; i < exp; i++){
            numero = numero * num;
        }
        return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Caluculadora();

const problema = (respuesta)=>{

    alert('Que operacion deseas realizar?');
    const operacion = prompt('1: Sumar, 2: Restar, 3: Divirdir, 4: Multiplicar, 5: Potenciación, 6: Raiz Cuadrada, 7: Raiz Cubica');

    if (operacion == 1) {
        let numero1 = prompt('Primer numero para sumar');
        let numero2 = prompt('Segundo numero para sumar');
        resultado = calculadora.sumar(numero1,numero2);
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
        resultado = calculadora.restar(numero1,numero2);
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
        resultado = calculadora.dividir(numero1,numero2);
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
        resultado = calculadora.multiplicar(numero1,numero2);
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
    else if (operacion == 5) {
        let numero1 = prompt('Numero a pontenciar');
        let numero2 = prompt('Exponente');
        resultado = calculadora.potenciar(numero1,numero2);
        alert(`Tu resultado es ${resultado}`);
        document.write('Exponenciación <br>');
        document.write(numero1, ' ** ');
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
    else if (operacion == 6) {
        let numero1 = prompt('Conocer la raiz cuadrada de:');
        resultado = calculadora.raizCuadrada(numero1);
        alert(`Tu resultado es ${resultado}`);
        document.write('Raiz cuadrada <br>');
        document.write(numero1, ' raiz cuadrada = ');
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
    else if (operacion == 7) {
        let numero1 = prompt('Conocer la raiz cubica de:');
        resultado = calculadora.raizCubica(numero1);
        alert(`Tu resultado es ${resultado}`);
        document.write('Raiz cubica <br>');
        document.write(numero1, ' raiz cubica = ');
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
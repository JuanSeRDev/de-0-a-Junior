class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false; 
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    } 

    abrir(){
        if(this.iniciada == false && this.instalada == true){ 
            this.iniciada = true;
            alert("App iniciada");
        }
    }

    cerrada(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
}

app1 = new App("16.000", "5 estrellas", "900mb");
app2 = new App("1.000", "4 estrellas", "250mb");
app3 = new App("2.124", "3 estrellas", "125mg");
app4 = new App("3.000", "2 estrellas", "1gb");
app5 = new App("6.500", "1.8 estrellas", "723mb");
app6 = new App("200", "3.4 estrellas", "500mb");
app7 = new App("800", "1 estrellas", "328mb");

app1.instalar();
app1.abrir();
app1.cerrada();
app1.desinstalar();

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
`);



class Celular {
    constructor(color, peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular Encendido");
            this.encendido = true;
        }else {
            alert("el celular ya esta apagado");
            this.encendido = false
        }
    }
    reinicier(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`);
    }
    grabarVideo(){
        alert(`grabar video en una rsolucion de: ${this.rdc}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de camara:<b>${this.rdp}</b> <br>
        Resolucion de video: <b>${this.rdc}</b><br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        `;
    }
}

//Esta es la extencion de la clase celular para los celulares de alta gama

class CelularAltaGama extends Celular {
    constructor(color, peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    MobileInfoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: <b>${this.resolucionDeCamaraExtra} </b><br>`;
    }
}
document.write('<h1>Celulares</h1>');

celular1 = new Celular("rojo", "150g", "5'", "HD", "1GB");
celular2 = new Celular("negro", "155g", "5.4'", "Full HD", "2GB");
celular3 = new Celular("blamco", "146g", "5.9'", "Full HD", "2GB");

celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reinicier();

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`);

document.write('<h1>Celulares de alta gama</h1>');

celular4 = new CelularAltaGama("rojo","150g", "5.3", "4K","3GB", "Full HD");
celular5 = new CelularAltaGama("negro","170g", "6.1", "4K","4GB", "Full HD");

document.write(`
    ${celular4.MobileInfoAltaGama()} <br>
    ${celular5.MobileInfoAltaGama()} <br>
`)
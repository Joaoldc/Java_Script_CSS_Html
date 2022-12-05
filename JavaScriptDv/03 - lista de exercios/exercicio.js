

class Carros {
    marca;
    cor;    
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //this no gastoMedia pois ele é um atributo do objeto
    calcularGastoDePercurso (distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }


}

const uno = new Carros('Fiat','Prata',1/12);
console.log(uno.calcularGastoDePercurso(70,5));
const palio = new Carros('Fiat','Preto',1/10);
console.log(palio.calcularGastoDePercurso(70,5));


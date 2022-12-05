// alt + SHIFT + f FORMATA OS ESPAÇAMENTOS


const precoEtanol = 3.50;
const precoGasolina = 4.85;
const tipoCombustivel = 'Gasolina';
const distanciaViagemKm = 120;
const kmPorLitroDoCarro = 14;
const litrosConsumidos = (distanciaViagemKm / kmPorLitroDoCarro)

console.log(distanciaViagemKm + ' Km percorridos')
console.log(litrosConsumidos.toFixed(1) + ' Litros gasto');



if (tipoCombustivel === 'Etanol') {
    const valorGastoViagem = (precoEtanol * litrosConsumidos.toFixed(2));
    console.log(valorGastoViagem.toFixed(2) + ' Valor gasto em reais');
} else {
    const valorGastoViagem = (precoGasolina * litrosConsumidos.toFixed(2));
    console.log(valorGastoViagem.toFixed(2) + ' Valor gasto em reais');

}

// VARIÁVEIS E OPERADORES
//""let""" para não constantes e ""const"" para constantes
// preferencial usar aspas simples ou crase para string

const precoCombustivelLitro = 4.89;
const kmPorLitros = 12;
const distanciaKm = 100;

const litrosGastoTotal = distanciaKm / kmPorLitros;

//""".toFixed""" serve para determinar a quantidade de casas decimais

console.log(litrosGastoTotal.toFixed(1));

const valorGastoTotal = precoCombustivelLitro * litrosGastoTotal;

console.log (valorGastoTotal.toFixed(2));





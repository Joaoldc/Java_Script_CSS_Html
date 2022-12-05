// Exemplo de funções e acrescimo de juros

function incrementarJuros(valor,percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10) + ' valor com acrescimo');
console.log(incrementarJuros(100,17));
console.log(incrementarJuros(100,25));
console.log(incrementarJuros(100,39));


function calcularJuros() {
    
}








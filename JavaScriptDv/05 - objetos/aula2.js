/****OBJETOS LITERAIS*** usar vírgula (,) ao termino de uma caracteristica do objeto
e não (;)

*/
//Uma classe é uma definição do que deveria ser O OBJETO

class Pessoa {
    nome;
    idade;

//Constructor é o que acontece quando uma pessoa é instanciada
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
    
}

const flavia = new Pessoa();
flavia.nome = 'Flavia Silveira'
flavia.idade = 26;

const lucas = new Pessoa();
lucas.nome = 'Lucas Araújo Silva'
lucas.idade = 31;

//definindo sara conforme pre ordenado no constructor
const sara = new Pessoa('Sara',37);

console.log(sara);

//imprimir algo especifico
console.log(lucas.nome);

//imprimir todas as caracteristicas contidas em flavia
console.log(flavia);

/*utilizando a função "descrever" criada com as caracteristicas que 
determinei*/
lucas.descrever();

flavia.descrever();

//Instancia nesse caso seria uma pessoa, pertencente a classe Pessoa;

const pessoa = {
    nome: 'João L. da Conceição',
    idade: 32,

    
//Usar crase?
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
        
    }
    
}
//precisei chamar o pessoa.descrever para imprimir
pessoa.descrever();


/*sobrescrevendo (idade) com como string é reconhecida pela carasteristica 
do objeto. Entender porque esse exemplo não foi preciso chamar para imprimir  */

const atributo = ('idade');

//NOtação de coleção
console.log(pessoa[atributo]);

//acesso dinâmico e direto ao reatribuir um valor

pessoa['nome'] = 'teste';
//direto
pessoa.nome = 'teste';

{
class Amigo {
   

} 

function compararAmigos(a1,a2) {
    if (a1.fabricacao > a2.fabricacao) {
        console.log(`${a1.fabricacao} é mais velho que ${a2.fabricacao}`);
   } else if (a1.fabricacao < a2.fabricacao) {
        console.log(`${a1.fabricacao} e ${a2.fabricacao} tem a mesma idade`);
   } else {
    console.log(`${a1.fabricacao} é igual a ${a2.fabricacao}`);
   }   
}

const sergio = new Amigo ('Sergio',1998);
const katia = new Amigo ('Katia',2007);

compararAmigos(sergio,katia);

}
    




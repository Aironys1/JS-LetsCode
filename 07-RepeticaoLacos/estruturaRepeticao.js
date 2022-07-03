const input = require('readline-sync');
const numero_sorteado = 5;

let numero = Number( input.question(" Tente acertar o numero da sorte ? "));

while (numero !== numero_sorteado) {
    console.log(' Voce errou o numero. Tente novamente... ');

    numero = Number( input.question(" Tente acertar o numero da sorte ? "));
    
}
    console.log('PARABENS voce acertou: o numero da sorte e: ' + numero);




//Descubra a minha idade

const minha_idade = 31;

let idade = Number( input.question(" Qual e a minha idade ? "));
while (idade !== minha_idade) {
    console.log('Essa nao e a minha idade. Tente novamente... ');
    idade = Number( input.question(" Qual é a minha idade ? "));

}

console.log('Isso, eu tenho', minha_idade + " anos ");


// Quantos vezes o Brasil foi campeão da copa do mundo ?

const titulosBrasil = 5;

let titulo = Number( input.question("Qauntos titulos o Brasil tem em copas do mundo ? ") );
while(titulosBrasil !== titulo){
    console.log('Errou... Tente novamente...');
    titulo = Number( input.question("Qauntos titulos o Brasil tem em copas do mundo ? ") );

}
console.log('Isso, o Brasil foi campeão 5 vezes em copas do mundo.')
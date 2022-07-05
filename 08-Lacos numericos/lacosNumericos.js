const input = require('readline-sync');

// O problema 


const nota1 = Number( input.question('Informe a nota 1: ') );
const nota2 = Number( input.question('Informe a nota 2: ') );
const nota3 = Number( input.question('Informe a nota 3: ') );

const media = (nota1 + nota2 + nota3) /3;
console.log(media);

if(media <=4){
    console.log("Voce reprovou")
}else if(media <=6){
    console.log("Recuperação")
}else{
    console.log("PASSOU")
}



// Acumulador
let acumulador = 0;

acumulador = acumulador +10;
acumulador +=5;
console.log(acumulador);

// Estrutura for

for (let numero = 0; numero <10; numero +=2){
   
    console.log("Numero e:",numero)
}


let nota;
let soma  = 0;

for(let i =1; i<=3; i++) {
    nota = Number( input.question(` Informe a nota ${i} do aluno:  `) );
    soma = soma + nota;
}

console.log(`A media do aluno é ${soma /3}.`)


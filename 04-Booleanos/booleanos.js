let idade = 31
let tenhoCNH = true
console.log(tenhoCNH)

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir ? ', possoDirigir)

let idade2 = 31

let votoFacultativo = idade2 < 18 || idade2 >= 70

console.log('Você não é obrigado a votar. ' + votoFacultativo)

if (idade2 >=18 && idade2 <70) {
    console.log('O voto é obrigado. ' + votoFacultativo)
}


let numero = 10
let palavra = "dez";
let numero2 = "10";

console.log(numero == numero2)
console.log(numero === numero2)

console.log(palavra == numero)

console.log(numero > numero2)
console.log(numero >= numero2)
let idade = 31

if (idade < 17) {
  console.log('Você é menor de idade')
} else if (idade >= 18 && idade <= 69) {
  console.log('Você é maior de idade')
} else if (idade >= 70 && idade <= 99) {
  console.log('Você está na terceira idade')
} else if (idade >= 100) {
  console.log('Você é um ser humando com muitos anos de vida')
} else {
  console.log('ERROR: Idade não informada')
}

let nota1 = 9;
let nota2 = 7;
let nota3 = 7;
let media

let total = nota1 + nota2 + nota3
console.log('Total das notas é: ', total)

console.log(media)

media = (nota1 + nota2 + nota3) / 3
console.log('Sua média final é: ', media)

if (media >=7 ) {
  console.log('PARABÉNS, VC FOI APROVADO!!! :)')
} else if (media >= 5) {
  console.log('Você ficou de recuperação')
} else if (media >= 0) {
  console.log('Você foi REPROVADO !!! :(')
} else {
  console.log('ERROR: Nota inválida')
}

console.clear();
let pessoa =["Aironys", "Garrido de Macedo", "31", "Desenvolvedor Web","true"];

console.log(pessoa.length);

for (let i = 0; i< pessoa.length; i++){
    console.log(pessoa[i])
}

for(let elemento of pessoa){
    console.log(elemento)
}

for(let indice in pessoa){
    console.log(indice, pessoa[indice])
}


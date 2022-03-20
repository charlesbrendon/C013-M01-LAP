const prompt = require('prompt-sync')()
/* Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.*/

let dado = [1, 2, 3, 4, 5, 6];
let cont = 0;
let lista1 = [];
console.log(dado);

for(let i = 1; i <= 100;i++ ){
    let dadolado = Math.floor(Math.random()*(6-1+1)+1);
    lista1.push(dadolado)
    
    cont++
}
if (lista1)
 
// pega o numero que esta na lista e buscar, no exemplo do professor esta dinailton

console.log(lista1)
console.log(cont);






// let dadosarmazenados = [];
// let contador = 0;
// let lista1 = [];
// while(contador < 100){
//   let dadolado = Math.floor(Math.random() * 6);
//   dadosarmazenados.push(dadolado)
//   lista1.push(dadosarmazenados)
      
//     contador++
//  }

// console.log(lista1)
//   console.log(dadosarmazenados)
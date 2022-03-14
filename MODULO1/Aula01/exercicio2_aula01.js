const prompt = require('prompt-sync')()

/*Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.*/

let peca1 = []
let peca2 = []
const v1 = 46.60
const v2 = 22.20

  peca1 = prompt('Digite o nome do primeiro item : ')
  peca2 = prompt('Digite o nome do segundo item : ')

console.log(`As suas compras são: \n1- ${peca1}, \n2- ${peca2}, `, )

let compra1 = +prompt(`Digite a quantidade de ${peca1} que deseja comprar`);
console.log();
let compra2 = +prompt(`Digite a quantidade de ${peca2} que deseja comprar`);

valorFinal = ((v1 * compra1) + (v2 * compra2))

console.log(`Valor final ficou de R$ ${valorFinal}`);

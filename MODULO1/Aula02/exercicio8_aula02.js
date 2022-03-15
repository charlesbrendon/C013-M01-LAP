const prompt = require('prompt-sync')()

/* Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. O valor deve ser exibido no console */

let compra = parseFloat(100.98);
let pag = parseFloat(150);
let troco = (pag - compra);
console.log(`\nO valor da compra foi de R$ ${compra} \nCliente pagou em dinheiro R$ ${pag} \nTroco: R$ ${troco.toFixed(2)}`);
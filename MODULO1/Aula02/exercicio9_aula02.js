const prompt = require('prompt-sync')()

/* Conversor de moedas - Crie um programa que solicite um valor em real ao usuário e converta esse valor para dólar.*/

let valorReal = +prompt('Digite o valor em Real a ser convertido em dolares')
let valorDolar = parseFloat(5.12)
let final

final = valorReal / valorDolar

console.log(`Valor em Dolares é de $ ${final.toFixed(2)} `);


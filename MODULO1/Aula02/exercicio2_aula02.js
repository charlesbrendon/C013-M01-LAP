const prompt = require('prompt-sync')()

/* Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP na terceira e o telefone a quarta*/

let nome = prompt('Digite seu nome completo: ')
let end = prompt('Digite seu endereço: ')
let cep = prompt('Digite seu CEP:')
let tel = prompt('Digite seu numero de telefone: ')

console.log(`\nNome: ${nome} \nEndereço: ${end} \nCEP: ${cep} \nTelefone: ${tel}`)
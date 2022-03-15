const prompt = require('prompt-sync')()

/* Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.*/

let nome
let tel
let p1
nome = prompt('Digite nome do cliente: ');
tel = +prompt('Digite número do telefone:');
console.log(`\nCliente: ${nome} \nTelefone: ${tel}`);
console.log();
p1 = prompt('Qual informação voce quer? nome ou telefone: ');
if (nome){
  console.log(nome);
}
else if(telefone){
  console.log(tel);
}
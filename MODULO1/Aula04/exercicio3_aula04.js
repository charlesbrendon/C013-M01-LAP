const prompt = require('prompt-sync')()

/* Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.*/

console.log('*****    CAIXA ELETRÔNICO    *****');
console.log('ESSA MÁQUINA FORNECE CÉDULAS DE R$1,00 R$5,00 R$10,00 R$50,00 R$100,00 . O VALOR MÍNIMO DE SAQUE É DE R$10,00 E O MÁXIMO É R$100,00.' );
let saque = +prompt('Digite o valor a ser sacado: ')

while (saque <10, saque >600)
  saque = +prompt('Valor digitado inválido, digite o valor do saque entre R$10,00 à R$600,00 ')

if (saque >= 10, saque <= 600){
  let nota100 = Math.trunc(saque/100)
  console.log('Quantidade de notas de R$100,00: ', nota100)
 
  let notas1 = saque % 100 
  let nota50 = Math.trunc(notas1 / 50)
  console.log('Quantidade de notas de R$50,00: ', nota50)

  let notas2 = saque % 50
  let nota10 = Math.trunc(notas2 / 10)
  console.log('Quantidade de notas de R$10,00: ', nota10)

  let notas3 = saque % 10
  let nota5 = Math.trunc(notas3 / 5)
  console.log('Quantidade de notas de R$5,00: ', nota5)

  let notas4 = saque % 5
  let nota1 = notas4
  console.log('Quantidade de notas de R$1,00: ', nota1)
  
}

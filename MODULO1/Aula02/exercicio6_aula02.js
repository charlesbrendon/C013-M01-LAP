const prompt = require('prompt-sync')()

/* Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e o valor do ataque por turno (entre 5 e 10). Baseado nos valores digitados, exiba a qauntidade de turnos que o jogador irá  demorar para conseguir derrotar o monstro (o jogador irá derrrotar o monstro em 8 turnos). */

let monstro = +prompt("Digite a quantidade de vida do monstro: ");
while (monstro < 10 || monstro > 50){
  console.log('O valor deve ser entre 10 e 50')
  monstro = +prompt("Digite a quantidade de vida do monstro: ");
}

let jogador = +prompt("Digite o valor de ataque do jogaro: ");
while (jogador < 5 || jogador > 10){
  console.log('O valor deve ser entre 5 e 10')
  jogador = +prompt("Digite o valor de ataque do jogaro: ");
}

let turnos = 8
let resultado = (turnos * jogador) > monstro
console.log('Quantidade de turnos: ', turnos);
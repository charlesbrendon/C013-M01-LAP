console.clear();
const prompt = require('prompt-sync')()
Math.floor(Math.random())

/* const jokenpo = ['rock', 'paper', 'scissors'];

Projeto 2 - Jokenpô
O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.
E para esse projeto você deve desenvolver um programa capaz de:
Receber o elemento escolhido pelo usuário;
Escolher um elemento aleatório para o computador;
Comparar os dois elementos e declarar um vencedor.
Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).
Requisitos
Para esse projeto, os requisitos fundamentais serão:
Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
Decidir de forma aleatória a decisão do computador;
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.*/

let name = prompt('Digite seu nome: ')
console.log(`Olá ${name}, vamos jogar pedra papel e tesoura`)


let jogo = ['PEDRA', 'PAPEL', 'TESOURA']
let computador = [Math.trunc(Math.random() * 3)]

console.log(`Escolha a sua opção: \n1-Pedra \n2-Papel \n3-Tesoura`)

do{
  console.log('Digite : pedra ou papel ou tesoura')
  question = prompt('Digite sua resposta:').toUpperCase()
}
  while (question != 'PEDRA' && question != 'PAPEL' && question != 'TESOURA' )

   if (question == jogo[0]){
  console.log('Você escolheu PEDRA')
     console.log()
  console.log('Computador escolheu:')
if(computador == 0){
  console.log(jogo[0])
}else if(computador == 1){
  console.log(jogo[1])
}else if(computador == 2){
  console.log(jogo[2])
}

}else if (question == jogo[1]){
  console.log('Você escolheu PAPEL')
     console.log()
  console.log('Computador escolheu:')
if(computador == 0){
  console.log(jogo[0])
}else if(computador == 1){
  console.log(jogo[1])
}else if(computador == 2){
  console.log(jogo[2])
}

}else if (question == jogo[2]){
  console.log('Você escolheu TESOURA')
     console.log()
  console.log('Computador escolheu:')
if(computador == 0){
  console.log(jogo[0])
}else if(computador == 1){
  console.log(jogo[1])
}else if(computador == 2){
  console.log(jogo[2])
}
}

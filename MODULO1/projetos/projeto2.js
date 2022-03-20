console.clear();
const prompt = require('prompt-sync')();

do{
console.log(
    `
    ░╔╗░░░░░░░░░░░░░░░░░░░
    ░║║╔═╗╔═╗╔═╗╔═╦╗╔═╗╔═╗
    ╔╣║║╬║║╬║║╩╣║║║║║╬║║╬║
    ╚═╝╚═╝║╔╝╚═╝╚╩═╝║╔╝╚═╝
    ░░░░░░╚╝░░░░░░░░╚╝░░░░
    `
)
console.log('*******Projeto 2 - ⓙ ⓞ ⓚ ⓔ ⓝ ⓟ ô*******');
console.log();
// Permitir que eu decida quantas rodadas iremos fazer;

let nome = prompt('Digite seu nome: ');
let pcWins = 0;
let playerWins = 0;
let empate = 0;
let escolhaPlayer;
let rodadas;

console.log(`Olá ${nome}, iremos jogar pedra, papel e tesoura.`);
console.log('*******Projeto 2 - ⓙ ⓞ ⓚ ⓔ ⓝ ⓟ ô*******');

  pcWins = 0
  playerWins = 0
  empate = 0
  
  do{
    console.log('Quantas rodadas você deseja jogar?');
    rodadas = prompt();
}
while (rodadas != parseInt(rodadas)) {
    console.log(`Quantidade de rodadas escolhidas: ${rodadas}`)
}
  


console.log();

for(let i=0; i < rodadas; i++){

console.log(`\n 1 - Pedra \n 2 - Papel \n 3 - Tesoura`);
console.log();
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
console.log('*******Projeto 2 - ⓙ ⓞ ⓚ ⓔ ⓝ ⓟ ô*******');
do{
    console.log('Digite Pedra ou Papel ou Tesoura: ');
    escolhaPlayer = prompt("Digite a opção escolhida: ").toUpperCase();    
}
while(escolhaPlayer != 'PEDRA' && escolhaPlayer != 'PAPEL' && escolhaPlayer != 'TESOURA');
console.log();
console.log(`A sua escolha é:${escolhaPlayer}`);

// Decidir de forma aleatória a decisão do computador;

let escolhaPc = [Math.trunc(Math.random() * 3)]
if(escolhaPc == 0){
    console.log(`A escolha do computador é: PEDRA`);   
}else if(escolhaPc == 1){
    console.log(`A escolha do computador é: PAPEL`);
}else if(escolhaPc == 2){
    console.log('A escolha do computador é: TESOURA');
}

console.log('*******Projeto 2 - ⓙ ⓞ ⓚ ⓔ ⓝ ⓟ ô*******');

// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);

if(escolhaPlayer == 'PEDRA' && escolhaPc == 2 || escolhaPlayer == 'PAPEL' && escolhaPc == 0 || escolhaPlayer == 'TESOURA' && escolhaPc == 1) {
    playerWins++;
}else if(escolhaPlayer == 'PEDRA' && escolhaPc == 1 || escolhaPlayer == 'PAPEL' && escolhaPc == 2 || escolhaPlayer == 'TESOURA' && escolhaPc == 0){
    pcWins++;
}else{
empate++;
}

}

// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;

// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
console.log(`${nome} marcou ${playerWins} pontos`);
console.log();
console.log(`Computador marcou ${pcWins} pontos`);
console.log();
console.log(`ambos empataram ${empate} vezes`);
console.log();
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
console.log('*******Projeto 2 - ⓙ ⓞ ⓚ ⓔ ⓝ ⓟ ô*******');
console.log();
if (playerWins > pcWins){
    console.log(`${nome} GANHOU!`);
}else if (playerWins < pcWins){
    console.log('COMPUTADOR GANHOU!');
}else{
    console.log('Empate');
}
console.log();
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.


do {
    novojogo = prompt(`Gostaria de jogar novamente? digite Sim ou Não:`).toLowerCase();
} while (novojogo != 'sim'  && novojogo != 'nao' );
console.clear();
}while (novojogo === 'sim' );

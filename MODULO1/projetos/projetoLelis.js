const prompt = require(`prompt-sync`)();

// Permitir que eu decida quantas rodadas iremos fazer;

let rounds; //VARIÁVEL PARA USUÁRIO ESCOLHER QUANTAS RODADAS IRÁ FAZER
let cont = 0; //VARIÁVEL PARA CONTADOR RODAR DENTRO DO LOOP ATÉ ATINGIR O NÚMERO DE RODADAS
let playerChoice; //ESCOLHA DO JOGADOR
let playerWins = 0; //CONTADOR DE VITÓRIAS POR RODADAS DO JOGADOR
let pcWins = 0; //CONTADOR DE VITÓRIAS POR RODADAS DO PC
const jokenpo = ['ROCK', 'PAPER', 'SCISSORS']; //LISTA COM OS ELEMENTOS DO JOGO

console.log(`\tJOKENPÔ\n\n`);

let name = prompt(`What is your name:`);

console.log(`\n\n`);

do {
    playerWins = 0;
    pcWins = 0;
    cont = 0;

    rounds = +prompt(`How much rounds do you wanna play: `);

    console.log(`\n\n
Hi, ${name}. Today we will play JOKENPÔ.\nThe options are: \n[0]ROCK \n[1]PAPER \n[2]SCISSORS\nWhat is your choice?
`);

    do {
        do {
            playerChoice = +prompt(`A:`);
            if (playerChoice != 0 && playerChoice != 1 && playerChoice != 2) {
                console.log(`Just type: \n[0]ROCK \n[1]PAPER \n[2]SCISSORS `);
            }
        } while (playerChoice != 0 && playerChoice != 1 && playerChoice != 2);

        let computerChoice = Math.floor(Math.random() * 3);

        console.log(`PC chose ${jokenpo[computerChoice]}`);

        console.log(`${name} chose ${jokenpo[playerChoice]}\n`);

        if (computerChoice === 0 && playerChoice === 2) {
            pcWins++;
        } else if (computerChoice === 1 && playerChoice === 0) {
            pcWins++;
        } else if (computerChoice === 2 && playerChoice === 1) {
            pcWins++;
        } else if (playerChoice === 0 && computerChoice === 2) {
            playerWins++;
        } else if (playerChoice === 1 && computerChoice === 0) {
            playerWins++;
        } else if (playerChoice === 2 && computerChoice === 1) {
            playerWins++;
        }

        cont++;
    } while (cont < rounds);

    //     console.log(`
    // ${name} won ${playerWins} rounds.
    // PC won ${pcWins} rounds
    // `);

    if (pcWins > playerWins) {
        console.log(`\nPC won ${pcWins} rounds.\nYou won ${playerWins} rounds.\nPC is the champion.
        `);
    } else if (playerWins > pcWins) {
        console.log(`\nPC won ${pcWins} rounds.\nYou won ${playerWins} rounds.\n${name} is the champion.
        `);
    } else {
        console.log(`\nPC won ${pcWins} rounds.\nYou won ${playerWins} rounds.\nDRAW.
        `);
    }

    do {
        restart = prompt(`Do you wanna play again. Yes or No:`).toLowerCase();
    } while (restart != 'yes' && restart != 'no');
    console.clear();
} while (restart === 'yes');

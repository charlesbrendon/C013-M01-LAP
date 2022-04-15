console.clear();
const prompt = require("prompt-sync")();

//Projeto extra - Simulador de votação

// Esse projeto não é para ser entregue, é apenas um exercício

// A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.
// O programa deve:
// Receber votos até que o usuário diga que não tem mais ninguém para votar;
// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional" ou "Obrigatório";
// Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado;
// Contabilizar os votos de acordo com os significados:
// 1 = Candidato 1
// 2 = Candidato 2
// 3 = Candidato 3
// 4 = Voto Nulo
// 5 = Voto em Branco
// Ter uma função chamada exibirResultados() que deve mostrar:
// O total de votos para cada candidato
// O total de votos nulos
// O total de votos em branco
// Qual candidato venceu a votação

// let vot = prompt(`Se ainda existem eleitores a votar digite sim, se não, digite não`)

//---------------------------------------------------------------------

// existem eleitores a votar?
// se sim, digite o nome e a data de nascimento

// console.log("Eleicões 2022");
// let listaEleitores = [];
// do {
//   let nome = prompt("Digite o nome do eleitor: ");
//   let anoNascimento = +prompt(`Digite o ano nascimento do ${nome}: `);
//   listaEleitores.push(nome, anoNascimento);
//   function votacao(autorizacao, voto) {
//     candidato1 = 0;
//     candidato2 = 0;
//     candidato3 = 0;
//     votoNulo = 0;
//     votoBranco = 0;
//   }


//   if (anoAtual - anoNascimento > 18) {
//     console.log(`${nome} você é obrigado a votar`);
//   } else if (anoAtual - anoNascimento >= 16 || anoAtual - anoNascimento < 18) {
//     console.log(`${nome} seu voto é opcional`);
//     opcao = prompt(`${nome} você deseja votar? sim ou não?`).toLowerCase();
//     if (opcao == "sim") {
//         votacao.autorizacao;
//       // cair na opcao de votacao
//     } else {
//       console.log("Voce escolheu nao votar");
//     }
//   } else {
//     console.log("Você não pode votar");
//   }

 
//   let opcao = +prompt("Digite uma opção: ");
//   if (opcao == 1) {
//     votacao.candidato1++;
//   } else if (opcao == 2) {
//     votacao.candidato2++;
//   } else if (opcao == 3) {
//     votacao.candidato3++;
//   } else if (opcao == 4) {
//     votacao.votoNulo++;
//   } else if (opcao == 5) {
//     votacao.votoNulo++;
//   } else {
//     console.log(`Opção invalida.
//       Digite uma opção:`);
//   }
  


  
//   do {
//     eleitores = prompt(
//       `existem eleitores para votar? digite Sim ou Não:`
//     ).toLowerCase();
//   } while (eleitores != "sim" && eleitores != "nao");
// } while (eleitores === "sim");

// // ----------------------------------------------------------------------

// // se a subtração da data de nascimento com o ano atual for igual ou maior que 18 o voto é obrigatorio, esse eleitor terá de votar, se a subtracao for igual e maior que 16 e menor que 18, o voto é opcional, pergunte se o eleitor deseja votar ou nao, se a subtracao for menor que 16, nao pode votar

// if (anoAtual - anoNascimento > 18) {
//   console.log(`${nome} você é obrigado a votar`);
// } else if (anoAtual - anoNascimento >= 16 || anoAtual - anoNascimento < 18) {
//   console.log(`${nome} seu voto é opcional`);
//   opcao = prompt(`${nome} você deseja votar? sim ou não?`);
//   if (opcao == "sim") {
//     // cair na opcao de votacao
//   } else {
//     console.log("Voce escolheu nao votar");
//   }
// } else {
//   console.log("Você não pode votar");
// }

// // os que podem e devem votar, deverao escolher entre 5 opcoes de votos, e somar o voto em +1 no candidato escolhido, o que nao pode votar, retornar msg dizendo que nao pode votar!

// function votacao(autorizacao, voto) {
//   candidato1 = 0;
//   candidato2 = 0;
//   candidato3 = 0;
//   votoNulo = 0;
//   votoBranco = 0;
// }
// if (opcao == 1) {
//   votacao.candidato1++;
// } else if (opcao == 2) {
//   votacao.candidato2++;
// } else if (opcao == 3) {
//   votacao.candidato3++;
// } else if (opcao == 4) {
//   votacao.votoNulo++;
// } else if (opcao == 5) {
//   votacao.votoNulo++;
// } else {
//   console.log(`Opção invalida.
//     Digite uma opção:`);
// }

function electionsWinners(votes, k) {
    
    //Returns Indices of all the elements with  the Maximum Vote Counts
    function findMaxVotesIndex(votes) {
        var maxIndexArray = [];
        var maxIndex;
        for (var i = 0; i < votes.length; i++) {
            if (i === 0) {
                maxIndex = 0;
                maxIndexArray.push(i);
            }
            else if (votes[i] > votes[maxIndex]) {
                maxIndexArray = [];
                maxIndexArray.push(i);
                maxIndex = i;
            }
            else if (votes[i] === votes[maxIndex]) {
                maxIndexArray.push(i);
            } 
        }
        
        return maxIndexArray;
    }
    
    //Is votes[index] unique in the votes array
    function boolUniqueVote(index, votes) {
        var voteCount = votes[index] + k;
        for (var i = 0; i < votes.length; i++) {
            if (i != index && votes[i] === voteCount) {
                return false;
            }
        }
        return true;
    }
    
    var possibleWinners = 0;
    var maxIndexArray = findMaxVotesIndex(votes); 
    var maxVotes = votes[maxIndexArray[0]]; //This is the maximum vote count value without k
    
    if (k === 0) {
        if (maxIndexArray.length === 1) {
            return 1; //Only 1 Maximum Vote Count
        }
        else {
            return 0; //There is a tie
        }
    }
    else {
        if (maxIndexArray.length === votes.length) {
            return votes.length; //The case were all elements in the votes array are the same which means each element in the votes array is a potential winner
        }
        for (var i = 0; i < votes.length; i++) {
            if (votes[i] + k > maxVotes && boolUniqueVote(i, votes)) { //The necessary condition to account for possible winners: The element's vote count + k should be greater than the max vote count and that element value is unique in the array
                possibleWinners++;
            }
        }
        return possibleWinners;
    } 
    
}
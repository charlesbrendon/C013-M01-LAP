console.clear();
const prompt = require('prompt-sync')();

 let lista =['Charles', 'Biah', 'Gabriel', 'Andrei'];

console.log(lista);

// let novoAluno = prompt('Digite o nome do aluno: ')
// lista.push(novoAluno);

// console.log(lista);
// let i = 0

// while (i < lista.length) {
//     console.log(lista[i]);
//     // i = i + 1
//     // i += 1
//     // i++
//     i++
// }

// let resposta = 'sim'

// while(resposta == 'sim'){
//     resposta = prompt('Quer repetir? ')
// }
// console.log();

// let filmes = [];
// let quantidade = prompt('Digite a quantidade de filmes que deseja adicionar')
// while (filmes.length < quantidade ) {
//     let filmenovo = prompt('Digite o nome do filme: ')
//     filmes.push(filmenovo)
   
// }

// console.log(filmes)

lista.splice(2, 1 );
console.log(lista);
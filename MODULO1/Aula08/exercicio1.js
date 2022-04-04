console.clear();
const prompt = require('prompt-sync')();

// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]


let linhas;
do {
    linhas = +prompt("quantas linhas deseja? ");
} while (isNaN(linhas));

let colunas;
do {
    colunas = +prompt("quantas colunas deseja? ");
} while (isNaN(colunas));

for (let linhaAtual = 0; linhaAtual < linhas; linhaAtual++) {
    const numeros = [];
    for (let numero = linhaAtual; numero < linhaAtual + colunas; numero++) {
        numeros.push(numero);
    }

    console.log(numeros)
}






// const linhas = +prompt("quantas linhas deseja? ");
// const colunas = +prompt("quantas colunas deseja? ");

// const matriz = [];

// for(let l=0 ; l < linhas; l++){
//     const cols = []; 
//     for(let c=0 ; c < colunas; c++){
//         cols[c] = +prompt(`linha: ${l+1}, coluna: ${c+1} - digite um numero inteiro `);
//     }
//     matriz[l] = cols;
// }

// console.table(matriz);



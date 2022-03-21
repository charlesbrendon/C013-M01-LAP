console.clear();
const prompt = require('prompt-sync')();

// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]


// let coluna = [];
// let linha = [];
// let base = +prompt('digite as colunas: ')
// let base2 = +prompt('Digite as linhas: ')
// //let base2 = +prompt('digite as linhas')
// //coluna.length = +prompt('digite as colunas: ')

  
// for (var i = 0; i < base; i++) {
//   coluna.push(i)
// }

// console.log(coluna)
// for ( linha of coluna){
// coluna.shift() 
// linha = coluna
// linha.push(linha.length+1)
// console.log(linha)
// } 

const linhas = +prompt("quantas linhas deseja? ");
const colunas = +prompt("quantas colunas deseja? ");

const matriz = [];

for(let l=0 ; l < linhas; l++){
    const cols = []; 
    for(let c=0 ; c < colunas; c++){
        cols[c] = +prompt(`linha: ${l+1}, coluna: ${c+1} - digite um numero inteiro `);
    }
    matriz[l] = cols;
}

console.table(matriz);








 // coluna.shift()
  // coluna.push(coluna.length+1)
  // console.log(coluna)



// let linha = []
// let coluna = []

// linha.length = prompt('Digite linhas: ')

// for (let i = 0; i <= linha.length; i++ )
// linha.push(i)
 
// console.log(linha)
     
// console.log(coluna)






// var passo = [];
// var coluna = [];
//  coluna = +prompt('digite as colunas: ')
// for (passo = 0; passo < coluna; passo++) {
//   // Executa 5 vezes, com os valores de passos de 0 a 4.
//   console.log(passo);
// }
//   console.log(coluna);

// while (passo < coluna)


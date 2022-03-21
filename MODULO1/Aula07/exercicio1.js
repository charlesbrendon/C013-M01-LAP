console.clear();
const prompt = require('prompt-sync')()
// Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

let lista = [];
let nota; 
let numero; 

let ap = [];
let rec = [];
let rep = [];

numero = +prompt('Digite a quantidade de notas a serem lançadas: ');

while(lista.length < numero){
    nota = parseFloat(prompt('Digite a nota: '));
    lista.push(nota.toFixed(1));
    
    
    if (nota > 6.9){
        ap.push(nota.toFixed(1))
    }
    if (nota < 7.0 && nota > 4.9){
        rec.push(nota.toFixed(1))
    }
    if (nota <5.0){
        rep.push(nota.toFixed(1))
    }
    
    
};
console.log();
console.log(' notas dos aprovados');
console.log(ap);
console.log(`Total de aprovados: ${ap.length}`);

console.log();
console.log('notas do que ficaram de recuperaçao');
console.log(rec);
console.log(`Total de recuperação: ${rec.length}`);

console.log();
console.log('notas dos reprovados');
console.log(rep);
console.log(`Total de reprovados: ${rep.length}`);


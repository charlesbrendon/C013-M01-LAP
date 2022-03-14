const prompt = require('prompt-sync')()

/*Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.*/

let aluno = prompt('Nome do aluno: ');
console.log();
const n1 = +prompt('Nota da primeira unidade ');
console.log();
const n2 = +prompt('Nota da segunda unidade ');
console.log();
const n3 = +prompt('Nota da terceira unidade ');
console.log();
const n4 = +prompt('Nota da quarta unidade ');
console.log();
const media = [(n1+n2+n3+n4)/4]


console.log(media)

console.log(`O aluno ${aluno}, obeteve média de ${media} `);

if (media > 7){
  console.log('APROVADO');
}
else if (media >=5 & media <6.9){
console.log('RECUPERÇÃO');
}
else if (media <=4.9)
  console.log('REPROVADO');
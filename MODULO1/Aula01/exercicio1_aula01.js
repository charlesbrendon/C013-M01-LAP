const prompt = require('prompt-sync')()

/*Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.*/

let nome = prompt('Nome do aluno: ');
let n1 = prompt('Digite a primeira nota de 0 a 10, sabendo que tem peso 4: ');
let n2 = prompt('Digite a segunda de 0 a 10, sabendo que a nota tem peso 6: ');
let media

if(n1 = (n1*4)/10){
  console.log(`A primeira nota é: ${n1.toFixed(1)}`)
};
if(n2 = (n2*6)/10){
  console.log(`A segunda nota é: ${n2.toFixed(1)}`)
};
media = (n1 + n2)/2
console.log(`A média do aluno é ${media.toFixed(1)}`)
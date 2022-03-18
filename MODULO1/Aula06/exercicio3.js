const prompt = require('prompt-sync')()
/* Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas. */

let lista1 = [];
let lista2 = [];
let nome = [];
let nota = [];
let media = 0;
let alunos = 0;
let numeroRepeticoes =0;
let montante = 0;

alunos = +prompt(`Digite a quantidade de alunos a serem cadastrados: `);

while(lista1.length < alunos){
  nome = prompt('Digite um nome: ');
  lista1.push(nome)
  nota = +prompt(`Digite a nota de ${nome}`)
  lista2.push(nota)
}

while (numeroRepeticoes < alunos ){
  montante += lista2[numeroRepeticoes]  
  numeroRepeticoes++
}
  
  
console.log(lista1)
console.log(lista2)

media = (montante/alunos)

console.log(media.toFixed(1))




















/*
while(lista1.length < 5){
  nome = prompt('Digite um nome: ');
  lista1.push(nome);
}
if(lista1[0, 1, 2, 3, 4]){
  idade = +prompt(`Digite a idade de ${lista1[0]}`);
  lista2.push(idade)
  idade = +prompt(`Digite a idade de ${lista1[1]}`);
  lista2.push(idade)  
  idade = +prompt(`Digite a idade de ${lista1[2]}`);
  lista2.push(idade)
  idade = +prompt(`Digite a idade de ${lista1[3]}`);
  lista2.push(idade)
  idade = +prompt(`Digite a idade de ${lista1[4]}`);
  lista2.push(idade)
} 
if(lista1[0, 1, 2, 3, 4]){
  altura = +prompt(`Digite a altura de ${lista1[0]}`);
  lista3.push(altura);
  altura = +prompt(`Digite a altura de ${lista1[1]}`);
  lista3.push(altura);
  altura = +prompt(`Digite a altura de ${lista1[2]}`);
  lista3.push(altura);
  altura = +prompt(`Digite a altura de ${lista1[3]}`);
  lista3.push(altura);
  altura = +prompt(`Digite a altura de ${lista1[4]}`);
  lista3.push(altura);
}
mediaidade = (lista2[0]+lista2[1]+lista2[2]+lista2[3]+lista2[4])/5;
mediaaltura = (lista3[0]+lista3[1]+lista3[2]+lista3[3]+lista3[4])/5;
  
  console.log();
  console.log(lista1);
  console.log(lista2);
  console.log(lista3);
  console.log(`A media de idade é:${mediaidade} e de altura é ${mediaaltura}`);*/
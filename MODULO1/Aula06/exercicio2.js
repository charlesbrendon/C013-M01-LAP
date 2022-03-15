const prompt = require('prompt-sync')()
/* Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.*/
let lista1 = [];
let nome = [];
let lista2 = [];
let idade = [];
let lista3 = [];
let altura = [];
let mediaidade
let mediaaltura

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
  console.log(`A media de idade é:${mediaidade} e de altura é ${mediaaltura}`);
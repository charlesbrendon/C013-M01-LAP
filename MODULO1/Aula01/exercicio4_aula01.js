const prompt = require('prompt-sync')()

/* Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.*/
let idadeEmDias = +prompt('Digite sua idade em dias: ');

console.log(idadeEmDias);

let diasEmAnos = Math.trunc (idadeEmDias / 365);
console.log(typeof(diasEmAnos));

console.log('Idade em anos ' + diasEmAnos);

let restoDias1 = idadeEmDias % 365
console.log(restoDias1);

let diasEmMeses = Math.trunc (restoDias1 / 30);
console.log('Idade em meses ' + diasEmMeses);

let restoDias2 = restoDias1 % 30;

console.log(restoDias2);
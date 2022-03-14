const prompt = require('prompt-sync')()

/*Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.*/
console.log('Hello Blumers!');

let anos = +prompt('Digite a quantidade de anos: ');
let meses = +prompt('Digite os meses: ');
let dias = +prompt('Digite os dias: ');

console.log();
console.log(anos);
console.log(meses);
console.log(dias);
console.log();


let anosParaDias = anos * 365;
console.log(anosParaDias);
console.log();

let mesesParaDias = meses * 30;
console.log(mesesParaDias);
console.log();

let totalDias = anosParaDias + mesesParaDias + dias
console.log(totalDias);

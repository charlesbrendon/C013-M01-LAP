//Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.


let total = [];
do {
let theRandomNumber = Math.floor(Math.random() * 100);
total.push(theRandomNumber);



}while(total.length < 20)

console.log(total)
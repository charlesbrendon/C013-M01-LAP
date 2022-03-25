console.clear();
const prompt = require('prompt-sync')();

// 1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calculadora(numero1, numero2){
        totalsoma = numero1 + numero2
    console.log(`${numero1} + ${numero2} = ${totalsoma}`)

        totalsub = numero1 - numero2
    console.log(`${numero1} - ${numero2} = ${totalsub}`)

        totalmult = numero1 * numero2
    console.log(`${numero1} * ${numero2} = ${totalmult}`)

        totaldiv = numero1 / numero2
    console.log(`${numero1} / ${numero2} = ${totaldiv}`)

}

let num1 = +prompt('Digite a numero1: ');
let num2 = +prompt('Digite a numero2: ');



calculadora(num1, num2)
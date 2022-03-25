console.clear();
const prompt = require('prompt-sync')();

// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

let a = +prompt('Digite o primeiro numero: ');
let b = +prompt('Digite o segundo numero: ');
let op = prompt('Digite o operador / * - + : ');

function calculadora (a,b,op) {
    
    if(op == '*'){
        return a * b
    }else if(op == '+' ){
        return a + b
    }else if(op == '-'){
        return a - b
    }else if(op == '/'){
        return a / b
    }


};


console.log(calculadora(a,b,op));
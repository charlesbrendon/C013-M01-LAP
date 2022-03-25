
const prompt = require('prompt-sync')();

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
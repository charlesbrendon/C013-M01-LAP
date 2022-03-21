console.clear();
const prompt = require('prompt-sync')();

let numero = +prompt('Digite 1')
let valida = 1
console.log(valida)

while(valida){
    console.log(`repetiu`)
    numero = +prompt('Digite 1')
    valida = 1 == numero
}
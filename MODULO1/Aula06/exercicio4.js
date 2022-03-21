const prompt = require('prompt-sync')()
/* Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.*/

let lista = [];
let lado1 = 0;
let lado2 = 0;
let lado3 = 0;
let lado4 = 0;
let lado5 = 0;
let lado6 = 0;

for(let i = 0; i <= 100;i++ ){
    let dadolado = Math.floor(Math.random()*(6-1+1)+1);
    lista.push(dadolado)
    
    if (lista[i] == 1 ){
        lado1++
    }
    else if (lista[i] == 2){
        lado2++
    }
    else if (lista[i] == 3){
        lado3++
    }
    else if (lista[i] == 4){
        lado4++
    }
    else if (lista[i] == 5){
        lado5++
    }
    else if (lista[i] == 6){
        lado6++
    }
    }
    console.log(`Lista com 100 lados aleatórios ${lista}`)
    console.log(`${lado1} vezes lado1`)
    console.log(`${lado2} vezes lado2`)
    console.log(`${lado3} vezes lado3`)
    console.log(`${lado4} vezes lado4`)
    console.log(`${lado5} vezes lado5`)
    console.log(`${lado6} vezes lado6`)

    

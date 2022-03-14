const prompt = require('prompt-sync')()

console.log("\n Programa que lê 3 valores que representam os lados de um triângulo A, B e C \n");
const A =+parseInt(prompt("Digite o valor do lado A: "));
const B =+parseInt(prompt("Digite o valor do lado B: "));
const C =+parseInt(prompt("Digite o valor do lado C: "));

const expoB = Math.pow(B,2);
const expoA = Math.pow(A,2);
const expoC = Math.pow(C,2);

let maiorLado 

if (A === B && A === C && B === C){
    console.log("\nÉ um triângulo Equilátero");        
}else if (expoA < (expoB + expoC)){
    console.log("\nÉ triângulo acutangulo\n");
}else if (A == C || A == B || B == C){
    console.log("\nTriangulo Isosceles");
};

if (A > B && A > C){
    maiorLado = A
    if(maiorLado >= (B + C)){
        console.log("\nNão forma um triângulo.\n");
    } else if (expoA == (expoB + expoC)){
        console.log("\nÉ triângulo retangulo\n");
    } else if (expoA < (expoB + expoC)){
        console.log("\nÉ triângulo acutangulo\n");
    } else if(expoA > (expoB + expoC)){
        console.log("\nÉ triângulo obtusangulo\n");
    }

} else if (B > A && B > C){
    maiorLado = B
    if(maiorLado >= (B + C)){
        console.log("\nNão forma um triângulo.\n");
    } else if (expoB == (expoA + expoC)){
        console.log("\nÉ triângulo retangulo\n");
    } else if (expoB < (expoA + expoC)){
        console.log("\nÉ triângulo acutangulo\n");
    } else if(expoB > (expoA + expoC)){
        console.log("\nÉ triângulo obtusangulo\n");
    }

} else if (C > A && C > B){
    maiorLado = C
    if(maiorLado >= (B + A)){
        console.log("\nNão forma um triângulo.\n");
    } else if (expoC == (expoB + expoA)){
        console.log("\nÉ triângulo retangulo\n");
    } else if (expoC < (expoB + expoA)){
        console.log("\nÉ triângulo acutangulo\n");
    } else if(expoC > (expoB + expoA)){
        console.log("\nÉ triângulo obtusangulo\n");
    }
};

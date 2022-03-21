// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.

console.clear();
const prompt = require('prompt-sync')();




let login = prompt('Digite seu login: ');
let senha 

if (senha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/)
senha = prompt('Digite sua senha: ')




console.log(login)
console.log(senha)


let r = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/

// console.log(r.test('a12B@cde')); // true
// console.log(r.test('a12B@cce')); // true
// console.log(r.test('a22B@cde')); // true
// console.log(r.test('a12@@cde')); // true
// console.log(r.test('a12B@cCe')); // true









// let r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/

// console.log(r.test('a12B@cde')); // true
// console.log(r.test('a12B@cce')); // false
// console.log(r.test('a22B@cde')); // false
// console.log(r.test('a12@@cde')); // false
// console.log(r.test('a12B@cCe')); // true







// let entrada = prompt('Digite sua senha: ');
// let senha = 'Blue2022';
// let tentativas = 0;

// while (entrada != senha) {
//     console.log('Senha incorreta!!!');
//     console.log('Digite sua senha novamente');
//     entrada = prompt();
//     if (tentativas == 3){
//         break; // Encerra a execuçã do While e sai do loop.
//     }

//     if (entrada == 0) {
//         continue; // Encerra a execução do While e inicia o loop novamente.
//     }

//     // tentativas = tentativas + 1;
//     // tentativas += 1; // Outro jeito de somar 1 à variável
//     tentativas++ // Outro jeito, mais fácil
//     console.log(`Tentativas restantes: ${4 - tentativas}`)

// }

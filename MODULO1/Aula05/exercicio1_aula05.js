const prompt = require('prompt-sync')()

/* Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/

let nome = prompt('Digite um usuario: ');
let senha = prompt('Digite uma senha: ');

while (nome == senha){
    console.log('usuario e senha não podem ser iguais')
    nome = prompt('Digite um usuario: ')
    senha = prompt('Digite uma senha: ')
    continue
}
  
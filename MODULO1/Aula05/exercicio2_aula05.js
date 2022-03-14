const prompt = require('prompt-sync')()

/* Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd'; */
let nome
let idade
let salario
let estadoCivil


nome = prompt('Digite seu nome: ')
while (nome.length < 3){
    console.log('Nome inválido');  
  nome = prompt('Digite seu nome: ')
}

idade = prompt('Digite sua idade: ')
while (idade < 0 || idade >= 150){
    console.log('Idade invalida')
  idade = prompt('Digite sua idade: ')
}

salario = +prompt('Digite seu salario: ')
while (salario == 0){
    console.log('Salario invalido: ')
  salario = +prompt('Digite seu salario: ')
}
  
estadoCivil = prompt('Digite seu estado civil da seguinte forma: s, c, v ou d')
while (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
  console.log('Estado civil invalido: ')
  estadoCivil = prompt('Digite seu estado civil da seguinte forma: s, c, v ou d')
}
console.log(`\nNome: ${nome} \n Idade: ${idade} \n Salario: ${salario} \n Estado civil: ${estadoCivil} `)
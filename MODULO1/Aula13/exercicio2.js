const prompt = require('prompt-sync')();
//Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista.

// const pessoa = {
//     nome: 'Gabriel',
//     idade: 20,
//     cidade: 'Londrina'
// };

// console.log(pessoa);

// pessoa.empresa = 'Blue';

// console.log(pessoa);

let quantidade = prompt('Quantos fun serao contratados: ');
let lista = [];

for (let i = 0; i < quantidade; i++) {
    let funcionario = {}
    console.log()
    funcionario.nome = prompt('Qual nome do funcionario: ')
    funcionario.cargo = prompt('Qual o cargo: ')
    funcionario.salario = prompt('Qual o salario: ')
    console.log()
    
    lista.push(funcionario)
    console.log()
    
}
console.log(lista)
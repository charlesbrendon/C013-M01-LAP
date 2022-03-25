console.clear();
const prompt = require('prompt-sync')();

//  Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.

// let info = {};
// let km = [];
// let carro = [];

// cont = +prompt('Digite quantos veiculos irá cadastrar: ');
// for(let i = 0; i < cont; i++) {
//     carro = prompt('Digite o modelo do carro: ');
//     km = +prompt(`Digite quantos KM o ${carro} faz com 1 litro: `)
//     dados = [carro, km]
//     info.push(dados)
// }

// console.log(info)


let cont = +prompt('Digite quantos veiculos irá cadastrar: ');
let listadados = [];

for(let i = 0; i < cont; i++){
    let dados = {}; // Posso criar um objeto vazio se quiser

    // Ou posso criar o objeto já com as chaves
    // let dados = {
    //     nome: '',
   
    //     km: ''
    // }

    // Quando passo o valor de uma propriedade, 
    // Caso ela não exista, a chave e valores são adicionados ao objeto
    // Caso essa chave já exista, o novo valor é atribuído à ela
    console.log();
    dados.nome = prompt('Qual o nome do veiculo a ser cadastrado? ');
  
    dados.km = +prompt(`Quantos Km o ${dados.nome} faz com 1 litro de combustivel? `);

    listadados.push(dados)

    console.log(dados);
    console.log();
}

console.log(listadados);

// Retornando uma propriedade específica de um objeto específico na lista
console.log(listadados[0].km);

listadados[0].km
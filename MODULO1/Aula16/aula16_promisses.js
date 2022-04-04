console.clear();
const prompt = require('prompt-sync')();


// function pizzaPronta(sabor) {
//     console.log(`Sua pizza de ${sabor} está pronta.`);
// }
  
// function pedirPizza(callback) {
//     const sabor = prompt('Escolha o sabor da sua pizza: ');
//     callback(sabor);
// }
  
// pedirPizza(pizzaPronta);








// function primeiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
//         resolve(parametro);
//     });
// }

// function segundaFuncao(novoParametro) {
//     return new Promise((resolve, reject) => {
//         const novoparametro = novoParametro + 10;

//         console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
//         resolve(novoparametro);
//     });
// }

// function terceiraFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro * 2;

//         console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

//         resolve(novoParametro);
//     });
// }

// function quartaFuncao(parametro) {
//     return new Promise((resolve, reject) => {
//         const novoParametro = parametro - 15;
 
//         console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
//         resolve(novoParametro);
//     });
// }

// primeiraFuncao(10)
//     .then(segundaFuncao)
//     .then(terceiraFuncao)
//     .then(quartaFuncao);








// function alteraNome(parametro) {
//     return new Promise((resolve, reject) => {
//         parametro = parametro.toUpperCase();

//         resolve(parametro);
//     });
// }

// function escreveNome(parametro) {
//     return new Promise((resolve, reject) => {
//         console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

//         resolve(parametro);
//     });
// }

// alteraNome('blue')
//     .then(escreveNome)
//     .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));






// alexandre exemplo
function f1(par){
	
	return new Promise((resolve, reject) => {
		console.log(`this is below`);
		console.log(par);
		const number = par + 1;
		
		resolve(number);
	});
}

function f2(par){
	
	return new Promise((resolve, reject) => {
		console.log(par);
		const number = par + 1;
		
		resolve(number);
	});
}
function f3(par){
	
	return new Promise((resolve, reject) => {
		console.log(par);
		const number = par + 1;
		
		resolve(number);
	});
}
function f4(par){
	
	return new Promise((resolve, reject) => {
		console.log(par);
	});
}


f1(1)
	.then(f2)
	.then(f3)
	.then(f4)
	.catch((err) => console.log('Error',err))

console.log(`this is on top`);
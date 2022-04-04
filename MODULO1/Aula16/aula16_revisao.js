console.clear();
const prompt = require("prompt-sync")();

// function subtrair (prompt) {

//     let total = numero -10
//     console.log(total);

// }
// let numero = +prompt(`Digite um numero para subtrair 10: `)
// subtrair()

/*

function subtrair(num){
    const listarandom = [5, 10, 15]
    let numrandom = listarandom[Math.floor(Math.random() * listarandom.length)];

    let total = num - numrandom
    return total;
}
let fome = +prompt('Digite a fome atual: ')

fome = subtrair(fome);

console.log(fome);


*/

// let mainCaracter = {
//   nome: "",
//   idade: 17,
//   especialidade: "",
//   conhecimento: 5,
//   cansaco: 0,
//   tedio: 0,
//   alteraConhecimento: function (conhecimento) {
//     this.conhecimento = this.conhecimento + conhecimento;
//     if (this.conhecimento < 0) {
//       this.conhecimento = 0;
//     }
//   },
//   alteraTedio: function (tedio) {
//     this.tedio = this.tedio + tedio;
//     if (this.tedio < 0) {
//       this.tedio = 0;
//     }
//   },
//   alteraCansaco: function (cansaco) {
//     this.cansaco = this.cansaco + cansaco;
//     if (this.cansaco < 0) {
//       this.cansaco = 0;
//     }
//   },

//   testecansaso: function (){
//     if(mainCaracter.cansaso <= 5){
//     return true;
//   }
// }

// }

// while (true){
//     if(mainCaracter.cansaso <= 5)
//     mainCaracter.descansar();
//     else{
// }



let personagem = {
    nome: 'Charles',
    cansaco: 10,
    fome: 10,


    verificastatus: function(){
        if(this.cansaco <= 2 || this.fome <= 2){
            return true
        }
    }
    descansar: function(){
        console.log(`Voce esta cansado ou com fome`)
        personagem.descansar;
       
        
    }

}

while(true){
    if(personagem.verificastatus()){
        console.log()
    }
}
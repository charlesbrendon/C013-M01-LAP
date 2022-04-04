// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.

console.clear();
const prompt = require('prompt-sync')();


const login = prompt('Digite seu login: ');
let senha = prompt('Digite seu senha: ');

const caracterEspecial = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-'];
const numeros = ['1','2','3','4','5','6','7','8','9','0'];

let existecaracter = false;
let existenumero = false;
let senhacorreta = false;

while(senhacorreta == false){
    for(const s of senha){
        for(const c of caracterEspecial){
            if (s == c ) existecaracter = true;
    }

 }
 for (const s of senha){
     for (const n of numeros){
         if( s == n  ) existenumero = true
     }

 }
 if(senha.length < 8) console.log('Senha invalida, sua senha deve ter 8 caracteres.')

 if(existecaracter == false) console.log('Sua senha deve ter ao menos UM caracter especial')

 if(existenumero == false) console.log('Sua senha deve conter pelo menos UM numero');

 if(senha.length < 8 || existecaracter == false || existenumero == false ){
    existecaracter == false
    existenumero = false
    senha = prompt("Digite uma nova senha")
 }else
 senhacorreta = true

}

console.log('Senha criada com sucesso')
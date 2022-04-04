console.clear();
const prompt = require('prompt-sync')()
// harles
// if((player == 'pedra' && computador == 'tesoura') || (player == 'papel' && computador == 'pedra') || (player == 'tesoura' && computador == 'papel')) {
//     console.log('Você ganhou!!!');
// } else if (player == computador) {
//     console.log('Vocês empataram ¬¬');
// } else {
//     console.log('Você perdeu! :(')
// }


// if 
// ((pc<player&&(pc!=2&&player!=0))||(pc===2&&player=== 0))
// {
// player ganha
// }

// else if
//  ((pc>player&&(pc!=0&&player!=2))||(pc===0&&player===2))
// {
// pc ganha
// }
// else
// {
// empate
// }


// //
// let rodadas =+prompt(`Rodadas: `);
// console.log(rodadas);

// for(let i=0; i<rodadas; i++){
// console.log('RODADAS')
// }
//  do{
//     console.log('Quantas rodadas você deseja jogar?');
//     rodadas = prompt();
//  }
//  while (rodadas != parseInt(rodadas)) {
//      console.log(`Quantidade de rodadas escolhidas: ${rodadas}`)
//  }
  
// nome = 'iva'

// do{
//     console.log(`Escolha uma das opções`);
//     console.log();
// console.log(`
// 1 - ${nome} levantou e foi pescar.
// 2 - ${nome} aproveitando o dia favorável e saiu para caçar!
// 3 - ${nome} ao levantar decidiu colher alguns frutos.
// 4 - ${nome} continuou deitado
// `);

// p1 = +prompt();
// }while(p1 < 1 || p1 > 4){
//     console.log(p1);
// }


// let forca = 10
// let agilidade = 100
// let saude = 100
// let energia = 100

// function status (forca, agilidade, saude, energia) {
    
//     if(forca <= 0){
//         console.log('GAME OVER')
//     }else if(agilidade <= 0){
//         console.log('GAME OVER')
//     }else if(saude <= 0){
//         console.log('GAME OVER')
//     }else if(energia <= 0){
//         console.log('GAME OVER')
//     }
//     else
//     console.log('ainda tem jogo')




// };


// console.log(status(forca, agilidade, saude, energia));


// const prompt=require('prompt-sync')()


// let dragao = {
//     forca: 30,
//     resistencia: 30,
//     energia: 100,
//     ataque:0,
//     geradorAtaque: function () {
//         return dragao.ataque=(this.forca * this.energia);
//     }  
//   };
//   dragao.geradorAtaque()
//   console.log(dragao.ataque)




// let persongame = {
//     nome: prompt('Digite o nome do seu personagem: '),
//     forca: 100,
//     agilidade: 100,
//     saude: 100,
//     energia: 100,

    
//     personstatus: function(){
//         console.log(`
//         ---------------------------------
//         ${personagem.forca}      - FORÇA
//         ---------------------------------
//         ${personagem.agilidade}  - AGILIDADE
//         ---------------------------------
//         ${personagem.saude}      - SAÚDE
//         ---------------------------------
//         ${personagem.energia}    - ENERGIA
//         ---------------------------------
//         `)
    
//     },

//     danosofrido: function(personagem){

//     }
// }

/*



let tempo = {
    dia: 1,
    hora: 7,

    // GET (pega as propriedades)
    exibeTempo: function(){
        console.log(`Agora é ${this.hora} horas do dia ${this.dia}.`)
    },

    // SET (altera as propriedades)
    passaTempo: function(tempo){
        this.hora += tempo
        if (this.hora >= 24){
            this.dia++
            this.hora -= 24;
        }
    },

    passaTempoDormir: function(tempo){
        this.hora += tempo
        
        if (this.hora >= 24){
            console.log('Você dormiu e foi para o próximo dia.')
            this.dia++
            this.hora = 7;
        }
    }
}

tempo.exibeTempo()
console.log();
console.log(`Escolha sua ação:
1 - Estudar (1 hora)
2 - Jogar video-game (8 horas)
3 - Trabalhar (3 horas)`);
let escolha = +prompt();

if (escolha == 1){
    tempo.passaTempo(1);
} else if (escolha == 2){
    tempo.passaTempo(8);
} else if (escolha == 3){
    tempo.passaTempo(3);
}


if (escolha == 1){
    tempo.passaTempoDormir(1);
} else if (escolha == 2){
    tempo.passaTempoDormir(8);
} else if (escolha == 3){
    tempo.passaTempoDormir(3);
}

tempo.exibeTempo();

console.log();

*/



// console.log(`Escolha uma das opções`);
//         console.log();
//     console.log(`
//     1 - ${personagem.nome} 
//     2 - ${personagem.nome} 
//     3 - ${personagem.nome} 
//     4 - ${personagem.nome} 
//     `);
//     p1 = +prompt('Digite a opcao escolhida: ');
//     if((p1 > 0 || p1 > 5)){
   
    
                
//         if (p1 == 1){
//             console.log(``)
//             personagem.forca = personagem.forca- 10
//             personagem.agilidade = personagem.agilidade -10
//             personagem.saude = personagem.saude - 10
//             personagem.energia = personagem.energia - 10
            
//         }else if(p1 == 2){
//             console.log(`${personagem.nome} `)
          
//         }else if(p1 == 3){
//             console.log(` `)
//             personagem.forca = personagem.forca - 20
//             personagem.agilidade = personagem.agilidade - 20
//             personagem.saude = personagem.saude - 30
//             personagem.energia = personagem.energia - 30
            
//         }else if(p1 == 4){
//             console.log(`${personagem.nome}`)
//             personagem.forca = personagem.forca - 5
//             personagem.agilidade = personagem.agilidade - 5
//             personagem.saude = personagem.saude - 20
                  
//         }
       
        
//     }



//     console.log(`Escolha uma das opções`);
//     console.log();
//     console.log(`
//   1 - 
//   2 - ${personagem.nome} 
//   3 - ${personagem.nome} 
//   4 - ${personagem.nome} 
//   `);
//     p1 = +prompt("Digite a opcao escolhida: ");
//     if (p1 > 0 || p1 > 5) {
//       if (p1 == 1) {
//         console.log(``);
        
//         personagem.saude = personagem.saude - 10;
//         personagem.energia = personagem.energia - 10;
//       } else if (p1 == 2) {
//         console.log(`${personagem.nome} `);
//       } else if (p1 == 3) {
//         console.log(` `);
        
//         personagem.saude = personagem.saude - 30;
//         personagem.energia = personagem.energia - 30;
//       } else if (p1 == 4) {
//         console.log(`${personagem.nome}`);
        
//         personagem.saude = personagem.saude - 20;
//       }
//     }






 
// let armas = ["greatsword","axes", "katana", "spears", "bows", "hammers"];
// let protecao = ["helm", "armor", "gloves", "pants", "boots", "shield"];
// let aliados = ["Lumen, waitress", "Sebina, priestess", "Pasi, priestess", "Elf Lala", "Eo, Craftsman", "Charon", "Amy, magic potions girl", "Wandering, merchant", "Zienna, arms saleswoman", "Hanzo, blacksmith"];
// let inimigos = ["Aegis","Agon", "Balgass", "Bloody Orc", "Balram","Chief Skeleton Warrior","Cruel Blood Assassin", "Dark Elf","Death Angel","Devil", "God of Darkness", "Golden Titan", "Hydra", "Kundun"];

// let personagem = {
//   nome: "",
//   armas: [],
 
//   atribuirNome: function () {
//     this.nome = prompt("Digite o nome: ");
//   },

//   pegarArmas: function () {
//     i = Math.floor(Math.random() * armas.length);
//     this.armas.push(armas[i]);
//     armas.indexOf(i)
//     armas.splice(i, 1);
//   }
// }



// personagem.atribuirNome();
// console.log(`O nome do seu personagem é: ${personagem.nome} `);
// p1 = +prompt(`Digite 2`)
// if(p1 = 2){
//     personagem.pegarArmas();
// }
// //armas do let
// console.log(armas)
// console.log();
// // armas do personagem
// console.log(personagem.armas)

for(let i = 0; i < 3; i++)
p1 = +prompt("Digite uma opção: ");
    
    if (p1 == 1) {
        console.log(`1`)
    
    } else if (p1 == 2) {
        console.log(`2:`)
      
    } else if (p1 == 3) {
        console.log(`3`)
    
    } else if (p1 == 4) {
        console.log(`4`)   
  }
  else{
    console.log(`Opção invalida.
    Digite uma opção:`)
  } 

 
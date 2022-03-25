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


let forca = 10
let agilidade = 100
let saude = 100
let energia = 100

function status (forca, agilidade, saude, energia) {
    
    if(forca <= 0){
        console.log('GAME OVER')
    }else if(agilidade <= 0){
        console.log('GAME OVER')
    }else if(saude <= 0){
        console.log('GAME OVER')
    }else if(energia <= 0){
        console.log('GAME OVER')
    }
    else
    console.log('ainda tem jogo')




};


console.log(status(forca, agilidade, saude, energia));
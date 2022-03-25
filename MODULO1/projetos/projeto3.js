console.clear();
const prompt = require('prompt-sync')();

// Para hoje
// Você deve pensar no tema da sua história, e produzir um esboço de como ela será desenvolvida.

// Quem é o personagem?

// Quais os seus desafios?

// Que opções de escolha ele pode ter a cada período?

// Como essas escolhas vão impactar na história e nas possibilidades de escolha futuras?

// Como você irá controlar o passar do tempo?

// Com isso pronto você já pode começar a colocar em código:
// Crie variáveis para armazenar os status do personagem (Fome? Dinheiro? Saúde? Força?). Que tipo de variável seria a mais adequada para isso?
// Crie perguntas que alterarão esses status para testar sua funcionalidade;
// Crie um laço de repetição que determinará os ciclos em que a história vai se passar. O que acontecerá ao final do ciclo? Como ficarão os status?
// Lembre-se: Use sua criatividade, mas cuidado para não criar um projeto megalomaníaco! Vocês terão um bom tempo para fazer o projeto, mas durante esse tempo com certeza novas ideias surgirão e você precisará fazer várias alterações. A tentação pode ser grande, mas cuidado para não deixar o projeto tomar proporções de modo que não seja possível de ser executado dentro do prazo dado.


console.log('Projeto final - Jogo de Ficção Interativa');
console.log('Nesse jogo, voce vai criar o seu personagem *-* : ');

let nome = prompt('Qual o nome do seu personagem?');
let especie = prompt('Qual a sua espécie?');

console.log(`Agora você vai escolher o status de ${nome}! \nEscolha de 1 a 100 quanto maior o valor mais aprimorado é o status! \n*Cuidado com grandes poderes, pois também há grandes responsabilidades ;) *  `);
console.log();
console.log();

console.log(`
Qual a Força de ${nome}?
         FORÇA
0--------------------100
`);
let forca = +prompt();
console.log()
console.log(`
Qual a Agilidade de ${nome}?
       AGILIDADE
0--------------------100
`);
let agilidade = +prompt();
console.log();
console.log(`
Qual a Saude de ${nome}?
        SAÚDE
0--------------------100
`);
let saude = +prompt();
console.log();
console.log(`
Qual a Energia de ${nome}? 
        ENERGIA
0--------------------100
`);
let energia = +prompt();
console.log();

console.log(`
Força de ${nome}?
${forca}      - FORÇA
Agilidade de ${nome}?
${agilidade}  - AGILIDADE
Saude de ${nome}?
${saude}      - SAÚDE
Energia de ${nome}? 
${energia}    - ENERGIA

`)

if(forca == 100 && agilidade == 100 && saude == 100 && energia == 100){
    console.log(`
    


____ _  _ ____ ____ _  _ ___ ____ ___  ____   /
|___  \/  |___ |    |  |  |  |__| |  \ |  |  / 
|___ _/\_ |___ |___ |__|  |  |  | |__/ |__| .  
                                               
    


*Parace que os outros tem medo de pessoas muito fortes :(*
    `)
    
}


console.log(`
Daremos incio a nossa jornada com ${nome} que acordou cedo e esta preste a embarcar nessa história, lembre-se, zerar algum dos status pode acabar com o jogo.
`)
console.log(`
Esse jogo é interativo, e você está no controle, ou quase isso... Cuidado com suas esolhas, pois elas afetam o status do seu personagem. 
Esolha uma das opções para dar continuidade com o jogo, 
.
.
.
.
.
eu ja lhe disse que se zerar o status da game over???
`)

do{
    console.log(`Escolha uma das opções`);
    console.log();
console.log(`
1 - ${nome} levantou e foi pescar.
2 - ${nome} aproveitando o dia favorável e saiu para caçar!
3 - ${nome} ao levantar decidiu colher alguns frutos.
4 - ${nome} continuou deitado
`);

p1 = +prompt();
}while(p1 < 1 || p1 > 4){
    console.log(p1);

    if (p1 == 1){
        console.log(`Uma pesca tranquila, sem perigos... perigo?? Oquê esta acontecendo??? Um peixe enorme!! acabou virando o barco, ${nome}, perdeu pontos em todos os status`)
        forca - 10
        agilidade -10
        saude - 10
        energia - 10
        
    }else if(p1 == 2){
        console.log(`${nome} Que caçada boa! Rendeu bastante carne e uma pele muito boa para se proteger do frio, apesar de estar quente ultimamente....`)
    }else if(p1 == 3){
        console.log(`Ao caminhar pela floresta em busca de frutos, ${nome} se deparou com uma urso, que o perseguiu ferozmente! Ao encontrar um pedaço de galho, tentou se proteger e acabou sendo ferido, o animal, o deixou e assim, pode voltar para casa, e ainda lhe rendeu alguns frutos  `)
        forca - 20
        agilidade - 20
        saude - 30
        energia -30
    }else if(p1 == 4){
        console.log(`${nome}, está preguiçoso, não fazer nada você fica fraco sabia?`)
        forca - 5
        agilidade - 5
        saude - 10        
    }
   

}

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
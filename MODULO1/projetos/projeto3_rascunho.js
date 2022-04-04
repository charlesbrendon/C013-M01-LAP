console.clear();
const prompt = require('prompt-sync')();


// console.log('Projeto final - Jogo de Ficção Interativa');
// console.log('Nesse jogo, voce vai criar o seu personagem *-* : ');
// do{
//     let personagem = {};

//     personagem.nome = prompt('Qual o nome do seu personagem?');
//     console.log(`Agora você vai escolher o status de ${personagem.nome}! \nEscolha de 1 a 100 quanto maior o valor mais aprimorado é o status! \n*Cuidado com grandes poderes, pois também há grandes responsabilidades ;) *  `);    
//     console.log();
    
//     console.log(`
//     Qual a Força de ${personagem.nome}?
//              FORÇA
//     0--------------------100`);    
//     personagem.forca = +prompt(':');
//     console.log()

//     console.log(`
//     Qual a Agilidade de ${personagem.nome}?
//            AGILIDADE
//     0--------------------100`);
//     personagem.agilidade = +prompt(':');
//     console.log();

//     console.log(`
//     Qual a Saude de ${personagem.nome}?
//             SAÚDE
//     0--------------------100`);
//     personagem.saude = +prompt(':');
//     console.log();

//     console.log(`
//     Qual a Energia de ${personagem.nome}? 
//             ENERGIA
//     0--------------------100`);
//     personagem.energia = +prompt(':');
//     console.log();
    
//     console.log(`
//     ---------------------------------
//     ${personagem.forca}      - FORÇA
//     ---------------------------------
//     ${personagem.agilidade}  - AGILIDADE
//     ---------------------------------
//     ${personagem.saude}      - SAÚDE
//     ---------------------------------
//     ${personagem.energia}    - ENERGIA
//     ---------------------------------
//     `)
    

//     function avancahora(horaatual, tempopassado = 1){
//         console.log(`Se passaram ${tempopassado} horas`);
//         horaatual = horaatual + tempopassado;
    
//         // console.log(`Agora são ${horaatual} horas`);
//         return horaatual; // Retornando a hora que recebeu como argumento depois de feita a soma
//     }
    
//     let horas = 7;
//     let dia = 1;


//     if(personagem.forca == 100 || personagem.agilidade == 100 || personagem.saude == 100 && personagem.energia == 100){
//         console.log(`
        
    
    
//     ____ _  _ ____ ____ _  _ ___ ____ ___  ____   /
//     |___  \/  |___ |    |  |  |  |__| |  \ |  |  / 
//     |___ _/\_ |___ |___ |__|  |  |  | |__/ |__| .  
                                                   
        
    
    
//     *Parace que os outros tem medo de pessoas muito fortes :(*
//         `)
//         break
//     }
    
    
//     console.log(`
//     Daremos incio a nossa jornada com ${personagem.nome}, que acordou cedo e esta preste a embarcar nessa história, lembre-se, zerar algum dos status pode acabar com o jogo.
//     `)
//     console.log(`
//     Esse jogo é interativo, e você está no controle, ou quase isso... Cuidado com suas esolhas, pois elas afetam ${personagem.nome}. 
//     Esolha uma das opções para dar continuidade com o jogo, 
//     .
//     .
//     .
//     .
//     .
//     eu ja lhe disse para ter cuidado com o status ???
//     `)
    
    

//     for (let i = 0; i < 3; i++){
//         while (horas <= 24){
//     do{
//         console.log(`Escolha uma das opções`);
//         console.log();
//     console.log(`
//     1 - ${personagem.nome} levantou e foi pescar.
//     2 - ${personagem.nome} aproveitando o dia favorável e saiu para caçar!
//     3 - ${personagem.nome} ao levantar decidiu colher alguns frutos.
//     4 - ${personagem.nome} continuou deitado
//     `);
    
//     p1 = +prompt(':');
//     }while(p1 < 1 || p1 > 4){
//         console.log(p1);
        
//         if (p1 == 1){
//             console.log(`Uma pesca tranquila, sem perigos... ????? Oquê esta acontecendo??? Um peixe enorme!! *acabou virando o barco, ${personagem.nome}, perdeu pontos em todos os status, pois devido a isso, perdeu tudo que havia feito`)
//             personagem.forca - 10
//             personagem.agilidade -10
//             personagem.saude - 10
//             personagem.energia - 10
//             horas = avancahora(horas, 4);
//         }else if(p1 == 2){
//             console.log(`${personagem.nome} Que caçada boa! Rendeu bastante carne e uma pele muito boa para se proteger do frio, apesar de estar quente ultimamente....`)
//             horas = avancahora(horas, 4);
//         }else if(p1 == 3){
//             console.log(`Ao caminhar pela floresta em busca de frutos, ${personagem.nome} se deparou com uma urso, que o perseguiu ferozmente! Ao encontrar um pedaço de galho, tentou se proteger e acabou sendo ferido, o animal, o deixou e assim, pode voltar para casa, e ainda lhe rendeu alguns frutos  `)
//             personagem.forca - 20
//             personagem.agilidade - 20
//             personagem.saude - 30
//             personagem.energia -30
//             horas = avancahora(horas, 4);
//         }else if(p1 == 4){
//             console.log(`${personagem.nome}, está preguiçoso, não fazer nada você fica fraco sabia?`)
//             personagem.forca - 5
//             personagem.agilidade - 5
//             personagem.saude - 20
//             horas = avancahora(horas, 4);       
//         }
//     }console.clear();
    
//         console.log(`Ja está de tarde... o que fazer agora?? `);
//         console.log();
//     console.log(`
//     1 - ${personagem.nome} O céu está maravilho, é bom da uma volta.
//     2 - ${personagem.nome} Hora de comer, estudar e cuidar da casa, afinal de contas, precisa.
//     3 - ${personagem.nome} Sair com amigos, me parece uma boa
//     4 - ${personagem.nome} deitar
//     `);
//     p2 = +prompt(':');
//     while(p2 <1 || p2 > 4){
//         if(p2 == 1){
//             console.log(`Que sol que nada, esta vindo uma tempestade, há muitos raios! ${personagem.nome} ficou em apuros nessa. sorte que achou um local para se abrigar`)
//             personagem.saude - 10
//             horas = avancahora(horas, 4);
//         }else if(p2 == 2){
//             console.log(`escolha sábia ${personagem.nome} está uma tempestade forte la fora!`)
//             horas = avancahora(horas, 4);

//         }else if(p2 == 3){
//             console.log(`Deu ruim!!! Deu muito ruim, um bando assaltou você e seus amigos e bateram muito em vocês!`)
//             personagem.forca -30
//             personagem.agilidade - 40
//             personagem.saude - 30
//             personagem.energia -30
//             horas = avancahora(horas, 4);

//         }else if(p2 == 4){
//             console.log(`${personagem.nome}, está preguiçoso, não fazer nada você fica fraco sabia?`)
//             personagem.forca - 5
//             personagem.agilidade - 5
//             personagem.saude - 20
//             horas = avancahora(horas, 4);    

//         }
//         console.clear();
//             do{
//                 console.log(`Esta começando a anoitecer.... O que vamos fazer agora????? `);
//                 console.log();
//             console.log(`
//             1 - ${personagem.nome} Preparar uma bela refeição, afinal de contas, saco vazio não para em pé, não é mesmo???
//             2 - ${personagem.nome} É bom visitar os familiares, aproveita que seus parentes te chamaram e vá fazer uma visita!
//             3 - ${personagem.nome} Hora de fazer exercicios, só assim para ficar mais forte 
//             4 - ${personagem.nome} deitar
//             `);
//             p3 = +prompt(':');
//             }while(p3 <1 || p2 > 4){
//                 if(p3 == 1){
//                     console.log(`Muito bom esse banquete! melhor refeição que ja fizeste ${personagem.nome}! `)
//                     personagem.forca +5
//                     personagem.agilidade +5
//                     personagem.saude +5
//                     personagem.energia +5                    
//                     horas = avancahora(horas, 4);
//                 }else if(p3 == 2){
//                     console.log(`Seus familiares fizeram uma festa! Muito bom! u.u .Que maravilha comeu bastante, bebeu a noite foi maravilhosa! `)
//                     personagem.energia - 5
//                     horas = avancahora(horas, 4);
        
//                 }else if(p3 == 3){
//                     console.log(`Fazer exercicios é muito bom! Fazendo isso ${personagem.nome} você se tornara mais forte!`)
//                     personagem.forca +16
//                     personagem.agilidade + 16
//                     personagem.saude +16
//                     personagem.energia -16
//                     horas = avancahora(horas, 4);
//                 }else if(p4 == 4){
        
//                     console.log(`Ainda deitado?? você esta bem?? Se não fizer nada, pode ter consequências graves!`)
//                     personagem.forca - 5
//                     personagem.agilidade - 5
//                     personagem.saude - 20 
//                     horas = avancahora(horas, 4);    
        
//                 }}
//                 console.clear();
//                 do{
//                     console.log(` `);
//                     console.log();
//                 console.log(`
//                 1 - ${personagem.nome} 
//                 2 - ${personagem.nome} 
//                 3 - ${personagem.nome} 
//                 4 - ${personagem.nome}
//                 `);
//                 p4 = +prompt(':');
//                 }while(p4 <1 || p2 > 4){
//                     if(p4 == 1){
//                         console.log(``)
                        
//                         horas = avancahora(horas, 4);
//                     }else if(p4 == 2){
//                         console.log(``)
//                         horas = avancahora(horas, 4);
            
//                     }else if(p4 == 3){
//                         console.log(``)
//                         personagem.forca -30
//                         personagem.agilidade - 40
//                         personagem.saude - 30
//                         personagem.energia -30
//                         horas = avancahora(horas, 4);
//                     }else if(p4 == 4){
            
//                         console.log(``)
//                         personagem.forca - 5
//                         personagem.agilidade - 5
//                         personagem.saude - 20 
//                         horas = avancahora(horas, 4);    
            
//                     }}
//                     console.clear();
//                     do{
//                         console.log(` `);
//                         console.log();
//                     console.log(`
//                     1 - ${personagem.nome} 
//                     2 - ${personagem.nome} 
//                     3 - ${personagem.nome} 
//                     4 - ${personagem.nome}
//                     `);
//                     p4 = +prompt(':');
//                     }while(p5 <1 || p2 > 4){
//                         if(p5 == 1){
//                             console.log(``)
                            
//                             horas = avancahora(horas, 8);
//                         }else if(p5 == 2){
//                             console.log(``)
//                             horas = avancahora(horas, 8);
                
//                         }else if(p5 == 3){
//                             console.log(``)
//                             personagem.forca -30
//                             personagem.agilidade - 40
//                             personagem.saude - 30
//                             personagem.energia -30
//                             horas = avancahora(horas, 8);
//                         }else if(p5 == 4){
                
//                             console.log(``)
//                             personagem.forca - 5
//                             personagem.agilidade - 5
//                             personagem.saude - 20 
//                             horas = avancahora(horas, 8);    
                
//                         }}




//     }


//  }
//         // Após passadas 24 horas, aumenta 1 dia
//     dia++
//     // Após isso, a var horas diminui em 24, para começar o outro dia com as horas que sobraram.
//     horas = horas - 24;

    
//   }

//         do {
//             novojogo = prompt(`Gostaria de jogar novamente? digite Sim ou Não:`).toLowerCase();
//         } while (novojogo != 'sim'  && novojogo != 'nao' );
//         console.clear();
// }while (novojogo === 'sim' );
    

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
console.log("Projeto final - Jogo de Ficção Interativa");

let personagem = {
  nome: '',
  saude: 100,
  energia: 100,
  
  definicaoNome: function(personagem){
    this.nome = prompt("Digite o nome do seu personagem:")
    return this.nome
  }

  
};

// console.log(`
//     Daremos incio a nossa jornada com ${personagem.nome}, que acordou cedo e esta preste a embarcar nessa história, lembre-se, zerar algum dos status pode acabar com o jogo.

//     `);

// console.log(`
//     Esse jogo é interativo, e você está no controle, ou quase isso... Cuidado com suas esolhas, pois elas mudam o status de ${personagem.nome}. 
//     Esolha uma das opções para dar continuidade com o jogo, 
//     .
//     .
//     .
//     .
//     .
//     eu ja lhe disse para ter cuidado com o status ???
//     `);

do {
  console.log(`
  "Você tem que acordar cada manhã com determinação se você pretende ir para a cama com satisfação."
  George Lorimer
  `)
  console.log(`Escolha uma das opções`);
  console.log();
  console.log(`
    1 - ${personagem.nome} determinado a ir para sua pesca, arruma todo o material que precisa, varas de pescar, linhas, molinete/carretilha, anzóis, bóias, stopper, chumbo, líder de fluorcarbono, alicates, maleta de pesca, canivete lanterna, iscas naturais, chapéu, óculos polarizados, máscara, camisa de pesca. E sai para pescar

    2 -  Aproveitando o dia favorável ${personagem.nome}, arrumou seus material de caça, a sua arma, roupas, binoculos, bussula e armadilhas e saiu para caçar javalis! 

    3 - ${personagem.nome} ao levantar decidiu colher alguns frutos, visto que, já esta na temporada.

    4 - ${personagem.nome} continuou deitado. *cuidado :
    "Os preguiçosos sempre falam do que pensam fazer, do que farão; os que de verdade fazem algo não têm tempo de falar nem do que fazem."
Johann Goethe
    `);
  p1 = +prompt("Digite a opcao escolhida: ");
  if (p1 > 0 || p1 > 5) {
    if (p1 == 1) {
      console.log(
        `Uma pesca tranquila, sem perigos... ????? Oquê esta acontecendo??? Um peixe enorme!! *acabou virando o barco, ${personagem.nome}, perdeu pontos em todos os status, pois devido a isso, perdeu toda a pescaria e todo o seu material foi junto`
      );
      personagem.saude = personagem.saude - 10;
      personagem.energia = personagem.energia - 10;
    } else if (p1 == 2) {
      console.log(
        ` Que javali enorme!! ${personagem.nome} está cheio de carne agora! Tem alimento para semana inteira! `
      );
    } else if (p1 == 3) {
      console.log(
        `Ao caminhar pela floresta em busca de frutos, ${personagem.nome} se deparou com uma urso, que o perseguiu ferozmente! Ao encontrar um pedaço de galho, tentou se proteger e acabou sendo ferido, o animal, o deixou e assim, pode voltar para casa, todo machucado  `
      );
      
      personagem.saude = personagem.saude - 30;
      personagem.energia = personagem.energia - 30;
    } else if (p1 == 4) {
      console.log(
        `${personagem.nome}, não fazer nada você fica fraco sabia? Faça algo, não deixe para depois!`
      );
      personagem.saude = personagem.saude - 20
      personagem.saude = personagem.saude - 20;
    }
  }console.clear();

  console.log(`Escolha uma das opções`);
  console.log();
  console.log(`
1 - ${personagem.nome} 
2 - ${personagem.nome} 
3 - ${personagem.nome} 
4 - ${personagem.nome} 
`);
  p1 = +prompt("Digite a opcao escolhida: ");
  if (p1 > 0 || p1 > 5) {
    if (p1 == 1) {
      console.log(``);
      
      personagem.saude = personagem.saude - 10;
      personagem.energia = personagem.energia - 10;
    } else if (p1 == 2) {
      console.log(`${personagem.nome} `);
    } else if (p1 == 3) {
      console.log(` `);
      
      personagem.saude = personagem.saude - 30;
      personagem.energia = personagem.energia - 30;
    } else if (p1 == 4) {
      console.log(`${personagem.nome}`);
      
      personagem.saude = personagem.saude - 20;
    }
  }
  console.log(personagem);
} while (
  personagem.saude >= 1 &&  personagem.energia >= 1
);

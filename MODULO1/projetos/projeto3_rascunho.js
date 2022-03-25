console.clear();
const prompt = require('prompt-sync')();


console.log('Projeto final - Jogo de Ficção Interativa');
console.log('Nesse jogo, voce vai criar o seu personagem *-* : ');
do{
    let personagem = {};

    personagem.nome = prompt('Qual o nome do seu personagem?');
    console.log(`Agora você vai escolher o status de ${personagem.nome}! \nEscolha de 1 a 100 quanto maior o valor mais aprimorado é o status! \n*Cuidado com grandes poderes, pois também há grandes responsabilidades ;) *  `);    
    console.log();
    
    console.log(`
    Qual a Força de ${personagem.nome}?
             FORÇA
    0--------------------100`);    
    personagem.forca = +prompt(':');
    console.log()

    console.log(`
    Qual a Agilidade de ${personagem.nome}?
           AGILIDADE
    0--------------------100`);
    personagem.agilidade = +prompt(':');
    console.log();

    console.log(`
    Qual a Saude de ${personagem.nome}?
            SAÚDE
    0--------------------100`);
    personagem.saude = +prompt(':');
    console.log();

    console.log(`
    Qual a Energia de ${personagem.nome}? 
            ENERGIA
    0--------------------100`);
    personagem.energia = +prompt(':');
    console.log();
    
    console.log(`
    Força de ${personagem.nome}?
    ${personagem.forca}      - FORÇA
    Agilidade de ${personagem.nome}?
    ${personagem.agilidade}  - AGILIDADE
    Saude de ${personagem.nome}?
    ${personagem.saude}      - SAÚDE
    Energia de ${personagem.nome}? 
    ${personagem.energia}    - ENERGIA
    `)
    

    function avancahora(horaatual, tempopassado = 1){
        console.log(`Se passaram ${tempopassado} horas`);
        horaatual = horaatual + tempopassado;
    
        // console.log(`Agora são ${horaatual} horas`);
        return horaatual; // Retornando a hora que recebeu como argumento depois de feita a soma
    }
    
    let horas = 7;
    let dia = 1;


    if(personagem.forca == 100 || personagem.agilidade == 100 || personagem.saude == 100 && personagem.energia == 100){
        console.log(`
        
    
    
    ____ _  _ ____ ____ _  _ ___ ____ ___  ____   /
    |___  \/  |___ |    |  |  |  |__| |  \ |  |  / 
    |___ _/\_ |___ |___ |__|  |  |  | |__/ |__| .  
                                                   
        
    
    
    *Parace que os outros tem medo de pessoas muito fortes :(*
        `)
        break
    }
    
    
    console.log(`
    Daremos incio a nossa jornada com ${personagem.nome} que acordou cedo e esta preste a embarcar nessa história, lembre-se, zerar algum dos status pode acabar com o jogo.
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
    
    

    for (let i = 0; i < 3; i++){
        while (horas <= 24){
    do{
        console.log(`Escolha uma das opções`);
        console.log();
    console.log(`
    1 - ${personagem.nome} levantou e foi pescar.
    2 - ${personagem.nome} aproveitando o dia favorável e saiu para caçar!
    3 - ${personagem.nome} ao levantar decidiu colher alguns frutos.
    4 - ${personagem.nome} continuou deitado
    `);
    
    p1 = +prompt(':');
    }while(p1 < 1 || p1 > 4){
        console.log(p1);
    
        if (p1 == 1){
            console.log(`Uma pesca tranquila, sem perigos... perigo?? Oquê esta acontecendo??? Um peixe enorme!! acabou virando o barco, ${personagem.nome}, perdeu pontos em todos os status`)
            personagem.forca - 10
            personagem.agilidade -10
            personagem.saude - 10
            personagem.energia - 10
            horas = avancahora(horas, 4);
        }else if(p1 == 2){
            console.log(`${personagem.nome} Que caçada boa! Rendeu bastante carne e uma pele muito boa para se proteger do frio, apesar de estar quente ultimamente....`)
            horas = avancahora(horas, 4);
        }else if(p1 == 3){
            console.log(`Ao caminhar pela floresta em busca de frutos, ${personagem.nome} se deparou com uma urso, que o perseguiu ferozmente! Ao encontrar um pedaço de galho, tentou se proteger e acabou sendo ferido, o animal, o deixou e assim, pode voltar para casa, e ainda lhe rendeu alguns frutos  `)
            personagem.forca - 20
            personagem.agilidade - 20
            personagem.saude - 30
            personagem.energia -30
            horas = avancahora(horas, 4);
        }else if(p1 == 4){
            console.log(`${personagem.nome}, está preguiçoso, não fazer nada você fica fraco sabia?`)
            personagem.forca - 5
            personagem.agilidade - 5
            personagem.saude - 10 
            horas = avancahora(horas, 4);       
        }
    }console.clear();
    
        console.log(`Ja está de tarde... o que fazer agora?? `);
        console.log();
    console.log(`
    1 - ${personagem.nome} O céu está maravilho, é bom da uma volta.
    2 - ${personagem.nome} Hora de comer, estudar e cuidar da casa, afinal de contas, precisa.
    3 - ${personagem.nome} Sair com amigos, me parece uma boa
    4 - ${personagem.nome} continuou deitado
    `);
    p2 = +prompt(':');
    while(p2 <1 || p2 > 4){
        if(p2 == 1){
            console.log(`Que sol que nada, esta vindo uma tempestade, há muitos raios! ${personagem.nome} ficou em apuros nessa. sorte que achou um local para se abrigar`)
            personagem.saude - 10
            horas = avancahora(horas, 4);
        }else if(p2 == 2){
            console.log(`escolha sábia ${personagem.nome} está uma tempestade forte la fora!`)
            horas = avancahora(horas, 4);

        }else if(p2 == 3){
            console.log(`Deu ruim!!! Deu muito ruim, um bando assaltou você e seus amigos e bateram muito em vocês!`)
            personagem.forca -30
            personagem.agilidade - 40
            personagem.saude - 30
            personagem.energia -30
            horas = avancahora(horas, 4);

        }else if(p2 == 4){
            console.log(`${personagem.nome}, está preguiçoso, não fazer nada você fica fraco sabia?`)
            personagem.forca - 5
            personagem.agilidade - 5
            personagem.saude - 10 
            horas = avancahora(horas, 4);    

        }
        console.clear();
            do{
                console.log(`Esta começando a anoitecer.... O que vamos fazer agora????? `);
                console.log();
            console.log(`
            1 - ${personagem.nome} Preparar uma bela refeição, afinal de contas, saco vazio não para em pé, não é mesmo???
            2 - ${personagem.nome} É bom visitar os familiares, aproveita que seus parentes te chamaram e vá fazer uma visita!
            3 - ${personagem.nome} Hora de fazer exercicios, só assim para ficar mais forte 
            4 - ${personagem.nome} continuou deitado
            `);
            p3 = +prompt(':');
            }while(p3 <1 || p2 > 4){
                if(p3 == 1){
                    console.log(``)
                    
                    horas = avancahora(horas, 4);
                }else if(p3 == 2){
                    console.log(``)
                    horas = avancahora(horas, 4);
        
                }else if(p3 == 3){
                    console.log(``)
                    personagem.forca -30
                    personagem.agilidade - 40
                    personagem.saude - 30
                    personagem.energia -30
                    horas = avancahora(horas, 4);
                }else if(p4 == 4){
        
                    console.log(``)
                    personagem.forca - 5
                    personagem.agilidade - 5
                    personagem.saude - 10 
                    horas = avancahora(horas, 4);    
        
                }}
                console.clear();
                do{
                    console.log(` `);
                    console.log();
                console.log(`
                1 - ${personagem.nome} 
                2 - ${personagem.nome} 
                3 - ${personagem.nome} 
                4 - ${personagem.nome}
                `);
                p4 = +prompt(':');
                }while(p4 <1 || p2 > 4){
                    if(p4 == 1){
                        console.log(``)
                        
                        horas = avancahora(horas, 4);
                    }else if(p4 == 2){
                        console.log(``)
                        horas = avancahora(horas, 4);
            
                    }else if(p4 == 3){
                        console.log(``)
                        personagem.forca -30
                        personagem.agilidade - 40
                        personagem.saude - 30
                        personagem.energia -30
                        horas = avancahora(horas, 4);
                    }else if(p4 == 4){
            
                        console.log(``)
                        personagem.forca - 5
                        personagem.agilidade - 5
                        personagem.saude - 10 
                        horas = avancahora(horas, 4);    
            
                    }}
                    console.clear();
                    do{
                        console.log(` `);
                        console.log();
                    console.log(`
                    1 - ${personagem.nome} 
                    2 - ${personagem.nome} 
                    3 - ${personagem.nome} 
                    4 - ${personagem.nome}
                    `);
                    p4 = +prompt(':');
                    }while(p5 <1 || p2 > 4){
                        if(p5 == 1){
                            console.log(``)
                            
                            horas = avancahora(horas, 8);
                        }else if(p5 == 2){
                            console.log(``)
                            horas = avancahora(horas, 8);
                
                        }else if(p5 == 3){
                            console.log(``)
                            personagem.forca -30
                            personagem.agilidade - 40
                            personagem.saude - 30
                            personagem.energia -30
                            horas = avancahora(horas, 8);
                        }else if(p5 == 4){
                
                            console.log(``)
                            personagem.forca - 5
                            personagem.agilidade - 5
                            personagem.saude - 10 
                            horas = avancahora(horas, 8);    
                
                        }}




    }


 }
        // Após passadas 24 horas, aumenta 1 dia
    dia++
    // Após isso, a var horas diminui em 24, para começar o outro dia com as horas que sobraram.
    horas = horas - 24;

    
  }

        do {
            novojogo = prompt(`Gostaria de jogar novamente? digite Sim ou Não:`).toLowerCase();
        } while (novojogo != 'sim'  && novojogo != 'nao' );
        console.clear();
}while (novojogo === 'sim' );
    

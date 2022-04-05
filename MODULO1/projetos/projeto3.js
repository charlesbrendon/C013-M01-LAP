console.clear();
const prompt = require("prompt-sync")();
const figlet = require("figlet");
const colors = require("colors");

console.log();
console.log(
  figlet.textSync(
    `
  PROJETO 
  FINAL`,
    {
      font: "doom",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: false,
    }
  ).red
);
console.log();
console.log(`
Dê nome ao seu personagem e enfrente inimigos poderosos e conquiste itens e fique ainda mais forte!
`);
console.log();
do {
  // listas das armas
  let armas = [
    "greatsword",
    "axes",
    "katana",
    "spears",
    "bows",
    "hammers",
    "Angelic Bow",
    "Soulbringer Stick",
    "Sonic Blade",
    "Cyclone Sword",
    "Miracle Staff",
    "Devast Claws",
  ];
  // listas dos equipamentos de proteção
  let protecao = [
    "helm",
    "armor",
    "gloves",
    "pants",
    "boots",
    "shield",
    "magic pendant",
    "magic ring",
    "magic bracelet",
  ];
  // listas dos aliados
  let aliados = [
    "Lumen the waitress",
    "Sebina the priestess",
    "Pasi the priestess",
    "Elf Lala",
    "Eo the Craftsman",
    "Charon",
    "Amy the magic potions girl",
    "Wandering the merchant",
    "Zienna the arms saleswoman",
    "Hanzo the blacksmith",
    "Jerint The Assistant",
    "Gens Vanert Steward",
    "Angela The Supplier",
    "Oracle Layla",
    "Safety Guardian",
    "Royal Guard Captain Lorence",
    "Mercenary Guild Manager Tercia",
  ];
  // listas dos inimigos
  let inimigos = [
    "Aegis",
    "Agon",
    "Balgass",
    "Bloody Orc",
    "Balram",
    "Chief Skeleton Warrior",
    "Cruel Blood Assassin",
    "Dark Elf",
    "Death Angel",
    "Devil",
    "God of Darkness",
    "Golden Titan",
    "Hydra",
    "Kundun",
    "Balrog",
    "Bloody Golem",
    "Berserker Warrior",
    "Chain Scorpion",
    "Crypta",
    "Death King",
    "Fire Golem",
  ];
  // Relógio
  let relogio = {
    hora: 7,
    dia: 1,
    qtdTreino: 0,
    qtdViajar: 0,
    qtdLorencia: 0,
    qtdArena: 0,

    passaTempo: function (tempo) {
      this.hora += tempo;

      if (this.hora > 24) {
        this.dia++;
        this.hora = 7;
        this.qtdTreino = 0;
        this.qtdViajar = 0;
        this.Lorencia = 0;
        this.qtdArena = 0;
      }
    },
  };
  // Personagem
  let personagem = {
    nome: "",
    forca: 10,
    agilidade: 10,
    vitalidade: 10,
    energia: 10,
    vivo: true,
    vitoria: false,
    armas: [],
    protecao: [],
    aliados: [],
    inimigos: [],

    atribuirNome: function () {
      this.nome = prompt("Digite o nome: ".blue);
    },

    diminuiVida: function (dano) {
      console.log(
        `
    Você tomou: ${dano} de dano.
     `.red
      );
      this.vitalidade -= dano;
      if (this.vitalidade <= 0) {
        this.fimdejogo();
      }
    },

    fimdejogo: function () {
      this.vivo = false;
      console.log(
        `Infelizmente, ${personagem.nome} não obteve exito, e acabou morrendo`
          .red
      );
    },
    fimdejogo2: function () {
      this.vitoria = true;
    },
    aumentaForca: function (aumentaforca) {
      console.log(
        `${personagem.nome} aumentou a força em ${aumentaforca}`.green
      );
      this.forca += aumentaforca;

      if (personagem.forca >= 34) {
        this.fimdejogo2();
      }
    },

    aumentaAgilidade: function (aumentaagilidade) {
      console.log(
        `${personagem.nome} aumentou a agilidade em ${aumentaagilidade}`.green
      );
      this.agilidade += aumentaagilidade;
    },
    aumentaVitalidade: function (aumentavitalidade) {
      console.log(
        `${personagem.nome} aumentou a vitalidade em ${aumentavitalidade}`.green
      );
      this.vitalidade += aumentavitalidade;
    },
    aumentaEnergia: function (aumentaenergia) {
      console.log(
        `${personagem.nome} aumentou a energia em ${aumentaenergia} `.green
      );
      this.energia += aumentaenergia;
    },

    pegarArmas: function () {
      i = Math.floor(Math.random() * armas.length);
      this.armas.push(armas[i]);
      armas.indexOf(i);
      armas.splice(i, 1);
    },
    pegarProtecao: function () {
      i = Math.floor(Math.random() * protecao.length);
      this.protecao.push(protecao[i]);
      protecao.indexOf(i);
      protecao.splice(i, 1);
    },
    aliadosEncontrados: function () {
      i = Math.floor(Math.random() * aliados.length);
      this.aliados.push(aliados[i]);
      aliados.indexOf(i);
      aliados.splice(i, 1);
    },
    inimigosEncontrados: function () {
      i = Math.floor(Math.random() * inimigos.length);
      this.inimigos.push(inimigos[i]);
      inimigos.indexOf(i);
      inimigos.splice(i, 1);
    },
  };
  // Variável com as opções a serem escolhidas
  let opcoes = [
    "Você gostaria de treinar?(São duas horas de treino! ) ",
    "Você gostaria de viajar e aproveitar alguma aventura?(Passear pelos mapas de Devias, Dungeon e Tarkan dura 4 horas!)",
    "Você gostaria de ir na cidade de Lorencia?(Lorencia é uma grande cidade, Você passará 4 horas nela",
    "Você gostaria de provar sua força?(Em ARENA, você provará sua força e as lutas são de 4 horas)",
  ];
  // Colocar nome no Personagem
  personagem.atribuirNome();
  console.clear();
  // Exibir nome do seu personagem
  console.log(
    `
  O nome do seu personagem é: ${personagem.nome} 
  `.blue
  );
  // Função que chama o status do personagem
  function exibirstatus() {
    console.log(
      `
  Nome: ${personagem.nome}
  Força: ${personagem.forca}
  Agilidade: ${personagem.agilidade}
  Vitalidade: ${personagem.vitalidade}
  Energia: ${personagem.energia}  
  Armas coletadas: ${personagem.armas}

  Equipamentos de proteção coletados: ${personagem.protecao}

  Aliados feitos: ${personagem.aliados}

  Inimigos encontrados: ${personagem.inimigos}

  `.blue
    );
    prompt(
      `
    Aperte uma tecla para continuar.`.red.bold
    );
  }
  // treinar com aliados
  function treinar() {
    console.clear();
    relogio.passaTempo(2);
    personagem.aliadosEncontrados();
    console.log(
      `Ao longo de duas horas, ${
        personagem.nome
      } treinou bravamente aumentando os seus status com a ajuda de ${
        personagem.aliados[personagem.aliados.length - 1]
      }`
    );
    console.log();
    personagem.aumentaForca(2);
    personagem.aumentaAgilidade(2);
    personagem.aumentaVitalidade(2);
    personagem.aumentaEnergia(2);
    exibirstatus();
  }
  // Viajar pelos mapas
  function viajar() {
    console.clear();
    relogio.passaTempo(4);
    personagem.inimigosEncontrados();

    if (personagem.vivo == true && personagem.protecao.length < 2) {
      personagem.diminuiVida(6);
      console.log(
        `${
          personagem.nome
        }, cuidado ao andar pelos mapas sem equipamentos de proteção, pois existem inimigos espalhados por todos os lados e por isso você tomou 6 de dano causado por ${
          personagem.inimigos[personagem.inimigos.length - 1]
        } `
      );
      console.log();
    } else if (personagem.vivo == true && personagem.protecao.length > 1) {
      personagem.pegarProtecao();
      personagem.pegarArmas();
      personagem.diminuiVida(2);
      console.log(
        `${
          personagem.nome
        } Apesar de tomar 2 de dano, você conseguiu derrotar ${
          personagem.inimigos[personagem.inimigos.length - 1]
        } e obteve ${personagem.armas[personagem.armas.length - 1]} e ${
          personagem.protecao[personagem.protecao.length - 1]
        }`
      );
    }
    exibirstatus();
  }
  // Visitar Lorencia
  function lorencia() {
    console.clear();
    relogio.passaTempo(4);
    personagem.inimigosEncontrados();

    if (personagem.forca < 16) {
      personagem.diminuiVida(2);
      console.log(
        `Lorencia é uma cidade que tbm há inimigos, e infelizmente você encontrou ${
          personagem.inimigos[personagem.inimigos.length - 1]
        } e tomou 2 de dano, pois não tinha força`
      );
      console.log();
    } else {
      personagem.pegarArmas();
      console.log(
        `Você conseguiu ${
          personagem.armas[personagem.armas.length - 1]
        } pois derrotou ${personagem.inimigos[personagem.inimigos.length - 1]}`
      );
    }
    personagem.aliadosEncontrados();
    personagem.pegarProtecao();
    console.log(
      `Você encontrou um aliado!!
       ${
         personagem.aliados[personagem.aliados.length - 1]
       }, e te presenteou com ${
        personagem.protecao[personagem.protecao.length - 1]
      }`
    );
    exibirstatus();
  }
  // Lutar bravamente em ARENA
  function lutar() {
    console.clear();
    relogio.passaTempo(4);
    personagem.inimigosEncontrados();

    if (
      personagem.forca < 20 &&
      personagem.protecao.length < 4 &&
      personagem.armas.length < 4
    ) {
      personagem.diminuiVida(9);
      console.log(
        `${personagem.nome} Você tomou 9 de dano! Cuidado ao querer entrar em campo de batalha sem força e sem itens para isso, os inimigos são poderosos aqui!`
      );
      console.log();
    } else {
      personagem.diminuiVida(3);
      personagem.pegarArmas;
      personagem.pegarProtecao;
      console.log(
        `Com sua força, conseguiu derrotar ${
          personagem.inimigos[personagem.inimigos.length - 1]
        } e com isso conseguiu alguns itens ${
          personagem.armas[personagem.armas.length - 1]
        } e ${personagem.protecao[personagem.protecao.length - 1]}`
      );
    }
    if (personagem.vivo == true) {
      console.log(
        `Viajar acarreta perigos, nessa jornada voce encontrou ${
          personagem.inimigos[personagem.inimigos.length - 1]
        } `
      );
      if (personagem.vitalidade <= 2 && personagem.vitalidade != 0) {
        console.log(
          `Quase que você morre, por querer lutar em Arena. Aqui somente os fortes terão triunfo`
        );
      } else {
        console.log(
          `Você encontrou ${
            personagem.inimigos[personagem.inimigos.length - 1]
          } e conseguiu derrota-lo e conseguiu itens para seu inventário! `
        );
      }
    }
    if (personagem.vivo == false) {
      console.log(
        `Viajar acarreta perigos, nessa jornada voce encontrou ${
          personagem.inimigos[personagem.inimigos.length - 1]
        } e morreu em combate`
      );
    }
    exibirstatus();
  }
  // Função que chama as opções
  function exibirOpcoes() {
    console.log(`Escolha uma opção:`);

    for (let posicao in opcoes) {
      console.log(
        `
      ${Number(posicao) + 1} - ${opcoes[posicao]}
      `.yellow
      );
    }
  }
  exibirstatus();
  do {
    console.clear();
    console.log(`Hora e dia:`);
    console.log(
      `Agora são ${relogio.hora} horas, do dia ${relogio.dia}.`.red.bold
    );
    console.log();

    exibirOpcoes();
    console.log();
    let opcao = +prompt("Digite uma opção: ");

    if (opcao == 1) {
      // Treinar com aliados
      if (relogio.qtdTreino < 3) {
        relogio.qtdTreino++;
        treinar();
      } else {
        console.log();
        prompt(`${personagem.nome} ja treinou 3 vezes hoje! Faça outra coisa!`);
      }
    } else if (opcao == 2) {
      // Viajar pelos mapas
      if (relogio.qtdViajar < 3) {
        relogio.qtdViajar++;
        viajar();
      } else {
        console.log();
        prompt(
          `${personagem.nome} viajou pelos mapas de Devias, Dugeon e Tarkan por 3 vezes hoje! Faça outra coisa!`
        );
      }
    } else if (opcao == 3) {
      // Visitar Lorencia
      if (relogio.qtdLorencia < 3) {
        relogio.qtdLorencia++;
        lorencia();
      } else {
        console.log();
        prompt(`${personagem.nome} ficou muito tempo em Lorencia! Saia daqui!`);
      }
    } else if (opcao == 4) {
      // Lutar em Arena
      if (relogio.qtdArena < 3) {
        relogio.qtdArena;
        lutar();
      } else {
        console.log();
        prompt(
          ` ${personagem.nome} batalhou por 3 vezes por hoje! Vá para outros lugares, amanha pdoerá batalhar mais! `
        );
      }
    } else {
      console.log(`Opção invalida.
      Digite uma opção:`);
    }
  } while (personagem.vivo == true && personagem.vitoria == false);

  if (personagem.vivo == true && personagem.vitoria == true) {
    console.log();
    console.log(`terminou batalha ganhador`.blue.bold);
    console.log();
    console.log(`Parabéns! Não fez mais que sua obrigação`.italic);
  } else {
    console.log();
    console.log(`terminou batalha perdedor`.red.bold);
    console.log();
  }
  do {
    console.log(`Iniciar o jogo novamente? digite:`);
    console.log(`SIM`.blue.bold);
    console.log(`NAO`.red.bold);
    novojogo = prompt().toUpperCase();
  } while (novojogo != "SIM" && novojogo != "NAO");
  console.clear();
} while (novojogo === "SIM");

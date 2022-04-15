const elementoNome = document.getElementById("nome");
/* Cria a variável elementoNome e coloca o elemento com o id "nome" nela */
const elementoEvolucao = document.querySelector("#Evolucao");
/* Cria a variável elementoEvolucao e coloca o elemento com o id "Evolucao" nela */
const elementoImg = document.querySelector("#imagem");
/* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
let elementoAlterar = document.querySelector("#alterar");
/* Cria a variável elementoAlterar e coloca o elemento com o id alterar nela */

/* Adiciona click no elementoAlterar e muda imagem, nome e evolução */
elementoAlterar.addEventListener("click", () => {
    /* primeira imagem */
    if (elementoAlterar.value == "primeiro") {
        elementoImg.src = "./assets/img/angemon.png";
        /* Troca a imagem do digimon */
        elementoNome.innerText = "Angemon";
        /* Altera o nome */
        elementoEvolucao.innerText = "Adulto";
        /* Altera a evolução */
        elementoAlterar.value = "segundo";
        /* Altera valor do botão para segundo */
    } else if (elementoAlterar.value == "segundo") {
        /* Verifica se é o segundo valor, se for troca para terceiro */
        elementoImg.src = "./assets/img/magnaAngemon.png";
        /* Troca a imagem do digimon */
        elementoNome.innerText = "magnaAngemon";
        /* Altera o nome */
        elementoEvolucao.innerText = "Perfeito";
        /* Altera a evolução */
        elementoAlterar.value = "terceiro";
        /* Altera valor do botão para terceiro*/
    } else if (elementoAlterar.value == "terceiro") {
        /* Verifica se é terceiro valor, se for troca para quarto */
        elementoImg.src = "./assets/img/Seraphimon.png";
        /* Troca a imagem do digimon */
        elementoNome.innerText = "Seraphimon";
        /* Altera o nome */
        elementoEvolucao.innerText = "Ultimate";
        /* Altera a evolução */
        elementoAlterar.value = "quarto";
        /* Altera valor do botão para quarto */
    } else {
        /* Se não for nem uma das anteriores, volta para patamon */
        elementoImg.src = "./assets/img/patamon.png";
        /* Troca a imagem do digimon */
        elementoNome.innerText = "Patamon";
        /* Altera o nome */
        elementoEvolucao.innerText = "Criança";
        /* Altera a evolução */
        elementoAlterar.value = "primeiro";
        /* Altera valor do botão para primeiro */
    }
});

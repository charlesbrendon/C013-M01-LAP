var bot = document.getElementById("btnCadastrar");
var nome = document.getElementById("nome");
var tipo = document.getElementById("tipo");
var descricao = document.getElementById("descricao");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
var categoria = document.getElementById("categoria");
var habilidade = document.getElementById("habilidade");
var img = document.getElementById("imagem");

function validarCampos() {
  if (
    nome.value == "" ||
    tipo.value == "" ||
    descricao.value == "" ||
    altura.value == "" ||
    peso.value == "" ||
    categoria.value == "" ||
    habilidade.value == "" ||
    img.value == ""
  ) {
    bot.disabled = true;
  } else {
    bot.disabled = false;
  }
}

bot.addEventListener("click", abreModal);

function abreModal(e) {
  const modalEl = document.querySelector(".modal");
  modalEl.classList.add("visivel");
}

const fechar = document.querySelectorAll(".fechar-modal");
fechar.forEach((fecharEl) => fecharEl.addEventListener("click", fecharModal));

function fecharModal(e) {
  constmodalEl = document.querySelector(".modal");
  modalEl.classList.remove("visivel");
}
const botaoEnviar = document.getElementById("enviar");
const inputs = document.querySelectorAll(".inputs");
const span = document.querySelectorAll(".span");
const formulario = document.getElementById("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); //esse método, faz com que o form não recarregue a página
});

inputs.forEach((item, indice) => {
  botaoEnviar.addEventListener("click", function () {
    if (item.value === "") {
      item.classList.remove("campo-preenchido");
      item.classList.add("nao-preenchido");
      span[indice].classList.add("ativo");
    } else {
      item.classList.remove("nao-preenchido");
      item.classList.add("campo-preenchido");
      span[indice].classList.remove("ativo");
    }
  });
});
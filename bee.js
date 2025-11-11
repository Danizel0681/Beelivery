function mostrarMensagem() {
  alert("🐝 Bem-vindo à BeeLivery! Seu doce está a caminho!");
}

const botaoContraste = document.getElementById("toggleContraste");
botaoContraste.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});

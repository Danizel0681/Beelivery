function mostrarMensagem() {
  alert("🐝 a");
}

const botaoContraste = document.getElementById("toggleContraste");
botaoContraste.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});

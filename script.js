function alterarModo() {
  const btn = document.getElementById("modo");
  const body = document.body;
  
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    btn.innerText = "Modo Claro";
  } else {
    btn.innerText = "Modo Escuro";
  }
}

function consultarCEP() {
  let resultado = document.getElementById("resultado");

  resultado.style.display = "block";
}

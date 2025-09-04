function alterarModo() {
  let btn = document.getElementById("modo");
  let corpo = document.body;
  let titulo = document.getElementById("titulo");
  let secao = document.getElementsByTagName("section")[0];
  let rodape = document.getElementsByTagName("footer")[0];

  if (btn.innerText == "Modo Escuro") {
    btn.innerText = "Modo Claro";
    corpo.style.background = "rgb(32, 32, 32)";
    corpo.style.color = "white";
    titulo.style.color = "white";
    secao.style.background = "rgb(32, 32, 32)";
    secao.style.color = "white";
    secao.style.border = "2px solid white";
    rodape.style.color = "white";
  } else {
    btn.innerText = "Modo Escuro";
    corpo.style.background = "rgb(250, 249, 249)";
    corpo.style.color = "black";
    titulo.style.color = "black";
    secao.style.background = "rgb(255, 255, 255)";
    secao.style.color = "black";
    secao.style.border = "2px solid black";
    rodape.style.color = "black";
  }
}

function consultarCEP() {
  let resultado = document.getElementById("resultado");

  resultado.style.display = "block";
}

// Seleciona os elementos necessários
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
const divBtn = document.querySelector('.divbtn'); // Seleciona a div do botão

// Inicializa a página ocultando o botão
divBtn.style.display = 'none';

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // Desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    // Marcar o botão clicado como selecionado
    marcarBotaoSelecionado(botao);

    // Esconder a imagem anteriormente selecionada
    esconderImagemAtiva();

    // Mostrar a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice);

    // Esconder a informação anteriormente selecionada
    esconderInformacoesAtivas();

    // Mostrar a informação referente ao botão clicado
    mostrarInformacoes(indice);

    // Verifica se o botão clicado é o último
    if (indice === botoesCarrossel.length - 1) {
      divBtn.style.display = 'flex'; // Exibe o botão na última imagem
    } else {
      divBtn.style.display = 'none'; // Oculta o botão em todas as outras imagens
    }
  });
});

function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
  if (informacoes[indice]) { // Verifica se o elemento existe antes de acessar o classList
    informacoes[indice].classList.add("ativa");
  } else {
    console.error(`Elemento .informacoes no índice ${indice} não encontrado.`);
  }
}

function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  if (informacoesAtiva) { // Verifica se existe uma informação ativa
    informacoesAtiva.classList.remove("ativa");
  }
}

function mostrarImagemDeFundo(indice) {
  if (imagens[indice]) { // Verifica se o elemento existe antes de acessar o classList
    imagens[indice].classList.add("ativa");
  } else {
    console.error(`Elemento .imagem no índice ${indice} não encontrado.`);
  }
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".imagem.ativa");
  if (imagemAtiva) { // Verifica se existe uma imagem ativa
    imagemAtiva.classList.remove("ativa");
  }
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  if (botaoSelecionado) { // Verifica se existe um botão selecionado
    botaoSelecionado.classList.remove("selecionado");
  }
}

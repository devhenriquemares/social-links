const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {    
    botao.addEventListener("click", () => {
        
        esconderBotao();

        botao.classList.add("selecionado");

        removerImagemAtiva();

        imagens[indice].classList.add("ativa");

        esconderInformacoesAtivas();

        informacoes[indice].classList.add("ativa");
    });
});

function esconderBotao(){

    const botaoSelecionado = document.querySelector(".selecionado");
        
    botaoSelecionado.classList.remove("selecionado");
}

function removerImagemAtiva(){

    const imagemAtiva = document.querySelector(".ativa");

    imagemAtiva.classList.remove("ativa");
}

function esconderInformacoesAtivas(){
    
    const inforamacoesAtiva = document.querySelector(".informacoes.ativa");

    inforamacoesAtiva.classList.remove("ativa");
}
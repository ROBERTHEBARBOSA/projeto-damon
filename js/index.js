document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.imagem');
    const infos = document.querySelectorAll('.informacoes');
    const buttons = document.querySelectorAll('.botoes-carrossel .botao');
    const divBtn = document.querySelector('.divbtn');
    const lastIndex = images.length - 1;
    
    let currentIndex = 0;

    function showImage(index) {
        // Verifica se todos os elementos foram encontrados
        if (!divBtn || images.length === 0 || infos.length === 0 || buttons.length === 0) {
            console.error("Um ou mais elementos necessários não foram encontrados.");
            return;
        }
        
        // Atualiza a visibilidade das imagens e informações
        images.forEach((img, i) => {
            img.classList.toggle('ativa', i === index);
        });
        infos.forEach((info, i) => {
            info.classList.toggle('ativa', i === index);
        });
        buttons.forEach((btn, i) => {
            btn.classList.toggle('selecionado', i === index);
        });

        // Exibe o botão "Assistir AGORA" apenas na última página
        if (index === lastIndex) {
            divBtn.classList.add('ativa');
        } else {
            divBtn.classList.remove('ativa');
        }
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showImage(index);
        });
    });

    // Exibe a primeira imagem inicialmente
    showImage(currentIndex);
});

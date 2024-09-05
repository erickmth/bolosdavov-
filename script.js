document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const itemCount = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    let index = 0;

    function showSlide() {
        carouselItems.style.transform = translateX(-${index * itemWidth}px);
    }

    function nextSlide() {
        index = (index + 1) % itemCount;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + itemCount) % itemCount;
        showSlide();
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

   

    // Pausa o slide automático quando o usuário interage com o carrossel
    document.querySelector('.carousel').addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    document.querySelector('.carousel').addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 10000);
    });

    // Permite navegação por toque em dispositivos móveis
    let touchStartX = 0;

    document.querySelector('.carousel-wrapper').addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.querySelector('.carousel-wrapper').addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    });
});










document.addEventListener('DOMContentLoaded', function() {
    const quantidadeInputs = document.querySelectorAll('.quantidade');
    const totalGeralSpan = document.getElementById('total-geral');

    function atualizarTotal() {
        let totalGeral = 0;

        quantidadeInputs.forEach(input => {
            const quantidade = parseInt(input.value);
            const precoUnitario = parseFloat(input.getAttribute('data-preco'));
            const totalItem = quantidade * precoUnitario;

            // Atualiza o total do item
            input.closest('tr').querySelector('.total-item').textContent = R$ ${totalItem.toFixed(2)};

            // Adiciona ao total geral
            totalGeral += totalItem;
        });

        // Atualiza o total geral
        totalGeralSpan.textContent = R$ ${totalGeral.toFixed(2)};
    }

    // Adiciona eventos de mudança para atualizar o total
    quantidadeInputs.forEach(input => {
        input.addEventListener('input', atualizarTotal);
    });

    // Função para remover item
    document.querySelectorAll('.remover-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('tr').remove();
            atualizarTotal(); // Atualiza total após remoção
        });
    });

    // Inicializa o total
    atualizarTotal();
});

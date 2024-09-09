document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const itemCount = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    let index = 0;
    let autoSlide;

    function showSlide() {
        carouselItems.style.transform = `translateX(-${index * itemWidth}px)`;
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

    // Inicia o slide automático
    autoSlide = setInterval(nextSlide, 10000);

    // Pausa o slide automático quando o usuário interage com o carrossel
    document.querySelector('.carousel').addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    document.querySelector('.carousel').addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 10000);
    });

    // Variáveis para controle de arrastar/deslizar
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    // Função para mover o carrossel
    function setSliderPosition() {
        carouselItems.style.transform = `translateX(${currentTranslate}px)`;
    }

    // Função de animação para uma experiência suave
    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    // Adicionar eventos de mouse e toque
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    carouselWrapper.addEventListener('mousedown', dragStart);
    carouselWrapper.addEventListener('mouseup', dragEnd);
    carouselWrapper.addEventListener('mousemove', dragAction);
    carouselWrapper.addEventListener('mouseleave', dragEnd);

    carouselWrapper.addEventListener('touchstart', dragStart);
    carouselWrapper.addEventListener('touchend', dragEnd);
    carouselWrapper.addEventListener('touchmove', dragAction);

    function dragStart(event) {
        isDragging = true;
        startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        currentTranslate = prevTranslate;
        animationID = requestAnimationFrame(animation);
        carouselItems.style.transition = 'none';

        // Adiciona a classe para desativar a seleção de texto
        carouselWrapper.classList.add('dragging');
    }

    function dragEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);

        // Mover para o próximo ou anterior slide dependendo da distância
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && index < itemCount - 1) {
            nextSlide();
        } else if (movedBy > 100 && index > 0) {
            prevSlide();
        } else {
            showSlide();
        }

        prevTranslate = currentTranslate;
        carouselItems.style.transition = 'transform 0.3s ease';

        // Remove a classe para restaurar a seleção de texto
        carouselWrapper.classList.remove('dragging');
    }

    function dragAction(event) {
        if (isDragging) {
            const currentPosition = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
            const movedBy = currentPosition - startX;
            currentTranslate = prevTranslate + movedBy;
        }
    }
});

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

    // Permite navegação por toque em dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.carousel-wrapper').addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        carouselItems.style.transition = 'none';
    });

    document.querySelector('.carousel-wrapper').addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
        const distanceMoved = touchEndX - touchStartX;
        carouselItems.style.transform = `translateX(${-index * itemWidth + distanceMoved}px)`;
    });

    document.querySelector('.carousel-wrapper').addEventListener('touchend', (e) => {
        const distanceMoved = touchEndX - touchStartX;
        carouselItems.style.transition = 'transform 0.3s ease';

        if (distanceMoved < -50) {
            nextSlide();
        } else if (distanceMoved > 50) {
            prevSlide();
        } else {
            showSlide();
        }
    });
});

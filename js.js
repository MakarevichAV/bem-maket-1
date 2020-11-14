let portfolioItems = document.querySelector('.portfolio__items');
portfolioItems.style.height = `${portfolioItems.clientWidth * 0.6333}px`;
window.addEventListener('resize', () => {
    portfolioItems.style.height = `${portfolioItems.clientWidth * 0.6333}px`;
});

//slider
let sliderItemsContainer = document.querySelector('.slider__items'),
    arrowLeft = document.querySelector('.slider__arrow--left'),
    arrowRight = document.querySelector('.slider__arrow--right'),
    slideItems = document.querySelectorAll('.slider__item'),
    sliderContainer = document.querySelector('.slider');

sliderItemsContainer.style.width = `${slideItems.length + 1}00%`

let cloneSlide = slideItems[0].cloneNode(true);
sliderItemsContainer.append(cloneSlide);

let i = 0;
arrowRight.addEventListener('click', () => {
    if (i === slideItems.length) {
        sliderItemsContainer.style.transition = 'none';
        sliderItemsContainer.style.left = 0;
        i = 0;
        setTimeout(() => {
            arrowRight.click();
        }, 0);
    } else {
        sliderItemsContainer.style.transition = '0.5s';
        i++;
        sliderItemsContainer.style.left = `-${i}00%`;
    }
});
arrowLeft.addEventListener('click', () => {
    if (i === 0) {
        sliderItemsContainer.style.transition = 'none';
        i = slideItems.length;
        sliderItemsContainer.style.left = `-${i}00%`;
        setTimeout(() => {
            arrowLeft.click();
        }, 0);
    } else {
        i--;
        sliderItemsContainer.style.transition = '0.5s';
        sliderItemsContainer.style.left = `-${i}00%`;
    }
});
let portfolioItems = document.querySelector('.portfolio__items');
let portfolioItemsMobile = document.querySelector('.portfolio__items-mobile');
function portfolioСhanges() {
    portfolioItems.style.height = `${portfolioItems.clientWidth * 0.6333}px`;
    if (window.innerWidth <= 750) {
        portfolioItemsMobile.style.display = 'flex';
        portfolioItems.style.display = 'none';
    } else {
        portfolioItemsMobile.style.display = 'none';
        portfolioItems.style.display = 'flex';
    }
}
portfolioСhanges();
window.addEventListener('resize', () => {
    portfolioСhanges();
});

//slider
let sliderItemsContainer = document.querySelector('.slider__items'),
    arrowLeft = document.querySelector('.slider__arrow--left'),
    arrowRight = document.querySelector('.slider__arrow--right'),
    slideItems = document.querySelectorAll('.slider__item'),
    sliderContainer = document.querySelector('.slider'),
    sliderDots = document.querySelectorAll('.slider__dot');

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
        sliderDots[i].classList.remove('slider__dot--active');
        i++;
        sliderItemsContainer.style.transition = '0.5s';
        sliderItemsContainer.style.left = `-${i}00%`;
    }
    let j = (i === slideItems.length) ? 0 : i;
    sliderDots[j].classList.add('slider__dot--active');
});
arrowLeft.addEventListener('click', () => {
    if (i === 0) {
        sliderDots[i].classList.remove('slider__dot--active');
        sliderItemsContainer.style.transition = 'none';
        i = slideItems.length;
        sliderItemsContainer.style.left = `-${i}00%`;
        // sliderDots[i - 1].classList.add('slider__dot--active');
        setTimeout(() => {
            arrowLeft.click();
        }, 0);
    } else {
        i === slideItems.length ?
            sliderDots[i - 1].classList.remove('slider__dot--active') :
            sliderDots[i].classList.remove('slider__dot--active');
        i--;
        sliderItemsContainer.style.transition = '0.5s';
        sliderItemsContainer.style.left = `-${i}00%`;
    }
    let j = (i === slideItems.length) ? i - 1 : i;
    sliderDots[j].classList.add('slider__dot--active');
});

// Выплывающее меню
let menuBtn = document.querySelector('.menu__btn'),
    menuCrose = document.querySelector('.menu__crose'),
    menuListMobile = document.querySelector('.menu__list-mobile');

menuBtn.addEventListener('click', () => {
    menuListMobile.style.right = '0';
});
menuCrose.addEventListener('click', () => {
    menuListMobile.style.right = '-100%';
});

// Выплывающее меню портфолио
let menuSelect = document.querySelector('.menu__select'),
    portfolioNavList = document.querySelector('.portfolio__nav-list'),
    menuSelectArrow = document.querySelector('.menu__select-arrow'),
    portfolioNavItems = document.querySelectorAll('.portfolio__nav-item'),
    menuSelectOption = document.querySelector('.menu__select-option');

document.addEventListener('click', (e) => {
    if (e.target === menuSelect ||
        e.target === menuSelectArrow ||
        e.target === menuSelectOption) {
        portfolioNavList.style.height = '290px';
        menuSelectArrow.innerHTML = '&#9650;';
    } else {
        portfolioNavList.style.height = '0';
        menuSelectArrow.innerHTML = '&#9660;';
        portfolioNavItems.forEach((val, ind) => {
            let link = val.querySelector('.portfolio__nav-link');
            if (e.target === val || e.target === link) {
                menuSelectOption.innerHTML = e.target.innerText;
            }
        })
    }
});
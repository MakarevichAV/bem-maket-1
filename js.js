let portfolioItems = document.querySelector('.portfolio__items');
portfolioItems.style.height = `${portfolioItems.clientWidth * 0.6333}px`;
window.addEventListener('resize', () => {
    portfolioItems.style.height = `${portfolioItems.clientWidth * 0.6333}px`;
});
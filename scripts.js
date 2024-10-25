let currentIndex = 0;
const slides = Array.from(document.querySelectorAll('.slide'));
const totalSlides = slides.length;
const container = document.querySelector('.slides-container');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlides();
});

function updateSlides() {
    const offset = -100 * currentIndex;
    container.style.transition = 'transform 0.7s ease-in-out';
    container.style.transform = `translateX(${offset}%)`;
}

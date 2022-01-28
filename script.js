const filterBtn = document.querySelector('.filter__icon');
const fitterBottom = document.querySelector('.filter__bottom');

filterBtn.addEventListener('click', () => {
    fitterBottom.classList.toggle('filter__bottom_open');
});
document.querySelector('.open-btn').addEventListener('click', () => {
    const cover = document.querySelector('.cover');
    const paper = document.querySelector('.paper');

    // Añadir clases para abrir la carta
    cover.classList.add('open-cover');
    paper.classList.add('open-paper');
});

document.querySelector('.close-btn').addEventListener('click', () => {
    const cover = document.querySelector('.cover');
    const paper = document.querySelector('.paper');

    // Añadir clases para cerrar la carta
    cover.classList.remove('open-cover');
    paper.classList.remove('open-paper');
});

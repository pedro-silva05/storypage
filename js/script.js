const btnCards = document.querySelectorAll(".card");

btnCards.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        card.classList.toggle("virada");
        card.classList.add("interagido");
        verificarTodos();
    });
});

const imgBottomArray = [
    document.querySelector('#ft-lt9'),
    document.querySelector('#ft-lt12'),
    document.querySelector('#ft-lt14'),
    document.querySelector('#ft-lt16'),
    document.querySelector('#ft-lt20'),
    document.querySelector('#ft-lt24')
];

const imgRigthArray = [
    document.querySelector('#ft-lt11'),
    document.querySelector('#ft-lt13'),
    document.querySelector('#ft-lt18'),
    document.querySelector('#ft-lt22'),
    document.querySelector('#ft-lt25')
];

const imgLeftArray = [
    document.querySelector('#ft-lt10'),
    document.querySelector('#ft-lt15'),
    document.querySelector('#ft-lt19'),
    document.querySelector('#ft-lt21'),
    document.querySelector('#ft-lt23')
];

const imgTop = document.querySelector('#ft-lt17');

ScrollReveal().reveal(imgBottomArray, {
    distance: '300px',
    origin: 'bottom',
    duration: 1500,
    delay: 300,
    reset: true,
    mobile: true
});

ScrollReveal().reveal(imgRigthArray, {
    distance: '500px',
    origin: 'rigth',
    duration: 1500,
    delay: 400,
    reset: true,
    mobile: true
});

ScrollReveal().reveal(imgLeftArray, {
    distance: '500px',
    origin: 'left',
    duration: 1500,
    delay: 300,
    reset: true,
    mobile: true
});

ScrollReveal().reveal(imgTop, {
    distance: '500px',
    origin: 'top',
    duration: 1500,
    delay: 400,
    reset: true,
    mobile: true
}); 
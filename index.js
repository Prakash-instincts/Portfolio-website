var typed = new Typed(".multiple-text", {
    strings: ["Python Developer", "Backend Developer"],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    
    loop: true
})

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});





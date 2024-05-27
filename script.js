let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex); 
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
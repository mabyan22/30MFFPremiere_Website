// initially call showSlides with index 0
let slideIndex = 0;
showSlides(slideIndex);

//changeSlide calls showSlides with change in index
function changeSlide(n) {
    showSlides(slideIndex += n);
}

//showSlides function changes the display attribute of images
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

//showSlides after HTML displays
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex); 
});

//scrolling makes the navigation bar transparent
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
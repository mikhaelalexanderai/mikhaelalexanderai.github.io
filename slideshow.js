let slideIndex = 1;
let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
showSlides(slideIndex);
slideInterval = setInterval(() => plusSlides(1), 4000);

document.querySelector(".prev").addEventListener("click", () => { plusSlides(-1); resetTimer(); });
document.querySelector(".next").addEventListener("click", () => { plusSlides(1); resetTimer(); });

const dots = document.querySelectorAll(".dot");
dots.forEach(dot => {
dot.addEventListener("click", function () {
const index = parseInt(this.getAttribute("data-index"));
currentSlide(index);
resetTimer();
});
});
});

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

if (n > slides.length) slideIndex = 1;
if (n < 1) slideIndex=slides.length; slides.forEach(s=> { s.style.display = "none"; });
    dots.forEach(d => d.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    }

    function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => plusSlides(1), 4000);
    }

// Toggle & Responsive Navigation
const navSlide = () => {
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

// Klik burger → buka/tutup nav
burger.addEventListener("click", (e) => {
e.stopPropagation();
burger.classList.toggle("toggle-burger");
nav.classList.toggle("nav-active");
});

// Klik di luar nav → tutup nav
document.addEventListener("click", (e) => {
if (!nav.contains(e.target) && !burger.contains(e.target)) {
nav.classList.remove("nav-active");
burger.classList.remove("toggle-burger");
}
});

// Klik link di nav → tutup nav
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("nav-active");
burger.classList.remove("toggle-burger");
});
});
};

navSlide();

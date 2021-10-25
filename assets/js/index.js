// Nav burger selections
const topBurger = document.getElementById("burger-menu");
const bottomBurger = document.getElementById("burger-menu-x");
const navLinks = document.getElementById("top-ul");

topBurger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  topBurger.classList.toggle("hide");
  bottomBurger.classList.toggle("show");
});

bottomBurger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  topBurger.classList.toggle("hide");
  bottomBurger.classList.toggle("show");
});

// Project Selections
const dataBtn = document.getElementById("data-button");
const frontendBtn = document.getElementById("frontend-button");
const dataProjects = document.getElementById("data-projects");
const frontendProjects = document.getElementById("frontend-projects");

dataBtn.addEventListener("click", () => {
  dataBtn.classList.toggle("back");
  frontendBtn.classList.toggle("back");
  dataProjects.classList.toggle("hide");
  frontendProjects.classList.toggle("hide");
});

frontendBtn.addEventListener("click", () => {
  dataBtn.classList.toggle("back");
  frontendBtn.classList.toggle("back");
  dataProjects.classList.toggle("hide");
  frontendProjects.classList.toggle("hide");
});

// Slider
var data_swiper = new Swiper(".data-swiper", {
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});

// Slider
var frontend_swiper = new Swiper(".frontend-swiper", {
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});
// Nav burger selections

const topBurger = document.getElementById("burger-menu");
const bottomBurger = document.getElementById("burger-menu-x");
const navLinks = document.getElementById("top-ul");

topBurger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  topBurger.classList.toggle("show");
  bottomBurger.classList.toggle("show");
});

bottomBurger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  topBurger.classList.toggle("show");
  bottomBurger.classList.toggle("show");
});
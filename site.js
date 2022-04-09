const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

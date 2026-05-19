const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.add("active");

  document.body.style.overflow = "hidden";

});

closeMenuBtn.addEventListener("click", () => {

  mobileMenu.classList.remove("active");

  document.body.style.overflow = "auto";

});
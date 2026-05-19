// =========================
// MOBILE MENU
// =========================

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

// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  revealElements.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// =========================
// THEME SYSTEM
// =========================

const themeToggleBtn =
  document.querySelector(
    ".theme-toggle-btn"
  );

// LOAD SAVED THEME

const savedTheme =
  localStorage.getItem("theme");

if(savedTheme === "dark"){

  document.body.classList.add(
    "dark-mode"
  );

}

// TOGGLE THEME

themeToggleBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark-mode"
    );

    // SAVE THEME

    if(
      document.body.classList.contains(
        "dark-mode"
      )
    ){

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      localStorage.setItem(
        "theme",
        "light"
      );

    }

});
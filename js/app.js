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

// =========================
// HERO STATS COUNTER
// =========================

const counters = document.querySelectorAll(".stat-box h3");

const startCounter = (counter) => {

  const targetText = counter.innerText;

  const target = parseInt(targetText);

  let count = 0;

  const speed = target / 80;

  const updateCounter = () => {

    count += speed;

    if(count < target){

      counter.innerText =
        Math.floor(count) + "+";

      requestAnimationFrame(updateCounter);

    }else{

      counter.innerText = target + "+";

    }

  };

  updateCounter();

};

/* =========================
   INTERSECTION OBSERVER
========================= */

const counterObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        startCounter(entry.target);

        counterObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.5
  }

);

/* OBSERVE ALL COUNTERS */

counters.forEach((counter) => {

  counterObserver.observe(counter);

});

// =========================
// GSAP + SCROLLTRIGGER
// =========================

gsap.registerPlugin(ScrollTrigger);

// =========================
// LENIS SMOOTH SCROLL
// =========================

const lenis = new Lenis({
  duration: 1.2,

  smoothWheel: true,

  smoothTouch: false,

  easing: (t) =>
    Math.min(
      1,
      1.001 - Math.pow(2, -10 * t)
    ),
});

function raf(time){

  lenis.raf(time);

  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// =========================
// HERO PARALLAX
// =========================

gsap.to(".hero-image",{

  y: 80,

  ease: "none",

  scrollTrigger:{
    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 1.5,
  }

});

// =========================
// HERO TEXT REVEAL
// =========================

gsap.from(".hero-content > *",{

  y: 80,

  opacity: 0,

  duration: 1,

  stagger: 0.15,

  ease: "back.out(1.7)"
});

// =========================
// SERVICES TITLE
// =========================

gsap.from(".services-top > *",{

  scrollTrigger:{
    trigger: ".services-top",

    start: "top 85%",
  },

  y: 60,

  opacity: 0,

  stagger: 0.2,

  duration: 1.1,

  ease: "power4.out"
});

// =========================
// SERVICE CARDS
// =========================

gsap.from(".service-card",{

  scrollTrigger:{
    trigger: ".services-grid",

    start: "top 80%",
  },

  y: 120,

  opacity: 0,

  rotate: 4,

  stagger: 0.14,

  duration: 1.2,

  ease: "elastic.out(1,0.75)"
});

// =========================
// CARD HOVER TILT
// =========================

document.querySelectorAll(".service-card")
.forEach((card)=>{

  card.addEventListener(
    "mousemove",
    (e)=>{

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        ((x / rect.width)-0.5)*10;

      const rotateX =
        ((y / rect.height)-0.5)*-10;

      gsap.to(card,{
        rotateY,
        rotateX,

        transformPerspective: 1000,

        duration: 0.4,

        ease: "power2.out"
      });

  });

  card.addEventListener(
    "mouseleave",
    ()=>{

      gsap.to(card,{
        rotateY:0,
        rotateX:0,

        duration:0.5,

        ease:"power3.out"
      });

  });

});

// =========================
// ICON WIGGLE
// =========================

document.querySelectorAll(".service-icon")
.forEach((icon)=>{

  icon.addEventListener(
    "mouseenter",
    ()=>{

      gsap.fromTo(icon,
      {
        rotate:-8
      },
      {
        rotate:8,

        duration:0.12,

        repeat:5,

        yoyo:true,

        ease:"power1.inOut"
      });

  });

});

// =========================
// TEXT REVEAL LINES
// =========================

gsap.utils.toArray(
  ".services-top h2"
).forEach((title)=>{

  gsap.from(title,{

    scrollTrigger:{
      trigger:title,

      start:"top 85%",
    },

    y:100,

    opacity:0,

    duration:1.4,

    ease:"expo.out"
  });

});

// =========================
// IMAGE FLOAT EFFECT
// =========================

gsap.to(".floating-card",{

  y:-18,

  duration:2.5,

  repeat:-1,

  yoyo:true,

  ease:"sine.inOut",

  stagger:0.3
});
import { beforeLinkAnimation, navAnimation } from "./gsap.js";

let header__toggle__dashes = document.querySelectorAll(".header__toggle div");
let header__toggle = document.querySelector(".header__toggle");
let header__menu = document.querySelector(".header__menu");

header__toggle.addEventListener("click", () => {
  header__toggle__dashes.forEach(dash => {
    dash.classList.toggle("open");
  });

  navAnimation();
  beforeLinkAnimation();

  header__menu.classList.toggle("slide");
});

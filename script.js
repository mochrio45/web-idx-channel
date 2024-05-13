// GENERAL
const header = document.querySelector(".header");
const media = document.querySelectorAll(".media");
const tabs = document.querySelectorAll(".tab");
const Mediafoto = document.querySelector(".media-foto-container");

// BUTTONS
const btnNav = document.querySelector(".btn-mobile-nav");
const btn = document.querySelectorAll(".btn");

let pressed = false;
let startX = 0;

Mediafoto.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.clientX;
  Mediafoto.style.cursor = "grabbing";
});

Mediafoto.addEventListener("mouseleave", (e) => {
  pressed = false;
});

window.addEventListener("mouseup", (e) => {
  pressed = false;
  startX = e.clientX;
  Mediafoto.style.cursor = "grab";
});

Mediafoto.addEventListener("mousemove", (e) => {
  if (!pressed) {
    return;
  }
  Mediafoto.scrollLeft += startX - e.clientX;
});

btnNav.addEventListener("click", () => {
  if (header.classList.contains("nav-open")) {
    header.classList.remove("nav-open");
  } else {
    header.classList.add("nav-open");
  }
});

btn.forEach((b) => {
  b.addEventListener("click", () => {
    // Slider foto
    const direction = b.classList.contains("btn-back") ? -1 : 1;
    const scrollAmount = Mediafoto.clientWidth * direction;
    Mediafoto.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Active button
    document.querySelector(".active-btn")?.classList.remove("active-btn");
    b.classList.add("active-btn");
  });
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");

    media.forEach((m) => {
      m.classList.remove("active-media");
    });
    media[index].classList.add("active-media");
  });
});

const imagesContent = document.querySelector(".imgs-list");
const slideBtn = document.querySelectorAll(".slide-btn");
const tabMedia = document.querySelectorAll(".tab-media");
const tabContent = document.querySelectorAll(".tab-content");
const buttonContainer = document.querySelector(".button-container");
const dotSlide = document.querySelectorAll(".dot-slide");
const containerBtn = document.querySelector(".container-button");
tabMedia.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove active tabs
    tabMedia.forEach((t) => t.classList.remove("active-tab"));
    tabContent.forEach((tc) => tc.classList.remove("active-tab"));

    // Add active tabs
    tabMedia[index].classList.add("active-tab");
    tabContent[index].classList.add("active-tab");

    if (tabMedia[index].classList.contains("tab--button-1")) {
      containerBtn.classList.add("active-buttons");
    } else {
      containerBtn.classList.remove("active-buttons");
    }
  });
});

slideBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active button
    document.querySelector(".active-btn")?.classList.remove("active-btn");
    btn.classList.add("active-btn");

    // Slide images
    const direction = btn.classList.contains("previous-btn") ? -1 : 1;
    const scrollAmount = imagesContent.clientWidth * direction;
    imagesContent.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

dotSlide.forEach((dot) => {
  dot.addEventListener("click", () => {
    document.querySelector(".active-dot")?.classList.remove("active-dot");
    dot.classList.add("active-dot");
  });
});

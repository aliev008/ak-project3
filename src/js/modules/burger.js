export const burger = (triggerSelector, menuSelector) => {
  const burgerIcon = document.querySelector(triggerSelector),
        burgerMenu = document.querySelector(menuSelector),
        screen= window.screen;

  burgerIcon.addEventListener("click", () => {
    if (screen.availWidth < 993) {
      burgerMenu.classList.add("animated", "fadeIn");
      burgerMenu.style.display === "none"
        ? (burgerMenu.style.display = "block")
        : (burgerMenu.style.display = "none");
    }
  });

  window.addEventListener("resize", () => {
    if (screen.availWidth > 992) {
      burgerMenu.style.display = "none";
      burgerMenu.classList.remove("active");
    }
  });
};

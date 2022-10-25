export const burger = (triggerSelector, menuSelector) => {
  const burgerIcon = document.querySelector(triggerSelector),
        burgerMenu = document.querySelector(menuSelector),
        mobileBreakpoint = 993;

  burgerIcon.addEventListener("click", () => {
    if (window.screen.availWidth < mobileBreakpoint) {
      burgerMenu.classList.add("animated", "fadeIn");
      burgerMenu.style.display === "none"
        ? (burgerMenu.style.display = "block")
        : (burgerMenu.style.display = "none");
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth > mobileBreakpoint - 1) {
      burgerMenu.style.display = "none";
      burgerMenu.classList.remove("active");
    }
  });
};

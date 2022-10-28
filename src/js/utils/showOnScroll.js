export const showOnScroll = (elemSelector) => {
  const elem = document.querySelector(elemSelector);

  elem.classList.add("animated");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      elem.classList.add("fadeIn");
      elem.classList.remove("fadeOut");
    } else if (elem.classList.contains("fadeIn")) {
        elem.classList.add("fadeOut");
        elem.classList.remove("fadeIn");
    }
  });
};

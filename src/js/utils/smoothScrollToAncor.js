export const smoothScrollToAncor = () => {
  const triggers = document.querySelectorAll('[href^="#"]');

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      const destination = document.querySelector(this.hash);
      e.preventDefault();
      destination.scrollIntoView({ behavior: "smooth" });
    });
  })

};

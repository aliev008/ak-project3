export const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    typeAll = wrapper.querySelectorAll(".all"),
    noExamplesBlock = document.querySelector(".portfolio-no");

  // Accessibilty for type tabs
  items.forEach((item) => {
    item.tabIndex = 0;
  });

  noExamplesBlock.style.display = "none";

  // Main types filter function
  const filterTypes = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const target = e.target;

      if (target && target.tagName === "LI") {
        items.forEach((item) => {
          item.classList.remove("active");
        });

        // Getting type name
        const selectedType = target.classList.value;
        const selectedTypeExamples = wrapper.querySelectorAll(`.${selectedType}`);
        target.classList.add("active");

        typeAll.forEach((item) => {
          item.classList.add("animated", "fadeIn");
          item.style.display = "none";
        });

        if (selectedTypeExamples.length) {
          selectedTypeExamples.forEach((item) => {
            item.style.display = "block";
          });
        } else {
          noExamplesBlock.classList.add("animated", "fadeIn");
          noExamplesBlock.style.display = "block";
        }
      }
    }
  };

  menu.addEventListener("click", filterTypes);
  menu.addEventListener("keydown", filterTypes);
};

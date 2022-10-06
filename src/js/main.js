import { forms, modals, sliders} from "./modules/index"; 

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  sliders({
    slides: ".feedback-slider-item",
    prev: ".main-prev-btn",
    next: ".main-next-btn",
  });
  sliders({
    slides: ".main-slider-item",
    direction: "vertical",
  });
  forms();
});

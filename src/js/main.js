import { forms, modals, sliders, mask} from "./modules/index"; 
import { checkTextInputs } from "./utils/index"; 

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
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
});

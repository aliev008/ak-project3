import { forms, modals, sliders, mask, calc, filter, accordion, burger} from "./modules";
import { checkTextInputs, showMoreStyles, changeModalState, changeSizeImgOnHover } from "./utils";

window.addEventListener("DOMContentLoaded", async () => {
  "use strict";

  const state = {};

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
  forms(state);
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc({
    size: "#size",
    material: "#material",
    options: "#options",
    promocode: ".promocode",
    result: ".calc-price",
  });
  changeModalState(state);
  filter();
  changeSizeImgOnHover();
  accordion();
  burger('.header .burger', '.header .burger-menu');
});

import { checkNumInputs } from "./checkNumInputs";
import { getData } from "../services/requests";

export const changeModalState = (state) => {
  const sizeBlock = document.querySelectorAll("#size"),
        materialBlock = document.querySelectorAll("#material"),
        optionsBlock = document.querySelectorAll("#options"),
        promocodeBlock = document.querySelectorAll(".promocode"),
        resultBlock = document.querySelector(".calc-price");


    // Default State setup
  state["Summary cost"] = 0;

  const bindActionToElems = (event, elems, prop) => {
    elems.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case "INPUT":
              if (elem.value === "IWANTPOPART") {
                state[prop] = elem.value;
              }
            break;
          case "SELECT":
            state[prop] = elem.value;
            break;
        }
        state['Summary cost'] = resultBlock.textContent;
      });
    });
  };

  bindActionToElems("change", sizeBlock, "size");
  bindActionToElems("change", materialBlock, "material");
  bindActionToElems("change", optionsBlock, "options");
  bindActionToElems("input", promocodeBlock, "promocode");
};

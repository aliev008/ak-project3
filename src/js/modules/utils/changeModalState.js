import { checkNumInputs } from "../utils/checkNumInputs";

export const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox"),
    windowProfileTypes = document.querySelectorAll(".checkbox-custom");

    // Default State setup
    state["form"] = 0;

  windowProfileTypes.forEach((type, index) => {
    type.setAttribute("tabindex", 0);
    type.style.outlineColor = "#ffc600";
    type.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        windowProfile.forEach((box) => {
          box.checked = false;
        });

        windowProfile[index].checked = true;
        index === 0
          ? (state["profile"] = "Холодное")
          : (state["profile"] = "Тёплое");
      }
    });
  });

  windowForm.forEach((window, index) => {
    window.setAttribute("tabindex", 0);
    window.style.outlineColor = "#ffc600";
    window.addEventListener("keydown", (event) => {
      if (event.key === 'Enter') {
        state["form"] = index;
      }
    });
  });

  checkNumInputs("#width");
  checkNumInputs("#height");

  const bindActionToElems = (event, elems, prop) => {
    elems.forEach((elem, i) => {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (elem.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Тёплое");
              elems.forEach((box, j) => {
                box.checked = false;
                box.required = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = elem.value;
            }
            break;
          case "SELECT":
            state[prop] = elem.value;
            break;
        }
      });
    });
  };

  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

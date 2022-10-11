export const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });

    input.addEventListener("change", (e) => {
      if (e.target.value.match(/[^а-яё 0-9]/gi)) {
        e.target.value = "";
        input.classList.add('input-inactive');
        // var style = document.createElement('style');
        // style.innerHTML = ".input-inactive:autofill {background-color: blue !important};"
        // document.head.appendChild(style);
      }
    });
  });
};

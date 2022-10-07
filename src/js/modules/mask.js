export const mask = (selector) => {
  const setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  function createMask(event) {
    const matrix = "+7 (___) ___ __ __";
    let i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, (symbol) => {
      return /[_\d]/g.test(symbol) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : symbol;
    });

    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};

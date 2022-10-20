import { getCalcValues } from "../utils/getCalcValues";

export const calc = ({ size, material, options, promocode, result }) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  const calcFunction = async () => {
    const sum = Math.round(
      (await getCalcValues(size)) * (await getCalcValues(material)) +
        (await getCalcValues(options))
    );

    if (sizeBlock.value === "" || materialBlock.value === "") {
      resultBlock.textContent = "Пожауйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunction);
  materialBlock.addEventListener("change", calcFunction);
  optionsBlock.addEventListener("change", calcFunction);
  promocodeBlock.addEventListener("input", calcFunction);
};

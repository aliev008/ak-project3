import { getData } from "../services/requests";

export const getCalcValues = async (selector) => {
  let result;
  try {
    const data = await getData("./assets/db.json");
    data.calcValues.forEach((item) => {
      if (item.id === selector) {
        result = item.values[document.querySelector(selector).value];
      }
    });
  } catch (error) {
    console.log(error);
  }

  return await result;
};

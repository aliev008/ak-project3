export const resetState = (state) => {
  for (let key in state) {
    delete state[key];
  }
};

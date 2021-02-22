const reducer = (state = 1, action) => {
  switch (action.type) {
    case "SET_STEP": {
      return action.step;
    }
    default: {
      return state;
    }
  }
};

export const setStep = (step) => ({
  type: "SET_STEP",
  step,
});

export const getStep = (state) => state.step;

export default reducer;

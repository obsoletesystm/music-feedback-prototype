import { createSelector } from "reselect";

const initialState = {
  basePrice: 15,
  expeditedPrice: 25,
  quantity: 1,
  expedited: 0,
  taxRate: 0.15,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUANTITY": {
      return { ...state, quantity: action.quantity };
    }
    case "SET_EXPEDITED": {
      return { ...state, expedited: action.expedited };
    }
    default: {
      return state;
    }
  }
};

export const getQuantity = (state) => state.orderDetails.quantity;
export const getExpedited = (state) => state.orderDetails.expedited;
export const getBasePrice = (state) => state.orderDetails.basePrice;
export const getExpeditedPrice = (state) => state.orderDetails.expeditedPrice;
export const getTaxRate = (state) => state.orderDetails.taxRate;

export const getSubtotal = createSelector(
  [getQuantity, getExpedited, getBasePrice, getExpeditedPrice],
  (songs, expeditedSongs, basePrice, expeditedPrice) =>
    songs * basePrice + expeditedSongs * expeditedPrice
);

export const modifyQuantity = (change) => (dispatch, getState) => {
  const state = getState();
  const qty = getQuantity(state) + change;
  dispatch({
    type: "SET_QUANTITY",
    quantity: qty,
  });
};

export const modifyExpedited = (change) => (dispatch, getState) => {
  const state = getState();
  const qty = getExpedited(state) + change;
  dispatch({
    type: "SET_EXPEDITED",
    expedited: qty,
  });
};

export default reducer;

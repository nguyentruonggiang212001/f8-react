import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
  UPDATE_PRODUCT,
} from "../action/productAction";

const inititalState = {
  products: [],
};

export const productReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

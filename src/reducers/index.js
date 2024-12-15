import { combineReducers } from "redux";
import { productReducer } from "./productReducers";
import { countReducer } from "./countReducers";

const rootReducer = combineReducers({
  products: productReducer,
  count: countReducer,
});

export default rootReducer;

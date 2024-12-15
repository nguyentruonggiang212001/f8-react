import { legacy_createStore as createStore } from "redux";
import { countReducer } from "./../reducers/countReducers";
import rootReducer from "../reducers";

// export const store = createStore(countReducer);

export const store = createStore(rootReducer);

import { combineReducers } from "redux";
import user from "./userReducer";
import cart from "./cartReducer";

export const rootReducer = combineReducers({
  user,
  cart,
});

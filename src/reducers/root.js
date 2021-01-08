import { combineReducers } from "redux";
import user from "./user.reducer";
import cart from "./cart.reducer";
import address from './address.reducer';

export const rootReducer = combineReducers({
  user,
  cart,
  address
});

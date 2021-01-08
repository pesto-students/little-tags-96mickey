// eslint-disable-next-line import/no-anonymous-default-export
import { ADD_DELIVERY_ADDRESS, CHANGE_DEFAULT_DELIVERY_ADDRESS } from "./types.constants";

const initialState = {
  addressList: [],
  default: {

  }
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DELIVERY_ADDRESS:
      const newAddress = {
        ...action.payload
      };

      return {
        ...state,
        addressList: [...state.addressList, newAddress]
      };

    case CHANGE_DEFAULT_DELIVERY_ADDRESS:
      return {...state}      

    default:
      return state;
  }
};

export default addressReducer;

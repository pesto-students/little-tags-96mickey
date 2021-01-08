// eslint-disable-next-line import/no-anonymous-default-export
import { ADD_DELIVERY_ADDRESS, CHANGE_DEFAULT_DELIVERY_ADDRESS } from "./types.constants";

const initialState = {
  addressList: [{
    email: "johndoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    line1: "#221B Baker street",
    line2: "St Marylebone",
    phone: "7777227777",
    pin: "123333",
    state: "London"
  }],
  default: {
    email: "johndoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    line1: "#221B Baker street",
    line2: "St Marylebone",
    phone: "7777227777",
    pin: "123333",
    state: "London"
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
      return {
        ...state,
        default: {
          ...action.payload
        }
      }      

    default:
      return state;
  }
};

export default addressReducer;

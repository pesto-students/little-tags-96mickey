// eslint-disable-next-line import/no-anonymous-default-export
import { LOGOUT, LOGGED_IN } from "./types.constants";

const initialState = {
  userdetails: {
    username: "",
  },
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userdetails: {},
      };

    case LOGGED_IN:
      return {
        ...state,
        userdetails: action.payload,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default reducer;

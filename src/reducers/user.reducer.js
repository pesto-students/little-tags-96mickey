// eslint-disable-next-line import/no-anonymous-default-export
import {
  LOGOUT,
  LOGGED_IN,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
} from "./types.constants";

const initialState = {
  userdetails: {
    username: "",
  },
  isLoggedIn: false,
  isLoginModalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: true,
      };

    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: false,
      };

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

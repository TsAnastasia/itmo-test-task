import * as types from "../types";

const token = localStorage.getItem("token");

const initialStore = { isAuth: !!token, user: null, token };

export default function auth(state = initialStore, action) {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.RECIEVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case types.SIGNIN_FAILURE:
    case types.RECIEVE_AUTH_FAILURE:
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: "",
      };
    default:
      return state;
  }
}

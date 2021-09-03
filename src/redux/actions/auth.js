import { authorize } from "../../utils/authApi";
import * as types from "../types";

export function signIn(values) {
  return (dispatch) => {
    const { isRemember, email } = values;
    // dispatch(showLoader());
    dispatch({ type: types.SIGNIN_REQUEST });
    return authorize(values.email, values.password)
      .then((data) => {
        if (!data.token) {
          throw new Error("Ошибка токена");
        }
        if (isRemember) {
          localStorage.setItem("token", data.token);
        }
        dispatch({
          type: types.SIGNIN_SUCCESS,
          payload: { token: data.token, user: email },
        });
        // dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch({
          type: types.SIGNIN_FAILURE,
          payload: error,
        });
        // dispatch(hideLoader());
      });
  };
}
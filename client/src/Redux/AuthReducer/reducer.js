import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  type: "",
  message: "",
  token: "",
  isAuth: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: payload.type,
        message: payload.message,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        type: payload.type,
        message: payload.message,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

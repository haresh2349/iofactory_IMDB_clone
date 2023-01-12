import * as types from "./actionTypes";
import axios from "axios";
export const signupUser = (paylaod) => (dispatch) => {
  dispatch({
    type: types.SIGNUP_REQUEST,
  });
  return axios
    .post("http://localhost:8080/auth/signup", paylaod)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.SIGNUP_FAILURE,
        payload: err.response.data,
      });
    });
};

export const loginUser = (payload) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  return axios
    .post("http://localhost:8080/auth/login", payload)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.data);
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err.response.data,
      });
    });
};

export const resetAuth = () => (dispatch) => {
  return dispatch({
    type: types.RESET_AUTH,
  });
};

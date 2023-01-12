import axios from "axios";
import * as types from "./actionTypes";

export const getAllMovies = () => (dispatch) => {
  dispatch({
    type: types.GET_MOVIES_REQUEST,
  });
  return axios("http://localhost:8080/movie/all")
    .then((res) => {
      dispatch({
        type: types.GET_MOVIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MOVIES_FAILURE,
      });
    });
};

export const getAllActors = () => (dispatch) => {
  return axios("http://localhost:8080/movie/actors").then((res) => {
    dispatch({
      type: types.GET_ALL_ACTORS,
      payload: res.data,
    });
  });
};
export const getAllProducers = () => (dispatch) => {
  return axios("http://localhost:8080/movie/producers").then((res) => {
    dispatch({
      type: types.GET_ALL_PRODUCERS,
      payload: res.data,
    });
  });
};

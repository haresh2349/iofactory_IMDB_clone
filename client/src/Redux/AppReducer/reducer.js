import * as types from "./actionTypes";
const initState = {
  isLoading: false,
  isError: false,
  movies: [],
  actors: [],
  producers: [],
  type: "",
  message: "",
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload.movies,
      };
    case types.GET_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_ALL_ACTORS:
      return {
        ...state,
        actors: payload,
      };
    case types.GET_ALL_PRODUCERS:
      return {
        ...state,
        producers: payload,
      };
    default:
      return state;
  }
};

import { applyMiddleware, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
// import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = {
  AuthReducer,
};

export const store = legacy_createStore(AuthReducer, applyMiddleware(thunk));

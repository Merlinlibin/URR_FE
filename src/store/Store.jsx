import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  account: userReducer,
});

const store = createStore(reducer);

export default store;

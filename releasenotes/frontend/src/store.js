import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//Store for redux. Imports from reducers > index.js

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;

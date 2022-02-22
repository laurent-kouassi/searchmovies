import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "./reducers";

const thunkMiddleware = thunk;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(moviesReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

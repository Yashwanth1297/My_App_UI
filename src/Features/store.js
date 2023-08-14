import {createStore,applyMiddleware} from "redux";
import allReducers from "../reducers/index";
import thunk from 'redux-thunk';

const store = createStore(
    allReducers, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
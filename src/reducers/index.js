import loggedReducer from "./isLogged";
import registeredReducer from "./isRegistered"
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const allReducers = combineReducers({
    logged:loggedReducer,
    register:registeredReducer,
    user:userReducer
})

export default allReducers;
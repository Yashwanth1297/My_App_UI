import { getUser } from "../Services/userService"
import { logOut } from "./updateToken"

export const fetchUser = () => async (dispatch) =>{
    console.log("Inside fetchuser")
    try{
    dispatch({
        type:"FETCH_USER_START"
    })
    const token = localStorage.getItem("token");
    const res = await getUser(token);
    console.log("res",res)
    dispatch({
        type: "FETCH_USER_SUCCESS",
        payload: res.data,
    })
    // localStorage.setItem("user",JSON.stringify(res.data));
    }catch(e){
        dispatch({
            type:"FETCH_USER_ERROR",
        })
        // localStorage.removeItem("user");
        await dispatch(logOut());
    }
}
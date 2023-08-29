import { getUser } from "../Services/userService"

export const fetchUser = () => async (dispatch) =>{
    const token = localStorage.getItem("token");
    console.log("Inside fetchuser")
    try{
    dispatch({
        type:"FETCH_USER_START"
    })
    const res = await getUser(token);
    dispatch({
        type: "FETCH_USER_SUCCESS",
        payload:res.data
    })
    }catch(e){
        dispatch({
            type:"FETCH_USER_ERROR",
            payload:e
        })
    }
}
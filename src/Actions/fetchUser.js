import { getUser } from "../Services/userService"

export const fetchUser = () => async (dispatch) =>{
    const token = localStorage.get("token");
    try{
    dispatch({type:"fetch_start"})
    const res = await getUser(token);
    dispatch({
        type: "fetch_Success",
        payload:res.data
    })
    }catch(e){
        dispatch({
            type:"fetch_error"
        })
    }
}
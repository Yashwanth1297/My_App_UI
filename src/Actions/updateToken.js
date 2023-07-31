import {login} from "../Services/userService";

const updateToken =(userData)=>{
let token_value;
login(userData).then((res)=>{
    token_value = res.data.token;
})
    return {
        type:"sign_in",
        token:token_value
    }
}

export default updateToken;
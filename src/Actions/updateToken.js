import {login} from "../Services/userService";

export const signIn  = async (userData) => {
let token_value;
let typesetting;
try{
const res = await login(userData);
    token_value = res.token;
    typesetting = "sign_in";
    console.log('hello')
    localStorage.setItem("token",token_value);
    return {
        type:typesetting,
        token:token_value
    }
}
catch(err){
    typesetting = "default";
    return {
        type:typesetting,
        token:token_value
    }
}
}

export const token_check = () =>{
    return{
        type:"sign_in"
    }
}

export const logOut = () =>{
    return{
        type:"default"
    }
}

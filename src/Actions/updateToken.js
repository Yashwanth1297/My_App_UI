import {login} from "../Services/userService";

export const signIn  = async (userData) => {
let token_value;
let typesetting;
let email;
try{
const res = await login(userData);
console.log("res",res)
    token_value = res.token;
    email = res.email;
    typesetting = "sign_in";
    localStorage.setItem("token",token_value);
    localStorage.setItem("email",email);

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
    localStorage.removeItem("token")
    return{
        type:"default"
    }
}

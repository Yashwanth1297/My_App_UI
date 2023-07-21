import axios from "axios";
import {config} from "../Config/env.config";

export const login  = async (userData)=>{
    const response = await axios.post(config.Backend_API +'/Login',userData);
    console.log("response",response);
    return response.data;
}

export const register  = async (userData)=>{
    const response = await axios.post(config.Backend_API +'/Register',userData);
    console.log("response",response);
    return response.data;
}

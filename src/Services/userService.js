import axios from "axios";
import {config} from "../Config/env.config";

export const login  = async (userData)=>{
    try{
        const response = await axios.post(config.Backend_API +'/Login',userData);
        return response.data;
    }catch(e){
        console.log(e);
    }
   
}

export const register  = async (userData)=>{
    try{
        const response = await axios.post(config.Backend_API +'/Register',userData);
        console.log("response",response);
        return response.data;
    }catch(e){
        console.log(e);
    }
   
}

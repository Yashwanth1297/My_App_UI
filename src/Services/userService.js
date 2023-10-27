import axios from "axios";
import { config } from "../Config/env.config";
import jwtInstance from "../Interceptors/userInterceptor";
export const login = async (userData) => {
  try {
    const response = await axios.post(config.Backend_API + "/Login", userData, {
      withCredentials: true,
    });
    console.log("response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(
      config.Backend_API + "/Register",
      userData,
    );
    console.log("response", response);
    return response;
  } catch (e) {
    console.log("error", e);
  }
};

export const getUser = async (token) => {
  try {
    const response = await jwtInstance.get(config.Backend_API + "/user", {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

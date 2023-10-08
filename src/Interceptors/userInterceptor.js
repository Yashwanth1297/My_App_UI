import { config } from "../Config/env.config";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


// Create a new Axios instance for user requests
export const jwtInstance = axios.create({});

// const navigate = useNavigate();

// Add an Axios interceptor for handling token refresh
jwtInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 403) {
      try {
        const refreshTokenResponse = await axios.get(config.Backend_API + "/refresh", {
          withCredentials: true,
        });
        const newAccessToken = refreshTokenResponse.data.accessToken;
        localStorage.setItem("token", newAccessToken);
        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = newAccessToken;
        // Retry the original request with the new access token
        console.log("error.config",error.config)
        return jwtInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        // navigate("/login"); // Redirect to the login page or handle the error appropriately
        return Promise.reject(refreshError);
      }
    }

    // // For other error responses, reject the promise
    return Promise.reject(error);
  }
);

export default jwtInstance;

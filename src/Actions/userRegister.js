import { register } from "../Services/userService";
const userRegistration = async (userData) => {
  try {
    const res = await register(userData);
    console.log("response", res);
    console.log("status", res.status);
    if (res.status === 201) {
      return {
        type: "sign_up",
      };
    }
  } catch (err) {
    return {
      type: "signout",
    };
  }
};

export default userRegistration;

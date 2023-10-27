import { login } from "../Services/userService";

export const signIn = async (userData) => {
  let typesetting;
  try {
    const res = await login(userData);
    localStorage.setItem("token", res.accessToken);
    return {
      type: "sign_in",
    };
  } catch (err) {
    typesetting = "default";
    return {
      type: typesetting,
    };
  }
};

export const token_check = () => {
  return {
    type: "sign_in",
  };
};

export const logOut = () => {
  localStorage.removeItem("token");
  return {
    type: "default",
  };
};

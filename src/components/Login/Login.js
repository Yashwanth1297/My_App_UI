import React, { useState } from "react";
import "./Login.scss";
// import Register from "/Register/Register.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../Actions/updateToken";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Cart3 } from "react-bootstrap-icons";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const userData = {
    email,
    password: pass,
  };
  const data = useSelector((state) => state.user.data);

  console.log("data", data);

  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/Register";
    navigate(path);
  };

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function triggerApi(e) {
    e.preventDefault();
    signIn(userData)
      .then((res) => {
        setLoginStatus("success");
        dispatch(res);
      })
      .catch((err) => {
        console.log("err", err);
        setLoginStatus("failure");
        dispatch(err);
      });
  }

  return (
    <div className="signin">
      <h1>
        EZ-Cart <Cart3 size={35} color="red" />
      </h1>
      {loginStatus !== "failure" && loginStatus !== null && (
        <p className="error-message">Incorrect username or password</p>
      )}
      <form onSubmit={triggerApi} className="login_form">
        <TextField
          type="text"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="uname"
          fullWidth
        />
        <TextField
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Password"
          variant="standard"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name="password"
          fullWidth
        />
        <Button variant="contained" type="submit" id="btnl">
          Login
        </Button>
      </form>
      <p>
        Dont have an account?
        <Button size="small" onClick={routeChange} id="btnr">
          Sign up
        </Button>
      </p>
    </div>
  );
}

export default Login;

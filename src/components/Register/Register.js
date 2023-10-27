import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import userRegistration from "../../Actions/userRegister";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Cart3 } from "react-bootstrap-icons";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [PasswordVisible, setPasswordVisible] = useState(false);

  const regStatus = useSelector((state) => state.register.isRegistered);
  const dispatch = useDispatch();

  const userData = {};
  userData.fname = fname;
  userData.lname = lname;
  userData.email = email;
  userData.password = pass;

  function handleClickPasswordVisible() {
    setPasswordVisible(!PasswordVisible);
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };
  return (
    <div className="signup">
      {console.log(regStatus)}
      {regStatus ? (
        navigate("/login")
      ) : (
        <>
          <h1>
            EZ-Cart <Cart3 size={35} color="red" />
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              userRegistration(userData)
                .then((res) => {
                  return dispatch(res);
                })
                .catch((err) => {
                  return dispatch(err);
                });
            }}
            className="Registration_form"
          >
            <TextField
              label="First Name"
              variant="standard"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              name="fname"
              fullWidth
            />
            <TextField
              label="Last Name"
              variant="standard"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              name="lname"
              fullWidth
            />
            <TextField
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              fullWidth
            />
            <TextField
              type={PasswordVisible ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickPasswordVisible}
                    >
                      {PasswordVisible ? <VisibilityOff /> : <Visibility />}
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
            <Button id="btn" type="submit">
              Sign Up
            </Button>
          </form>
          <p>
            Already have an account?{" "}
            <Button size="small" id="link_btn" onClick={routeChange}>
              Login
            </Button>
          </p>
        </>
      )}
    </div>
  );
}

export default Register;

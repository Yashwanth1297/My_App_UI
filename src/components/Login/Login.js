import React, { useState,useEffect } from "react";
import "./Login.scss";
// import Register from "/Register/Register.js";
import {Navigate,Route,Routes} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {signIn} from "../../Actions/updateToken";
import {login} from "../../Actions/updateToken";
import Error from "../Error";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';
import { Cart3 } from "react-bootstrap-icons";


function Login(){
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loginStatus, setLoginStatus] = useState(null); 
    const userData = {
      email,
      password: pass
    };
    const Logged= useSelector((state) => state.logged.isLoggedin);
    const data = useSelector((state) => state.user.data);

    console.log("data",data);

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/Register'; 
      navigate(path);
    }

    function triggerApi(e){
        e.preventDefault();
        signIn(userData)
        .then((res) => {
            setLoginStatus("success");
            dispatch(res);
          })
        .catch((err) => {
            console.log("err",err)
            setLoginStatus("failure");
            dispatch(err);
          })
    }
    
    return (
      <div className="signin">
        {(Logged)? 
        navigate("/home")
        :<>
        <h1>EZ-Cart <Cart3 size ={35} color="red" /></h1>
        {(loginStatus !== 'failure' && loginStatus !==null) && (
          <p className="error-message">Incorrect username or password</p>
        )}
        <form onSubmit={triggerApi} className="login_form">
        <TextField label="Email" variant="standard" value ={email} onChange = {(e) => setEmail(e.target.value)} name="uname" />
        <TextField type ="password" label="Password" variant="standard" value ={pass} onChange = {(e) => setPass(e.target.value)} name="password" />
        <Button variant="contained" type ="submit" id="btnl">Login</Button>
        </form>
        <p>Don't have an account? <Button href="#text-buttons" size = "small" onClick = {routeChange} id="btnr">Sign up</Button></p> 
        
    
    </>}
    </div>)
}
    

export default Login;
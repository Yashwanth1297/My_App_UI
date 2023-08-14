import React, { useState,useEffect } from "react";
import "./Login.scss";
// import Register from "/Register/Register.js";
import {Navigate,Route,Routes} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {signIn} from "../../Actions/updateToken";
import {login} from "../../Actions/updateToken";
import Error from "../Error";


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
        <h1 className="app">CSA</h1>
        <h2>Hello! Please Login</h2>
        {(loginStatus !== 'failure' && loginStatus !==null) && (
          <p className="error-message">Incorrect username or password</p>
        )}
        <form onSubmit={triggerApi} className="login_form">
        <input value ={email} onChange = {(e) => setEmail(e.target.value)} type="text" placeholder="Username" name="uname"></input>
        <input value ={pass} onChange = {(e) => setPass(e.target.value)} type="password" placeholder="Password" name="password"></input>
        <button type ="submit" id="btnl">Login</button>
        </form>
        <button onClick = {routeChange} id="btnr">Create new account</button>
    
    </>}
    </div>)
}
    

export default Login;
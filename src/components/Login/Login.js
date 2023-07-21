import React, { useState } from "react";
import "./Login.scss";
// import Register from "/Register/Register.js";
import {Navigate,Route,Routes} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginState from "../../Actions/user";
import {login} from "../../Services/userService";


function Login(props){
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");
    const userData = {};
    userData.email = email;
    userData.password = pass;

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/Register'; 
      navigate(path);
    }


    return (<div className="signin">
        <h1 className="app">CSA</h1>
        <h2>Hello! Please Login</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            login(userData)
        }} className="login_form">
        <input value ={email} onChange = {(e) => setEmail(e.target.value)} type="text" placeholder="Username" name="uname"></input>
        <input value ={pass} onChange = {(e) => setPass(e.target.value)} type="password" placeholder="Password" name="password"></input>
        <button type ="submit" id="btnl">Login</button>
        </form>
        <button onClick = {routeChange} id="btnr">Create new account</button>
    </div>)
}

export default Login;
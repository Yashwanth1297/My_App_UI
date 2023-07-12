import React from "react";
import "./Login.scss";
// import Register from "/Register/Register.js";
import { useSelector,useDispatch } from "react-redux";
import loginState from "../../Actions/user";
import Register from "../Register/Register";

function Login(){
    const dispatch = useDispatch();
    return (<div className="signin">
        <h1 className="app">CSA</h1>
        <h2>Hello! Please Login</h2>
        <form className="login_form">
        <input type="text" placeholder="Username" name="uname"></input>
        <input type="password" placeholder="Password" name="password"></input>
        <button id="btnl" onClick={()=>dispatch(loginState())}>Login</button>
        <button id="btnr" onClick={() =>{return <Register />}}>Create new account</button>
        </form>
    </div>)
}

export default Login;
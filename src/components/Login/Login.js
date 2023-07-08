import React from "react";
import "./Login.scss";
import { useSelector,useDispatch } from "react-redux";
import loginState from "../../Actions/user";

function Login(){
    const dispatch = useDispatch();
    return (<div className="signin">
        <h1 className="app">CSA</h1>
        <h2>Hello! Please Login</h2>
        <form className="login_form">
        <input type="text" placeholder="Username" name="uname"></input>
        <input type="password" placeholder="Password" name="password"></input>
        <input id="btn" type="submit" onClick={()=>dispatch(loginState())}></input>
        </form>
    </div>)
}

export default Login;
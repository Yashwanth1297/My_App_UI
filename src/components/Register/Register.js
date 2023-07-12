import React from "react";
import "./Register.scss";

function Register(){
    return(<div className="signin">
    <h1 className="app">CSA</h1>
    <h2>Hello! Please Register</h2>
    <form className="Registration_form">
    <input type="text" placeholder="First Name" name="fname"></input>
    <input type="text" placeholder="Last Name" name="lname"></input>
    <input type="text" placeholder="Email" name="email"></input>
    <input type="password" placeholder="Password" name="password"></input>
    <input id="btn" type="Create Account"></input>
    </form>
    </div>)
}

export default Register;

import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import userRegistration from "../../Actions/userRegister"
import {register} from "../../Services/userService";
import { useSelector,useDispatch } from "react-redux";

function Register(props){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const regStatus = useSelector((state) => state.register.isRegistered)
    const dispatch = useDispatch();

    const userData ={}
    userData.fname =fname;
    userData.lname =lname;
    userData.email =email;
    userData.password =pass;

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/login'; 
      navigate(path);
    }
    return(<div className="signup">
    {console.log(regStatus)}
    {(regStatus)?
    navigate("/login")
    :<>
    <h1 className="app">CSA</h1>
    <h2>Hello! Please Register</h2>
    <form onSubmit = {(e) =>{
        e.preventDefault();
        userRegistration(userData).then((res) =>{
          return dispatch(res)
        }).catch((err) =>{
          return dispatch(err)
        })
        }} className="Registration_form">
    <input value = {fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="First Name" name="fname"></input>
    <input value = {lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Last Name" name="lname"></input>
    <input value = {email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" name="email"></input>
    <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" name="password"></input>
    <button id="btn" type="submit">Sign Up</button>
    </form>
    <button id= "link_btn" onClick = {routeChange} >Already have an account?</button>
    </>}
    </div>)
}

export default Register;

import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss";
import { useSelector,useDispatch } from "react-redux";
import loginState from "../../Actions/user";
export default function Header(){

    const dispatch = useDispatch();
    return(<div className="header">
        <Link to="/Login">
        <div className="AppName">CSA</div>
        </Link>
        
        <div className="navigation">
        <Link to="/About">About</Link>
        <Link to="/Upload">File Upload</Link>
        <Link to="/Download">File Download</Link>
        <button onClick={()=>dispatch(loginState())}>Logout</button>
        </div>

        

    </div>) 
        


}
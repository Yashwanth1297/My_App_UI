import React,{useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import "./Header.scss";
import { useSelector,useDispatch } from "react-redux";
import loginState from "../../Actions/user";
import { useNavigate } from "react-router-dom";
import {logOut} from "../../Actions/updateToken";
export default function Header(){

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const Logged= useSelector((state) => state.logged.isLoggedin);

    // useEffect(() => {
    //   if (!Logged) {
    //     navigate('/login');
    //   }else {
    //     dispatch(logOut());
    //   }
    // }, [Logged, navigate]);
    return(<>
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="company-logo.png" alt="Company Logo" />
          <h1>Company Name</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="about">About</Link></li>
          <li><Link to ="upload">Upload</Link></li>
          <li><Link to ="download">Download</Link></li>
        </ul>
        <div className="login-btn">
          <button onClick={() => {
            localStorage.removeItem("token")
            navigate("/login")
          }}>Logout</button>
        </div>
      </nav>
    </header>
        
         <Outlet />
       

         </>
    ) 
        


}
import React,{useEffect} from "react";
import {Link, Outlet} from "react-router-dom";
import "./Header.scss";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logOut} from "../../Actions/updateToken";
import { fetchUser } from "../../Actions/fetchUser";
export default function Header(){

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const Logged= useSelector((state) => state.logged.isLoggedin);
    const getUser = useSelector((state) => state.user);

    useEffect(() =>{
      dispatch(fetchUser())
    },[dispatch])
    return(<>
    {console.log(Logged)}
    {console.log(getUser)}
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
          <button onClick={(e) => {
            e.preventDefault();
            dispatch(logOut());
            navigate("/login");
            console.log("Logged",Logged)
          }}>Logout</button>
        </div>
      </nav>
    </header>
        
         <Outlet />
       

         </>
    ) 
        


}
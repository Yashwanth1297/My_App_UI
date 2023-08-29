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
    const userData = useSelector((state) => state.user.data);


    useEffect(() =>{
      const fetchUserData = async () => {
        await dispatch(fetchUser());
        console.log("Header is mounted");
      };
      fetchUserData();
    },[dispatch])

    const { Fname, Lname } = userData || {};

    return(<>
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>CSA</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="about">About</Link></li>
          <li><Link to ="upload">Upload</Link></li>
          <li><Link to ="download">Download</Link></li>
        </ul>

        <div>
          <img src= {"userIcon.jpg"} />
        </div>
        <div>
        {Fname && Lname && (
            <p>Hello {Fname} {Lname}</p>
        )}
        </div>
        <div className="logout-btn">
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
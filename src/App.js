import React,{useEffect, useState} from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Upload from "./components/Upload/Upload";
import Download from "./components/Download";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/privateRoute";
import {BrowserRouter, Link, Navigate,Route,Router,Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import { useSelector,useDispatch} from "react-redux";
import { logOut, signIn,token_check } from "./Actions/updateToken";
function App() {

  const isLoggedIn = useSelector((state) => state.logged.isLoggedin);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");


  useEffect(() =>{
    if(token){
      dispatch(token_check())
    } else {
      dispatch(logOut());
      console.log("loggedout")
    }
  },[dispatch])
  
  return (
    <div className="container">
      {console.log("Inside")}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/home" element={<PrivateRoute><Header /></PrivateRoute>}>         
          <Route path="about" element={<About />} />
          <Route path="upload" element={<Upload />} />
          <Route path="download" element={<Download />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

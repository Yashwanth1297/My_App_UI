import React,{useState} from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Upload from "./components/Upload/Upload";
import Download from "./components/Download";
import {Navigate,Route,Routes} from "react-router-dom";
import "./App.scss";
import { useSelector} from "react-redux";
function App() {
  return (
    <div className="container">
      <Routes>
      <Route path ="/" element = {<Login />} />
      <Route path ="/Login" element = {<Login />} />
      <Route path ="/Register" element = {<Register />} />
      <Route path="/About" element={<About />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Download" element={<Download />} />
      </Routes>

      {}
    </div>
  );
}

export default App;

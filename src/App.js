import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Upload from "./components/Upload/Upload";
import Download from "./components/Download";
import Header from "./components/Header/Header";
// import PrivateRoute from "./components/privateRoute";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { logOut, token_check } from "./Actions/updateToken";
import { useDispatch } from "react-redux";
// import ModalComponent from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(token_check());
    } else {
      dispatch(logOut());
      console.log("loggedout");
    }
  }, [dispatch]);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Header />}>
          <Route path="about" element={<About />} />
          <Route path="upload" element={<Upload />} />
          <Route path="download" element={<Download />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

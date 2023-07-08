import React from "react";
import About from "./components/About/About";
import Upload from "./components/Upload/Upload";
import Login from "./components/Login/Login";
import Download from "./components/Download";
import {Route,Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.scss";
import { useSelector,useDispatch } from "react-redux";

function App() {

  const userStatus = useSelector(state => state.logged);
  return (
    <div className="container">
      {userStatus? (<><Header />
      <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Download" element={<Download />} />
      </Routes>
      <Footer /></>):<Login />}
      
      
    </div>
  );
}

export default App;

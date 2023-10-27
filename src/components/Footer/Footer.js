import React from "react";
import "./Footer.scss";
import fb from "../../images/facebook icon.png";
import insta from "../../images/insta icon.png";
import snap from "../../images/snap icon.png";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Cloud Storage</p>
        <p>Copyright©Yashwanth</p>
      </div>
      <div className="social">
        <p>Follow Us On :</p>
        <div className="image">
          <img src={fb}></img>
          <img src={insta}></img>
          <img src={snap}></img>
        </div>
      </div>
    </div>
  );
}

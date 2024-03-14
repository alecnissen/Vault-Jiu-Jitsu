import React from "react";
import vaultBjjLogo from "../assets/logo.png";
import instaLogo from "../assets/instagram-svgrepo-com.svg"

// import instaLogo from "../assets/ig-image-transparent.png";
// import fbLogo from "../assets/fb-image-transparent.png";

import fbLogo from "../assets/facebook-svgrepo-com.svg"
import Trademark from "./Trademark";



export default function FooterContent() {
  return (
    <>
    <div className="footer-content-wrapper">

    <div className="address-subscribe-container">
    
    <div className="title-address-phone-container">
      <h1>The Vault Jiu-Jitsu</h1>
      <h3>25 South Morton Ave Morton, PA 19070 US</h3>
      <h3>info@vaultbjj.com</h3>
      <h3>610-579-0077</h3>

    <div className="footer-social-links-container"> 
        <img src={instaLogo}></img>
        <img src={fbLogo}></img>
    </div>

    </div>

        <div className="footer-label-input-pair-email"> 
      <h5>Subscribe to our email for exclusive news and offers!</h5>
            <label>Email Address</label>
            <input type="text"></input>
            <button>Subscribe</button>
        </div>

    </div>

    <div className="footer-vault-logo-container">
    <img src={vaultBjjLogo} className="footer-vault-logo"></img>
    </div>



    </div>
    <Trademark></Trademark>
    </>
  );
}

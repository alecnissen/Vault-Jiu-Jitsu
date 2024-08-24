import React from "react";
import vaultBjjLogo from "../assets/logo.png";
import instaLogo from "../assets/larger-insta-icon.svg";
import fbLogo from "../assets/larger-fb-logo.svg";
import Trademark from "./Trademark";
import EmailSubscriptionForm from "./EmailSubForm";

export default function FooterContent() {
  return (
    <>
      <div className="footer-content-wrapper">
        <div className="address-subscribe-container">
          <div className="title-address-phone-container">
            <h1>The Vault Jiu-Jitsu</h1>
            <h3 className="footer-address-styles">
              25 South Morton Ave Morton, PA 19070 US
            </h3>
            <h3 className="footer-email-styles">info@vaultbjj.com</h3>
            <h3 className="footer-phone-styles">610-579-0077</h3>

            <div className="footer-social-links-container">
              <a href="https://www.instagram.com/vault_bjj/?hl=en" target="_blank">
              <img src={instaLogo}></img>
              </a>

              <a href="https://www.facebook.com/vaultbjj" target="_blank">
              <img src={fbLogo}></img>
              </a>

            </div>
          </div>

          <EmailSubscriptionForm />
        </div>

        <div className="footer-vault-logo-container">
          <img src={vaultBjjLogo} className="footer-vault-logo"></img>
        </div>
      </div>
      <Trademark></Trademark>
    </>
  );
}

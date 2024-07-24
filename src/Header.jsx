import React from "react";
import vaultBjjLogo from "../assets/logo.png";
import instaLogo from "../assets/larger-insta-icon.svg";
import fbLogo from "../assets/larger-fb-logo.svg";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-content-wrapper">
      <img src={vaultBjjLogo} className="header-vault-bjj-logo"></img>

      <div className="header-btn-container">
        <button>
          <Link to="/" className="header-link">
            Home
          </Link>
        </button>
        <button>
          <Link to="/AboutUsComponent" className="header-link">
            Story
          </Link>
        </button>
        <button>
          <Link to="/Schedule" className="header-link">
            Schedule
          </Link>
        </button>
        <button>
          <Link to="/Instructors" className="header-link">
            Instructors
          </Link>
        </button>
        <button>
          <Link to="/ProgramsComponent" className="header-link">
            Programs
          </Link>
        </button>
        <button>
          <Link to="/ContactFAQ" className="header-link">
            Contact/FAQ
          </Link>
        </button>
      </div>

      <div className="header-insta-fb-links-container">
        <a href="https://www.instagram.com/vault_bjj/?hl=en" target="_blank">
          <img src={instaLogo} className="insta-logo-header"></img>
        </a>

        <a href="https://www.facebook.com/vaultbjj" target="_blank">
          <img
            src={fbLogo}
            className="fb-logo-header"
            id="fb-logo-header-id"
          ></img>
        </a>
      </div>
    </div>
  );
}

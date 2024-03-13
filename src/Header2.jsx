import React from 'react'
import vaultBjjLogo from "../assets/logo.png";
import instaLogo from "../assets/ig-image-transparent.png";
import fbLogo from "../assets/fb-image-transparent.png";
import { Link, Outlet, useSearchParams } from 'react-router-dom';

export default function Header2() {
    return (
      <div className="header-content-wrapper">
        <img src={vaultBjjLogo} className="header-vault-bjj-logo2"></img>
  
        <div className="header-btn-container2">
  
        <button>
        <Link to="/" className="header-link">Home</Link>
        </button>
        <button>
          <Link to="/AboutUsComponent" className="header-link">About</Link>
        </button>
        <button>
        <Link to="/Schedule" className="header-link">Schedule</Link>
        </button>
        <button>
          <Link to="" className="header-link">Instructors</Link>
        </button>
        <button>
        <Link to="" className="header-link">Programs</Link>
        </button>
        <button>
          <Link to="" className="header-link">Contact/FAQ</Link>
        </button>

        </div>
  
        <div className="header-insta-fb-links-container2">
          <img src={instaLogo}></img>
          <img src={fbLogo}></img>
        </div>
      </div>
    );
  }



import React from "react";
import vaultBjjLogo from "../assets/logo.png";
import instaLogo from "../assets/ig-image-transparent.png";
import fbLogo from "../assets/fb-image-transparent.png";
import { Link, Outlet, useSearchParams } from 'react-router-dom';


export default function Header() {
  return (
    <div className="header-content-wrapper">
      <img src={vaultBjjLogo} className="header-vault-bjj-logo"></img>

      <div className="header-btn-container">

        <button>
        <Link to="/" className="header-link-button">Home</Link>
        </button>
        <button>
          <Link to="/AboutUsComponent" className="header-link-button">About</Link>
        </button>
        <button>Schedule</button>
        <button>Instructors</button>
        <button>Programs</button>
        <button>Contact/FAQ</button>
      </div>

      <div className="header-insta-fb-links-container">
        <img src={instaLogo}></img>
        <img src={fbLogo}></img>
      </div>
    </div>
  );
}

// export default function Header() {
//   return (

//     <div className="header-content-wrapper">

//     <div className="logo-title-links-toprow-container">

//     <h1>The Vault Jiu Jitsu</h1>
//     <h2>Delco's Premier Jiu Jitsu Academy</h2>
//     <h4>Classes for all ages and skill levels!</h4>
//         <div className="logo-container">
//             <img src={vaultBjjLogo}></img>
//         </div>

//         <div className="header-btn-container">
//         <button>Home</button>
//         <button>About</button>
//         <button>Schedule</button>
//         <button>Programs</button>
//         <button>Contact/FAQ</button>
//         </div>

//     </div>

//     </div>
//   )
// }

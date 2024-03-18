import React from "react";
import vaultBjjLogo from "../assets/logo.png";
// import instaLogo from "../assets/ig-image-transparent.png";
import instaLogo from "../assets/instagram-svgrepo-com.svg"
// import fbLogo from "../assets/fb-image-transparent.png";
// import fbLogo from "../assets/facebook-svgrepo-com.svg"
import fbLogo from "../assets/facebook-svgrepo-com.svg"
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import coloredFbLogo from "../assets/colored-fb-logo.svg"
import coloredInstLogo from "../assets/colored-insta-logo.svg"


export default function Header() {
  return (
    <div className="header-content-wrapper">
      <img src={vaultBjjLogo} className="header-vault-bjj-logo"></img>

      <div className="header-btn-container">

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
          <Link to="/Instructors" className="header-link">Instructors</Link>
        </button>
        <button>
        <Link to="/ProgramsComponent" className="header-link">Programs</Link>
        </button>
        <button>
          <Link to="/ContactFAQ" className="header-link">Contact/FAQ</Link>
        </button>
      </div>

      <div className="header-insta-fb-links-container">
        <a href="https://www.instagram.com/vault_bjj/?hl=en">
        <img src={instaLogo} className="insta-logo-header"></img>
        </a>
        
        <a href='https://www.facebook.com/vaultbjj'>
        <img src={fbLogo} className='fb-logo-header'></img>
        </a>
      </div>
    </div>
  );
}



















// export default function Header({ btnAnimationPlayed, instaFbAnimationPlayed }) {


// //   // State to track whether each animation has been played
// //   const [btnAnimationPlayed, setBtnAnimationPlayed] = useState(false);
// //   const [instaFbAnimationPlayed, setInstaFbAnimationPlayed] = useState(false);

// //   // Total duration for each animation
// //   // const totalBtnAnimationDuration = 3.5; // Adjust this value if needed
//   const totalBtnAnimationDuration = 1; // Adjust this value if needed
//   const totalInstaFbAnimationDuration = 3; // Adjust this value if needed

// // // useEffect hook to trigger animations once on component mount
// useEffect(() => {
//   console.log('Header component mounted');

//   // Check if button animation has already been played
//   if (!btnAnimationPlayed) {
//     // Set a timeout to trigger button animation after a delay
//     const btnAnimationTimeout = setTimeout(() => {
//       // Update state to indicate button animation has been played
//       // setBtnAnimationPlayed(true);
//       console.log('Button animation played'); // Add this line
//     }, totalBtnAnimationDuration * 1000); // Convert total duration to milliseconds

//     // Clean up timeout to avoid memory leaks
//     return () => {
//       clearTimeout(btnAnimationTimeout);
//       console.log('Header component unmounted');
//     };
//   }
// }, [btnAnimationPlayed, totalBtnAnimationDuration]); // Run effect when btnAnimationPlayed state changes

// // useEffect hook to trigger instaFbLinks animation once on component mount
// useEffect(() => {
//   // Check if instaFbLinks animation has already been played
//   if (!instaFbAnimationPlayed) {
//     // Set a timeout to trigger instaFbLinks animation after a delay
//     const instaFbAnimationTimeout = setTimeout(() => {
//       // Update state to indicate instaFbLinks animation has been played
//       // setInstaFbAnimationPlayed(true);
//       console.log('InstaFbLinks animation played'); 
//     }, totalInstaFbAnimationDuration * 1000); // Convert total duration to milliseconds

//     // Clean up timeout to avoid memory leaks
//     return () => {
//       clearTimeout(instaFbAnimationTimeout);
//       console.log('Header component unmounted');
//     };
//   }
// }, [instaFbAnimationPlayed, totalInstaFbAnimationDuration]);



//   return (
//     <div className="header-content-wrapper">
//       <img src={vaultBjjLogo} className="header-vault-bjj-logo"></img>

//       <div className="header-btn-container">

//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>
//         <Link to="/" className="header-link-button">Home</Link>
//         </button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>
//           <Link to="/AboutUsComponent" className="header-link-button">About</Link>
//         </button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Schedule</button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Instructors</button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Programs</button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Contact/FAQ</button>
//       </div>

//       <div className="header-insta-fb-links-container">
//         <img src={instaLogo}></img>
//         <img src={fbLogo}></img>
//       </div>
//     </div>
//   );
// }



 // Assuming you're using react-router-dom for routing

// export default function Header({ btnAnimationPlayed }) {
//   const totalBtnAnimationDuration = 1; // Adjust this value if needed
//   const totalInstaFbAnimationDuration = 3; // Adjust this value if needed

  
//   useEffect(() => {
//     console.log('Header component mounted');

//     // Trigger initial fade-in animation for buttons
//     const buttons = document.querySelectorAll('.header-btn-container button');
//     buttons.forEach((button, index) => {
//       button.style.transitionDelay = `${0.5 + index * 0.5}s`; // Adjust delay for each button
//       button.style.opacity = 1;
//     });

//     // Clean up on unmount
//     return () => {
//       console.log('Header component unmounted');
//     };
//   }, []); // Empty dependency array to run only on mount

//   // useEffect(() => {
//   //   console.log('Header component mounted');

//   //   return () => {
//   //     console.log('Header component unmounted');
//   //   };
//   // }, []);

//   return (
//     <div className="header-content-wrapper">
//       <img src={vaultBjjLogo} className="header-vault-bjj-logo" alt="Vault BJJ Logo" />

//       <div className="header-btn-container">
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>
//           <Link to="/" className="header-link-button">Home</Link>
//         </button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>
//           <Link to="/AboutUsComponent" className="header-link-button">About</Link>
//         </button>
//         {/* Add other buttons as needed */}
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Schedule</button>
//          <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Instructors</button>
//          <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Programs</button>
//          <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Contact/FAQ</button>
//       </div>

//       <div className="header-insta-fb-links-container">
//         <img src={instaLogo} alt="Instagram Logo" />
//         <img src={fbLogo} alt="Facebook Logo" />
//       </div>
//     </div>
//   );
// }





// gpt 

// export default function Header({ btnAnimationPlayed, instaFbAnimationPlayed }) {
//   useEffect(() => {
//     console.log('Header component mounted');

//     // Trigger initial fade-in animation for buttons if not played yet
//     if (!btnAnimationPlayed) {
//       const buttons = document.querySelectorAll('.header-btn-container button');
//       buttons.forEach((button, index) => {
//         button.classList.add('fadeIn'); // Add the fadeIn animation class
//         button.style.transitionDelay = `${0.5 + index * 0.5}s`; // Adjust delay for each button
//       });
//     }

//     // Clean up on unmount
//     return () => {
//       console.log('Header component unmounted');
//     };
//   }, [btnAnimationPlayed]); // Run effect when btnAnimationPlayed state changes

//   useEffect(() => {
//     // Trigger initial fade-in animation for instaFbLinks if not played yet
//     if (!instaFbAnimationPlayed) {
//       const instaFbLinks = document.querySelector('.header-insta-fb-links-container');
//       instaFbLinks.classList.add('fadeIn'); // Add the fadeIn animation class
//     }
//   }, [instaFbAnimationPlayed]); // Run effect when instaFbAnimationPlayed state changes

//   return (
//     <div className="header-content-wrapper">
//       <img src={vaultBjjLogo} className="header-vault-bjj-logo" alt="Vault BJJ Logo" />

//       <div className="header-btn-container">
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>
//           <Link to="/" className="header-link-button">Home</Link>
//         </button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>
//           <Link to="/AboutUsComponent" className="header-link-button">About</Link>
//         </button>
//         {/* Add other buttons as needed */}
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Schedule</button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Instructors</button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Programs</button>
//         <button className={btnAnimationPlayed ? "buttonWithAnimation" : "buttonWithoutAnimation"}>Contact/FAQ</button>
//       </div>

//       <div className="header-insta-fb-links-container">
//         <img src={instaLogo} alt="Instagram Logo" />
//         <img src={fbLogo} alt="Facebook Logo" />
//       </div>
//     </div>
//   );
// }
























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

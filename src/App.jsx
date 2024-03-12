import Header from "./Header"
import TitleAndImgComponent from "./TitleAndImgComponent"
import AboutUsHomepage from "./AboutUsHomepage"
import OurPrograms from "./OurPrograms"
import WhatIsJiuJitsu from "./WhatIsJiuJitsu"
import CheckOurFacility from "./CheckOurFacility"
import RecoveryRoom from "./RecoveryRoom"
import ContactForm from "./ContactForm"
import FooterContent from "./FooterContent"
import HomePage from "./HomePage"
import { Route, Routes } from 'react-router-dom';
import AboutUsComponent from "./AboutUsComponent"
import { useState, useEffect } from "react"

export default function App() {

  // State to track whether each animation has been played
  // const [btnAnimationPlayed, setBtnAnimationPlayed] = useState(false);
  // const [instaFbAnimationPlayed, setInstaFbAnimationPlayed] = useState(false);

  // Total duration for each animation

  // const totalBtnAnimationDuration = 3.5; // Adjust this value if needed


  //   const totalBtnAnimationDuration = 1; // Adjust this value if needed
//   const totalInstaFbAnimationDuration = 3; // Adjust this value if needed

// // useEffect hook to trigger animations once on component mount
// useEffect(() => {
//   console.log('Header component mounted');

//   // Check if button animation has already been played
//   if (!btnAnimationPlayed) {
//     // Set a timeout to trigger button animation after a delay
//     const btnAnimationTimeout = setTimeout(() => {
//       // Update state to indicate button animation has been played
//       setBtnAnimationPlayed(true);
//       console.log('Button animation played'); // Add this line
//     }, totalBtnAnimationDuration * 1000); // Convert total duration to milliseconds

//     // Clean up timeout to avoid memory leaks
//     return () => {
//       clearTimeout(btnAnimationTimeout);
//       console.log('Header component unmounted');
//     };
//   }
// }, [btnAnimationPlayed]); // Run effect when btnAnimationPlayed state changes

// // useEffect hook to trigger instaFbLinks animation once on component mount
// useEffect(() => {
//   // Check if instaFbLinks animation has already been played
//   if (!instaFbAnimationPlayed) {
//     // Set a timeout to trigger instaFbLinks animation after a delay
//     const instaFbAnimationTimeout = setTimeout(() => {
//       // Update state to indicate instaFbLinks animation has been played
//       setInstaFbAnimationPlayed(true);
//       console.log('InstaFbLinks animation played'); 
//     }, totalInstaFbAnimationDuration * 1000); // Convert total duration to milliseconds

//     // Clean up timeout to avoid memory leaks
//     return () => {
//       clearTimeout(instaFbAnimationTimeout);
//       console.log('Header component unmounted');
//     };
//   }
// }, [instaFbAnimationPlayed]);





  return (
    <>
    {/* <Header></Header>
    <TitleAndImgComponent></TitleAndImgComponent>
    <AboutUsHomepage></AboutUsHomepage>
    <WhatIsJiuJitsu></WhatIsJiuJitsu>
    <OurPrograms></OurPrograms>
    <CheckOurFacility></CheckOurFacility>
    <RecoveryRoom></RecoveryRoom>
    <ContactForm></ContactForm>
    <FooterContent></FooterContent> */}

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
    {/* <HomePage></HomePage> */}
    
    <Route path="/AboutUsComponent" element={<AboutUsComponent></AboutUsComponent>}></Route>
    
    
    </Routes>

    </>
  )
}



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

export default function App() {

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



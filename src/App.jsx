import Header from "./Header"
import TitleAndImgComponent from "./TitleAndImgComponent"
import AboutUsHomepage from "./AboutUsHomepage"
import OurPrograms from "./OurPrograms"
import WhatIsJiuJitsu from "./WhatIsJiuJitsu"
import CheckOurFacility from "./CheckOurFacility"
import RecoveryRoom from "./RecoveryRoom"
import ContactForm from "./ContactForm"
import FooterContent from "./FooterContent"

export default function App() {

  return (
    <>
    <Header></Header>
    <TitleAndImgComponent></TitleAndImgComponent>
    <AboutUsHomepage></AboutUsHomepage>
    <WhatIsJiuJitsu></WhatIsJiuJitsu>
    <OurPrograms></OurPrograms>
    <CheckOurFacility></CheckOurFacility>
    <RecoveryRoom></RecoveryRoom>
    <ContactForm></ContactForm>
    <FooterContent></FooterContent>

    </>
  )
}



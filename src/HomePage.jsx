import React from "react";
import Header from "./Header";
import TitleAndImgComponent from "./TitleAndImgComponent";
import AboutUsHomepage from "./AboutUsHomepage";
import WhatIsJiuJitsu from "./WhatIsJiuJitsu";
import OurPrograms from "./OurPrograms";
import CheckOurFacility from "./CheckOurFacility";
import RecoveryRoom from "./RecoveryRoom";
import ContactForm from "./ContactForm";
import FooterContent from "./FooterContent";

export default function HomePage({
  btnAnimationPlayed,
  instaFbAnimationPlayed,
}) {
  return (
    <div>
      <Header
        btnAnimationPlayed={btnAnimationPlayed}
        instaFbAnimationPlayed={instaFbAnimationPlayed}
      ></Header>
      <TitleAndImgComponent></TitleAndImgComponent>
      <AboutUsHomepage></AboutUsHomepage>
      <WhatIsJiuJitsu></WhatIsJiuJitsu>
      <OurPrograms></OurPrograms>
      <CheckOurFacility></CheckOurFacility>
      <RecoveryRoom></RecoveryRoom>
      <ContactForm></ContactForm>
      <FooterContent></FooterContent>
    </div>
  );
}

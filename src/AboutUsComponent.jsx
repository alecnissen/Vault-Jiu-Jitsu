import React from "react";
import vaultFamilyImg from "../assets/vault-bjj-family-portriat.jpg";
import Header2 from "./Header2";
import FooterContent from "./FooterContent";

export default function AboutUsComponent() {
  return (
    <>
      <Header2></Header2>
      <h1 className="about-us-component-header-text">Our Story</h1>
      <div className="about-us-component-content-wrapper">
        <img src={vaultFamilyImg} className="vault-family-img-styles"></img>

        <div className="our-story-description-text">
          Welcome to our Jiu Jitsu academy in Delaware County, PA, We are Matt
          and Sabrina and we are glad you found us! We are dedicated to
          providing an exceptional Jiu Jitsu experience for enthusiasts of all
          levels. As proud parents of two energetic kids, Parker and Carter, we
          understand the importance of fostering a supportive environment both
          on and off the mat. At our academy, we are committed to guiding you
          through every step of your Jiu Jitsu journey, ensuring growth,
          confidence, and success. Join us and embark on a transformative
          experience where learning and community thrive!
        </div>
      </div>
      <FooterContent></FooterContent>
    </>
  );
}

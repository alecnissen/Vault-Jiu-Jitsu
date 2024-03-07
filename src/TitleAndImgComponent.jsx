import React from "react";
import bjjPhoto from "../assets/hero-bg.jpg";

export default function TitleAndImgComponent() {
  return (
    <div className="title-img-content-wrapper">
      <div className="title-subtitle-container">
        <h1>The Vault Jiu-Jitsu</h1>
        <h3>Delco's Premier Jiu Jitsu Academy</h3>
        <h4>We offer classes for all ages, genders, and skill levels!</h4>
      </div>

      <div className="bjj-img-container">
        <img src={bjjPhoto} className="bjj-img-styles"></img>
      </div>
    </div>
  );
}

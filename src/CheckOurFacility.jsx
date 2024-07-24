import React from "react";
import Carousel from "react-bootstrap/Carousel";
import vaultFacilityImg1 from "../assets/vault-facility-img-1.jpg";
import vaultFacilityImg2 from "../assets/vault-facility-img-2.jpg";
import vaultFacilityImg3 from "../assets/vault-interior-img-3.jpg";

export default function CheckOurFacility() {
  return (
    <div className="check-our-facility-content-wrapper">
      <h1>Check Out Our Facility!</h1>

      <Carousel className="carousel-container">
        <Carousel.Item>
          <div className="img-container">
            <img src={vaultFacilityImg1} className="carousel-img"></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <img src={vaultFacilityImg2} className="carousel-img"></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <img src={vaultFacilityImg3} className="carousel-img"></img>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

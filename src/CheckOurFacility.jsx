import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import vaultFacilityImg1 from "../assets/vault-facility-img-1.jpg";
import vaultFacilityImg2 from "../assets/vault-facility-img-2.jpg";
import vaultFacilityImg3 from "../assets/vault-interior-img-3.jpg";

export default function CheckOurFacility() {
  return (
    <div className="check-our-facility-content-wrapper">
      <h1>Check Out Our Facility!</h1>

      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <div className="img-container">
            <img src={vaultFacilityImg1} className="carousel-img"></img>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <div className="img-container">
            <img src={vaultFacilityImg2} className="carousel-img"></img>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <img src={vaultFacilityImg3} className="carousel-img"></img>
          </div>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <h1>Amenties</h1>
    <ul className='list-container'>
        <li>Lockerooms with showers</li>
        <li>Cold Plunge</li>
        <li>Sauna</li>
        <li>Red Light Therapy</li>
        <li>Compression selves</li>
    </ul> */}
    </div>
  );
}

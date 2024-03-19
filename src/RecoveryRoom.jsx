import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import coldPlungeImg from "../assets/20230424-EA0A3551_edited.webp";

// import coldPlungeImg from "../assets/vault-cold-plunge-img.webp";
// import saunaImg from "../assets/vault-sauna-img.jpg";

import iceImg from "../assets/scott-rodgerson-PteeDvACFak-unsplash.jpg";
import redlightImg from "../assets/pexels-johannes-plenio-1996035.jpg";
import { useState, useRef, useEffect } from "react";

import coldPlungeImg from "../assets/cold-plunge.jpeg";
import saunaImg from "../assets/vault-sauna-img-2.jpeg"
import redLightTherapyImg from "../assets/red-light-img-2.jpeg"

export default function RecoveryRoom() {

  const recoveryRoomContentWrapper = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.2,
    // };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
    });

    if (recoveryRoomContentWrapper.current) {
      observer.observe(recoveryRoomContentWrapper.current);
    }

    return () => {
      if (recoveryRoomContentWrapper.current) {
        observer.unobserve(recoveryRoomContentWrapper.current);
      }
    };
  }, []);



  return (
    // <div className="recovery-room-content-wrapper">
      <div className={`recovery-room-content-wrapper ${show ? "focused" : ""}`} ref={recoveryRoomContentWrapper}>
      <h1>Our Recovery Room</h1>

      <p className="recovery-room-text">
        Here at the Vault Jiu-Jitsu we offer a recovery room which includes an
        cold plunge, sauna, red-light therapy, and Normatech compression
        therapy. Click the learn more button to discover the incredible benefits
        of these high tech modalities!!!
      </p>

      <div className="recovery-cards-container">
        <div className="recovery-card-group-1">
          <Card className="recovery-card-container">
            <Card.Img
              variant="top"
              src={coldPlungeImg}
              className="cold-plunge-img card-img"
            />
            <Card.Body className="recovery-card-body">
              <Card.Title className="recovery-card-header">
                Cold Plunge
              </Card.Title>
              <Card.Text>
                A cold plunge, often referred to as cold water immersion,
                entails immersing oneself in cold water for a brief period,
                typically in a cold pool or icy bath. Advocates believe it
                provides various health advantages, such as diminishing
                inflammation, enhancing circulation, expediting muscle recovery,
                elevating mood, and fortifying the immune system. Embraced by
                athletes and wellness enthusiasts alike, cold plunges offer a
                revitalizing approach to rejuvenate the body and foster holistic
                health.
              </Card.Text>
              <Button variant="primary" className="recovery-learn-more-btn">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card className="recovery-card-container">
            <Card.Img
              variant="top"
              src={saunaImg}
              className="card-img sauna-img"
            />
            <Card.Body className="recovery-card-body">
              <Card.Title className="recovery-card-header">Sauna</Card.Title>
              <Card.Text>
                A sauna is a small room or space designed to produce heat and
                induce sweating through the use of dry or wet heat. This heat
                therapy is believed to offer numerous health benefits, including
                relaxation, stress relief, improved circulation, detoxification,
                and potentially even enhanced athletic performance. Saunas are
                popular worldwide and are often enjoyed as a way to unwind,
                promote overall well-being, and rejuvenate both the body and
                mind.
              </Card.Text>
              <Button variant="primary" className="recovery-learn-more-btn">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="recovery-card-group-2">
          <Card className="recovery-card-container">
            <Card.Img variant="top" src={saunaImg} className="card-img" />
            <Card.Body className="recovery-card-body">
              <Card.Title className="recovery-card-header">
                Red Light Therapy
              </Card.Title>
              <Card.Text>
                Red light therapy, also known as photobiomodulation (PBM),
                utilizes specific wavelengths of red and near-infrared light to
                stimulate cellular function in the body. It is believed to
                promote skin health, reduce inflammation, alleviate pain,
                accelerate wound healing, improve circulation, and boost mood.
                This non-invasive treatment is gaining popularity for its
                potential benefits in enhancing overall well-being and
                addressing various health concerns.
              </Card.Text>
              <Button variant="primary" className="recovery-learn-more-btn">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card className="recovery-card-container">
            <Card.Img variant="top" src={saunaImg} className="card-img" />
            <Card.Body className="recovery-card-body">
              <Card.Title className="recovery-card-header">
                Normatech Compression Therapy
              </Card.Title>
              <Card.Text>
                NormaTec compression therapy utilizes dynamic pneumatic
                compression to enhance circulation and promote recovery in the
                muscles and limbs. By applying intermittent pressure to the
                limbs, it helps to reduce inflammation, alleviate muscle
                soreness, and enhance recovery after intense physical activity
                or injury. This therapy is popular among athletes and
                individuals seeking to optimize their recovery process and
                improve overall performance.
              </Card.Text>
              <Button variant="primary" className="recovery-learn-more-btn">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

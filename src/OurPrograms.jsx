import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import nogiBjjPhoto from "../assets/g-liberty.jpg";
import giPhoto from "../assets/hero-bg.jpg";
import kidsBjjPhoto from "../assets/pexels-cottonbro-studio-7988827.jpg";
import womensBjjClassPhoto from "../assets/womens-bjj-classes-vault.jpg";
import { useEffect, useRef, useState } from "react";

export default function OurPrograms() {
  const programsContentWrapper = useRef(null);
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

    if (programsContentWrapper.current) {
      observer.observe(programsContentWrapper.current);
    }

    return () => {
      if (programsContentWrapper.current) {
        observer.unobserve(programsContentWrapper.current);
      }
    };
  }, []);

  return (
    // <div className='our-programs-content-wrapper'>
    <div
      className={`our-programs-content-wrapper ${show ? "focused" : ""}`}
      ref={programsContentWrapper}
    >
      <div className="our-programs-header-container">
        <h1>Our Programs</h1>
      </div>

      <div className="programs-card-container">
        {/* <Card style={{ width: '18rem' }}> */}
        <div className="card-group-1">
          <Card className="card-container">
            <div className="card-img1-container">
              <Card.Img
                variant="top"
                src={nogiBjjPhoto}
                className="program-photo"
              />
            </div>

            <Card.Body className="card-body">
              <Card.Title className="program-card-header-text">Adult NOGI</Card.Title>
              <Card.Text>
                NoGi Jiu Jitsu simply means no “Gi” or no traditional kimono
                uniform. NoGi uniforms consist of a rashguard and board shorts,
                very similar to traditional surf attire. In NoGi you will still
                use traditional Jiu Jitsu moves to sweep, submit, and pin your
                opponent.
              </Card.Text>
              <Button variant="primary" className="programs-learn-more-btn">Learn More</Button>
            </Card.Body>
          </Card>

          <Card className="card-container">
            <div className="card-img2-container">
              <Card.Img variant="top" src={giPhoto} className="program-photo" />
            </div>
            <Card.Body className="card-body">
              <Card.Title className="program-card-header-text">Adult Gi</Card.Title>
              <Card.Text>
                In Gi classes you will wear a traditional “Gi” or Jiu Jitsu
                kimono. There are subtle differences in the gripping and
                movement compared to NoGi Jiu-Jitsu however this is an excellent
                class to attend as it will make you a more complete Jiu-Jitsu
                practioner!
              </Card.Text>
              <Button variant="primary" className="programs-learn-more-btn">Learn More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card-group-2">
          <Card className="card-container">
            <Card.Img
              variant="top"
              src={kidsBjjPhoto}
              className="program-photo"
            />
            <Card.Body className="card-body">
              <Card.Title className="program-card-header-text">Kids Classes</Card.Title>
              <Card.Text>
                Our kids classes are broken into two separate age groups: ages
                5-8 and ages 9-12. We will safely walk them through the
                fundamentals of Jiu-Jitsu. It’s a great way to naturally build
                self-esteem, self-respect, patience and problem-solving skills
                in kids.
              </Card.Text>
              <Button variant="primary" className="programs-learn-more-btn">Learn More</Button>
            </Card.Body>
          </Card>

          <Card className="card-container">

            <div className="programs-card-4-img-container">
            <Card.Img
              variant="top"
              src={womensBjjClassPhoto}
              className="program-photo card-4-img"
            />
            </div>

            <Card.Body className="card-body">
              <Card.Title className="program-card-header-text">Women's Classes</Card.Title>
              <Card.Text>
                Women can benefit from the many perks of the practice, including
                weight loss, stress relief, self defense skills and body
                confidence. In this class we will slowly and effectively walk
                you through the core techniques of Jiu-Jitsu and having lots of
                fun while doing it!
              </Card.Text>
              <Button variant="primary" className="programs-learn-more-btn">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

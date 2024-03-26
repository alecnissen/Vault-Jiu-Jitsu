import React from "react";
import Header2 from "./Header2";
import coachJulianPhoto from "../assets/julian-photo-for-vault-website.jpg";
import coachAdalinaPhoto from "../assets/adalina-vault-website-img.jpg";
import coachSabrinaPhoto from "../assets/matt-sabrina-vault-img.jpg";
import bjjPhoto from "../assets/hero-bg.jpg";
import coachMattPhoto from "../assets/matt-kelley-vault-img.jpg";
import coachJudahPhoto from "../assets/judah-img-vault.webp";
import FooterContent from "./FooterContent";

import { useEffect, useRef, useState } from "react";

export default function Instructors() {
  const [showCoach1, setShowCoach1] = useState(false);
  const [showCoach2, setShowCoach2] = useState(false);
  // Add more state variables for other coaches as needed...

  const observer = useRef(null);
  const instructorsRef = useRef([]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const coachId = entry.target.getAttribute("data-coach-id");
          switch (coachId) {
            case "coach1":
              setShowCoach1(true);
              break;
            case "coach2":
              setShowCoach2(true);
              break;
            // Add cases for other coaches...
            default:
              break;
          }
          observer.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.50 });

    instructorsRef.current.forEach((instructor) => {
      observer.current.observe(instructor);
    });

    return () => {
      instructorsRef.current.forEach((instructor) => {
        observer.current.unobserve(instructor);
      });
    };
  }, []);

  return (
    <>
      <Header2></Header2>
      <h1 className="our-instructors-header-text">Our Instructors</h1>
      <div className="instructors-content-wrapper">
        <h3>
          We want to give you the best jiu jitsu instruction and experience
          possible! We are commited to making you the best jiu jitsu practioner
          possible! We are here to help you throughout every step of your jiu
          jitsu jounrney.{" "}
        </h3>

        {/* <div className="coach-container"> */}

        <div
          className={`coach-container ${showCoach1 ? "focused" : ""}`}
          ref={(ref) => {
            instructorsRef.current.push(ref);
          }}
          data-coach-id="coach1"
        >
          <img src={coachJulianPhoto}></img>

          <div className="bio-description-container">
            <h1>Julien Banner</h1>
            <p>
              Julian has been training since 2009 and has dedicated his life to
              jiu jitsu. He received his black belt from Bruno Tostes from Renzo
              Gracie Latham. Julian has won many regional jiu jitsu tournments
              and has traveled the world to further expand his jiu jitsu
              knowledge. Julien's passion and love for teaching shines through
              in every class. He is truly one of the best instructors in the
              world
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>Black Belt under Bruno Tostes from Renzo Gracie Latham</li>
                <li>Radius Invitational Chamption</li>
                <li>Rise 3 Invitational Bronze </li>
                <li>Show The Art Superfight Winner</li>
              </ul>
            </div>

            <p>Favorite submission: Rear naked choke</p>
            <p>
              "My favorite thing about jiu jitsu is the physical and mental
              benefits!"
            </p>
          </div>
        </div>

        {/* <div className="coach-container"> */}

        <div
          className={`coach-container ${showCoach2 ? "focused" : ""}`}
          ref={(ref) => {
            instructorsRef.current.push(ref);
          }}
          data-coach-id="coach2"
        >

          <img src={coachAdalinaPhoto}></img>

          <div className="bio-description-container">
            <h1>Adelina Alvarez</h1>
            <p>
              Adelina, with nearly a lifetime dedicated to jiu-jitsu, brings
              over 11 years of extensive experience to her role. A decorated
              competitor, she has secured victories in various regional and
              international tournaments, consistently adding to her collection
              of medals and accolades. Passionate about her craft, Adelina takes
              immense pride in her role as an instructor at the Vault, where she
              inspires women to embark on their jiu-jitsu journey and transform
              their lives positively.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>Brown Belt under Matt Kelley</li>
                <li>2023 IBJJF Brown Belt Bronze Medalist</li>
                <li>2022 IBJJF Purple Belt Medalist</li>
                <li>2022 Finishers Jiu Jitsu Champion</li>
              </ul>
            </div>

            <p>Favorite submission: Guillotine</p>
            <p>"I love to watch our students grow and learn new skills!"</p>
          </div>
        </div>

        <div className="coach-container">
          <img src={coachSabrinaPhoto}></img>

          <div className="bio-description-container">
            <h1>Matt Kelley</h1>
            <p>
              Matt Kelley, a black belt under Brian Rago of Gracie Humaita
              Philadelphia, boasts extensive experience garnered through years
              of training alongside top jiu-jitsu practitioners nationwide.
              Beyond the mats, Matt is a devoted father and husband, committed
              to guiding others towards unlocking their full potential.
              Alongside his duties at the Vault, Matt shares his expertise by
              teaching weekly classes at Gracie Humaita Philadelphia every
              Sunday at 8 a.m.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>
                  Black Belt under Brain Rago from Gracie Humaita Philadelphia
                </li>
                <li>2022 IBJJF NOGI Bronze Medalist</li>
                <li>FTW 90 Superfight Winner</li>
                <li>Also a small business owner, Prodigy Pest Solutions</li>
              </ul>
            </div>

            <p>Favorite submission: Ankle Lock</p>
            <p>
              "My Goal is to turn you into a weapon and a force for good! I want
              to unlock your potential on and off the mats!"
            </p>
          </div>
        </div>

        <div className="coach-container">
          <img src={bjjPhoto}></img>

          <div className="bio-description-container">
            <h1>Sabrina Kelley</h1>
            <p>
              Sabrina is a dedicated jiu-jitsu instructor with a unique
              background in psychology, seamlessly blending her expertise in
              both disciplines to empower her students both physically and
              mentally. As a blue belt practitioner, she brings a wealth of
              experience and technical knowledge to her classes, fostering a
              supportive learning environment. Sabrina's passion for teaching
              extends to working with children, where she channels her
              enthusiasm for jiu-jitsu into cultivating confidence and
              resilience in her young students while instilling a love for the
              sport.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>
                  PhD In School Psychology from Philadelpha College Of
                  Osteopathic Medicine (PCOM)
                </li>
                <li>Blue Belt under Brain Rago from Gracie Humaita</li>
                <li>Youth Instructor</li>
                {/* <li>Board certified Psychologist</li> */}
              </ul>
            </div>

            <p>Favorite submission: Reverse Triangle</p>
            <p>
              "I love watching our students gain confidence, I love to be a part
              of every students jiu jitsu jounrney!"
            </p>
          </div>
        </div>

        <div className="coach-container">
          <img src={coachJudahPhoto}></img>

          <div className="bio-description-container">
            <h1>Judah Ciervo</h1>
            <p>
              Judah's journey in martial arts began in 1997 with Muay Thai,
              leading to a successful amateur career spanning 9 years. As a Muay
              Thai instructor since 2002, he trained alongside notable MMA
              figures like Eddie Alvarez and Zach Makovsky. Transitioning to
              MMA, Judah won his pro debut in 2008 and continued to compete
              internationally in Muay Thai, showcasing his skills against
              top-tier opponents. While he no longer competes in Muay Thai or
              MMA, Judah remains active in No Gi grappling, achieving notable
              victories including winning the first Finishers Open at 145lbs in
              2018 and securing 3rd place at the IBJJF No Gi World Championship
              in 2021 as a brown belt. In January 2022, he attained his black
              belt in Brazilian Jiu-Jitsu from Phil and Ricardo Migliarese.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>
                  Black Belt under Phil and Ricardo Migliarese from Balance
                  Studios
                </li>
                <li>2022 IBJJF Silver Medalist NOGI at Brown Belt</li>
                <li>2021 IBJJF Bronze Medalist NOGI at Brown Belt</li>
                <li>Professional Muay Thai Experience</li>
              </ul>
            </div>

            <p>Favorite submission: Rear naked choke</p>
            <p>
              "Martial Arts is the best tool for maximizing your potential!"
            </p>
          </div>
        </div>
      </div>
      <FooterContent></FooterContent>
    </>
  );
}

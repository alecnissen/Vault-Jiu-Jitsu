import React from "react";
import Header2 from "./Header2";
import adultNogiImg from "../assets/adult-nogi-img.jpg";
import adultGiImg from "../assets/vault-gi-class-img.jpg";
import kidsClassesImg from "../assets/pexels-cottonbro-studio-7988777.jpg";
import womensClassesImg from "../assets/womens-classes-img-vault.jpg";
import compClassImg from "../assets/vault-comp-class-img.jpeg";
import openMatImg from "../assets/vault-open-mat.jpeg";
import coldPlungeImg from "../assets/cold-plunge.jpeg";
import saunaImg from "../assets/vault-sauna-img-2.jpeg";
// import redLightTherapyImg from "../assets/red-light-img-2.jpeg";
import redLightTherapyImg from "../assets/IMG_2436.jpeg"
import normaTechProgramsComponent from "../assets/updatedNormaTecImg.jpeg";

import iceImg from "../assets/scott-rodgerson-PteeDvACFak-unsplash.jpg";
// import saunaImg from "../assets/vault-sauna-img.jpg";

import coachJulianPhoto from "../assets/julian-photo-for-vault-website.jpg";
import coachAdalinaPhoto from "../assets/adalina-vault-website-img.jpg";
import coachSabrinaPhoto from "../assets/matt-sabrina-vault-img.jpg";
import bjjPhoto from "../assets/hero-bg.jpg";
import coachMattPhoto from "../assets/matt-kelley-vault-img.jpg";
import coachJudahPhoto from "../assets/judah-img-vault.webp";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import FooterContent from "./FooterContent";

export default function ProgramsComponent() {
  const location = useLocation();
  const nogiSectionRef = useRef(null);
  const giSectionRef = useRef(null);
  const kidsSectionRef = useRef(null);
  const womensClassesRef = useRef(null);
  const coldPlungeRef = useRef(null);
  const saunaRef = useRef(null);
  const redLightRef = useRef(null);
  const compressionRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#nogi-section") {
      nogiSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#gi-section") {
      giSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#kids-classes") {
      kidsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#womens-classes") {
      womensClassesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#cold-plunge") {
      coldPlungeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#sauna") {
      saunaRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#red-light") {
      redLightRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#compression") {
      compressionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <Header2></Header2>

      <h1 className="our-programs-header-text">Our Programs</h1>
      <div className="programs-content-wrapper">
        <h3>
          Our classes are crafted to elevate you into becoming the finest
          jiu-jitsu practitioner you can be! Catering to diverse skill levels,
          ages, and genders, we provide a broad range of classes. Additionally,
          our convenient schedules are designed to accommodate your busy
          lifestyle!{" "}
        </h3>

        <div className="program-container">
          <img src={adultNogiImg}></img>

          <div
            className="program-description-container"
            id="nogi-section"
            ref={nogiSectionRef}
          >
            <h1>Adult NOGI</h1>
            <p>
              A no-gi jiu-jitsu class is a dynamic martial arts session that
              focuses on grappling techniques without the use of traditional
              uniforms (gi). Participants learn to apply leverage, joint locks,
              and chokeholds to control and submit opponents. With a strong
              emphasis on agility, speed, and technique, practitioners hone
              their skills in a fast-paced environment, improving their physical
              conditioning, spatial awareness, and problem-solving abilities.
              These classes provide a challenging yet rewarding experience for
              individuals seeking a versatile and practical approach to
              self-defense and martial arts mastery. We will demonstrate the
              technique of the day, allowing you plenty of time to drill and
              hone the move, then you will get a chance to try the new technique
              or position in live positional rounds. After class open training
              will begin, feel free to drill, train or spar, or even just hang
              out and socialize!
            </p>

            <div className="program-detail-list-container">
              <h3>What You Will Learn</h3>
              <ul>
                <li>
                  Learn the modern Jiu Jitsu game, and the leg attacks system
                </li>
                <li>Wrestling and Takedowns</li>
                <li>How to properly pin and control your opponent</li>
                <li>Escaping pins and submissions</li>
                <li>Competition Strategy and mindset</li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            <p>
              "My favorite thing about nogi class is the instruction! Julian has
              an excellent way of breaking down complex moves into something
              very simple to understand" -CJ
            </p>
          </div>
        </div>

        <div className="program-container">
          <img src={adultGiImg}></img>

          <div
            className="program-description-container"
            id="gi-section"
            ref={giSectionRef}
          >
            <h1>Adult GI</h1>
            <p>
              A gi jiu-jitsu class is an immersive training session focused on
              grappling techniques while wearing traditional uniforms (gis).
              Practitioners learn to leverage the fabric of the gi for control,
              grips, and submissions, enhancing their understanding of technique
              and strategy. With a blend of precision, timing, and physical
              exertion, students develop resilience, discipline, and camaraderie
              as they navigate the intricacies of this ancient martial art.
              These classes offer a holistic approach to self-defense and
              personal growth, catering to individuals seeking mental fortitude,
              physical fitness, and a deep-rooted connection to the art of
              jiu-jitsu. Class format is very similar to nogi! Coach will
              demonstrate move of the day, drilling and repetition to sharpen,
              positional training, then open mat/open training will begin! As
              always we are there to answer your questions during or after
              class!
            </p>

            <div className="program-detail-list-container">
              <h3>What You Will Learn</h3>
              <ul>
                <li>
                  Grip techniques and control strategies using the traditional
                  gi attire.
                </li>
                <li>
                  Fundamental grappling movements such as sweeps, takedowns, and
                  submissions.
                </li>
                <li>
                  Defense and escapes from various positions, including guard
                  and mount.
                </li>
                <li>
                  Concepts of leverage, timing, and pressure for effective
                  technique execution.
                </li>
                <li>
                  Application of strategy and problem-solving in live sparring
                  sessions.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            <p>
              "The coolest thing about the Gi classes is the difference from
              NoGi! I find it much more challenging!" -Christian
            </p>
          </div>
        </div>

        <div className="program-container">
          <img src={kidsClassesImg}></img>

          <div
            className="program-description-container"
            id="kids-classes"
            ref={kidsSectionRef}
          >
            <h1>Kids Jiu-Jitsu Classes</h1>
            <p>
              In our kids jiu-jitsu classes, young practitioners learn
              fundamental martial arts skills in a safe and supportive
              environment. Through engaging activities and games, children
              develop coordination, discipline, and confidence while learning
              valuable self-defense techniques. With expert guidance from our
              experienced instructors, kids build physical fitness, mental
              resilience, and essential life skills that extend beyond the mats,
              fostering a sense of camaraderie and achievement.
            </p>

            <div className="program-detail-list-container">
              <h3>What They Will Learn</h3>
              <ul>
                <li>
                  Basic jiu-jitsu techniques tailored for children's skill
                  levels.
                </li>
                <li>
                  Important self-defense strategies and situational awareness
                </li>
                <li>
                  Discipline, respect, and sportsmanship through structured
                  training.
                </li>
                <li>Coordination, balance, and agility exercises.</li>
                <li>
                  Confidence-building drills and teamwork activities in a fun
                  environment.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            <p>
              "The coaches always make class fun, and I am always tired after! I
              always learn something new!" -Tyler
            </p>
          </div>
        </div>

        <div className="program-container">
          <img src={womensClassesImg}></img>

          <div
            className="program-description-container"
            id="womens-classes"
            ref={womensClassesRef}
          >
            <h1>Women's Jiu-Jitsu Classes</h1>
            <p>
              The women's only jiu-jitsu class provides a supportive and
              empowering environment for women of all levels to learn and
              practice Brazilian Jiu-Jitsu techniques. Led by experienced female
              instructors, these classes focus on self-defense, fitness, and
              building confidence in a comfortable setting. Participants develop
              essential skills, improve physical conditioning, and foster
              camaraderie among fellow female practitioners, promoting overall
              well-being both on and off the mats.
            </p>

            <div className="program-detail-list-container">
              <h3>What You Will Learn</h3>
              <ul>
                <li>
                  Self-defense techniques tailored for women's specific needs
                  and situations.
                </li>
                <li>
                  Fundamental jiu-jitsu moves and positions, focusing on
                  leverage and technique over strength.
                </li>
                <li>
                  Strategies for assertiveness, boundary-setting, and
                  confidence-building.
                </li>
                <li>
                  Physical conditioning and fitness exercises designed to
                  enhance strength, agility, and endurance.
                </li>
                <li>
                  Supportive community and empowerment through camaraderie with
                  fellow female practitioners.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            <p>
              "The atmosphere in our classes is awesome! Very positive and
              encouraging. We will help you grow your confidence, get in
              fantastic shape and learn valuable self defense skills! " -Coach
              Lina
            </p>
          </div>
        </div>

        <div className="program-container">
          <img src={compClassImg}></img>

          <div className="program-description-container">
            <h1>Friday Competition Class</h1>
            <p>
              The competition jiu-jitsu class is designed to prepare
              participants for competitive grappling in Gi or NoGi! In this
              dynamic and intense training environment, students focus on
              refining their technique, developing agility, and enhancing their
              grappling skills following the ruleset of the competition the
              student is participating in. Led by experienced coaches, this
              class emphasizes strategy, athleticism, and mental resilience,
              providing participants with the tools and confidence to excel in
              Gi and NoGi jiu-jitsu competitions.
            </p>

            <div className="program-detail-list-container">
              <h3>What You Will Learn</h3>
              <ul>
                <li>
                  Refinement of grappling techniques tailored for competition
                  scenarios.
                </li>
                <li>
                  Strategy development and tactical approaches specific to
                  jiu-jitsu tournaments.
                </li>
                <li>
                  Physical conditioning and agility drills aimed at enhancing
                  competitive performance.
                </li>
                <li>
                  Mental preparation techniques to stay focused and resilient
                  during matches.
                </li>
                <li>
                  Rules interpretation and application for effective competition
                  participation.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            <p>
              "In my opinion this is the best class of the week! I love the
              positional sparring and drilling competition based scenarios. Plus
              it is a fantastic workout!" -Alec
            </p>
          </div>
        </div>

        <div className="program-container">
          <img src={openMatImg}></img>

          <div className="program-description-container">
            <h1>Sunday Open Mat</h1>
            <p>
              Join us for an opportunity to engage in live sparring sessions and
              focused drilling exercises. Whether you're looking to refine
              specific techniques or simply socialize, our open mat welcomes
              students from all schools. Explore new styles, techniques, and
              training partners in a supportive and collaborative environment.
              Open to everyone!
            </p>

            <div className="program-detail-list-container">
              <h3>What You Will Learn</h3>
              <ul>
                <li>
                  Engage in cross-training with peers from diverse schools.
                </li>
                <li>
                  Gain valuable experience through live sparring and positional
                  training.
                </li>
                <li>
                  Enhance endurance and stamina through multiple sparring
                  rounds.
                </li>
                <li>
                  Refine techniques by drilling both strengths and weaknesses.
                </li>
                <li>
                  Receive personalized guidance and training insights from
                  instructors.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            <p>
              "It's just an awesome oppournity to meet new people, and
              experience new styles of Jiu-Jitsu. Sundays at the Vault are the
              place to be!" -Ellis
            </p>
          </div>
        </div>

        <h1 className="recovery-room-header-styles">Recovery Room</h1>

        <h3>
          We offer some of the best recovery methods to our members! Discover
          the benefits of these amazing tools!
        </h3>

        <div className="program-container">
          <img src={coldPlungeImg}></img>

          <div
            className="program-description-container"
            id="cold-plunge"
            ref={coldPlungeRef}
          >
            <h1>Morkozzo Cold Plunge</h1>
            <p>
              "The Morozko cold plunge, or ice bath, is a therapeutic practice
              that involves immersing the body in cold water for a brief period.
              It offers numerous benefits, including reduced muscle soreness,
              improved recovery after intense physical activity, and enhanced
              circulation. Many athletes and wellness enthusiasts incorporate
              cold plunges into their routines to promote overall well-being and
              optimize performance."
            </p>

            <div className="program-detail-list-container">
              <h3>Benefits of Using the Cold Plunge</h3>
              <ul>
                <li>Accelerates muscle recovery after intense workouts.</li>
                <li>Reduces inflammation and muscle soreness.</li>
                <li>Enhances circulation throughout the body.</li>
                <li>Boosts energy levels and invigorates the mind.</li>
                <li>
                  Strengthens the immune system and promotes overall well-being.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            {/* <p>
              "It's just an awesome oppournity to meet new people, and
              experience new styles of Jiu-Jitsu. Sundays at the Vault are the
              place to be!" -Ellis
            </p> */}
          </div>
        </div>

        <div className="program-container">
          <img src={saunaImg}></img>

          <div
            className="program-description-container"
            id="sauna"
            ref={saunaRef}
          >
            <h1>Sauna</h1>
            <p>
              A sauna is a small room or space designed to produce heat,
              typically through the use of dry or wet heat sources. It offers
              various health benefits, including relaxation, stress relief,
              improved circulation, detoxification, and potential enhancement of
              athletic performance. Saunas are widely enjoyed for their ability
              to promote physical and mental well-being.
            </p>

            <div className="program-detail-list-container">
              <h3>Benefits of Using the Sauna</h3>
              <ul>
                <li>Promotes relaxation and reduces stress levels.</li>
                <li>Improves circulation throughout the body.</li>
                <li>Supports detoxification by inducing sweating.</li>
                <li>Helps relieve muscle tension and soreness.</li>
                <li>
                  May enhance skin health and promote a youthful appearance.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            {/* <p>
              "It's just an awesome oppournity to meet new people, and
              experience new styles of Jiu-Jitsu. Sundays at the Vault are the
              place to be!" -Ellis
            </p> */}
          </div>
        </div>

        <div className="program-container">
          <img src={redLightTherapyImg}></img>

          <div
            className="program-description-container"
            id="red-light"
            ref={redLightRef}
          >
            <h1>Red Light Therapy</h1>
            <p>
              Red light therapy, also known as photobiomodulation, involves
              exposing the skin to low levels of red or near-infrared light.
              This non-invasive treatment is believed to stimulate cellular
              function, promoting healing and reducing inflammation. It's used
              for various purposes, including improving skin health, reducing
              pain, and enhancing overall well-being.
            </p>

            <div className="program-detail-list-container">
              <h3>Benefits of Using Red Light Therapy</h3>
              <ul>
                <li>Promotes skin healing and regeneration</li>
                <li>Reduces inflammation and pain</li>
                <li>
                  Enhances collagen production, improving skin elasticity and
                  reducing wrinkles
                </li>
                <li>
                  Boosts circulation, aiding in nutrient delivery and waste
                  removal
                </li>
                <li>Supports mood regulation and may improve sleep quality</li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            {/* <p>
              "It's just an awesome oppournity to meet new people, and
              experience new styles of Jiu-Jitsu. Sundays at the Vault are the
              place to be!" -Ellis
            </p> */}
          </div>
        </div>

        <div className="program-container">
          <img src={normaTechProgramsComponent} id="normatech-img-programs"></img>

          <div
            className="program-description-container"
            id="compression"
            ref={compressionRef}
          >
            <h1>NormaTec Compression Therapy</h1>
            <p>
              NormaTec compression therapy involves the use of dynamic pneumatic
              compression to enhance circulation and expedite recovery in
              muscles and limbs. This therapy employs intermittent pressure to
              aid in reducing inflammation, alleviating muscle soreness, and
              facilitating recovery after intense physical activity or injury.
            </p>

            <div className="program-detail-list-container">
              <h3>Benefits of Using NormaTec Compression Sleeves</h3>
              <ul>
                <li>
                  Facilitates muscle recovery by enhancing circulation and
                  reducing inflammation.
                </li>
                <li>
                  Alleviates muscle soreness and fatigue, promoting quicker
                  recovery after intense workouts or competitions.
                </li>
                <li>
                  Helps prevent swelling and edema by promoting the movement of
                  lymphatic fluid.
                </li>
                <li>
                  Enhances overall athletic performance by reducing muscle
                  fatigue and improving muscle function.
                </li>
                <li>
                  Provides a convenient and effective way to recover from
                  strenuous physical activities, improving overall well-being
                  and readiness for subsequent training sessions.
                </li>
              </ul>
            </div>

            {/* <p>Favorite submission: Rear naked choke</p> */}
            {/* <p>
              "It's just an awesome oppournity to meet new people, and
              experience new styles of Jiu-Jitsu. Sundays at the Vault are the
              place to be!" -Ellis
            </p> */}
          </div>
        </div>
      </div>
      <FooterContent></FooterContent>
    </>
  );
}

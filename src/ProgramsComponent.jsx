import React from "react";
import Header2 from "./Header2";
import adultNogiImg from "../assets/adult-nogi-img.jpg";
import adultGiImg from "../assets/vault-gi-class-img.jpg";
import kidsClassesImg from "../assets/pexels-cottonbro-studio-7988777.jpg";
import womensClassesImg from "../assets/womens-classes-img-vault.jpg";
import compClassImg from "../assets/vault-comp-class-img.jpeg"

import iceImg from "../assets/scott-rodgerson-PteeDvACFak-unsplash.jpg";
import saunaImg from "../assets/vault-sauna-img.jpg";

import coachJulianPhoto from "../assets/julian-photo-for-vault-website.jpg";
import coachAdalinaPhoto from "../assets/adalina-vault-website-img.jpg";
import coachSabrinaPhoto from "../assets/matt-sabrina-vault-img.jpg";
import bjjPhoto from "../assets/hero-bg.jpg";
import coachMattPhoto from "../assets/matt-kelley-vault-img.jpg";
import coachJudahPhoto from "../assets/judah-img-vault.webp";

export default function ProgramsComponent() {
  return (
    <>
      <Header2></Header2>

      <h1 className="our-programs-header-text">Our Programs</h1>
      <div className="programs-content-wrapper">
        <h3>
          We want to give you the best jiu jitsu instruction and experience
          possible! We are commited to making you the best jiu jitsu practioner
          possible! We are here to help you throughout every step of your jiu
          jitsu jounrney.{" "}
        </h3>

        <div className="program-container">
          <img src={adultNogiImg}></img>

          <div className="program-description-container">
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

          <div className="program-description-container">
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

          <div className="program-description-container">
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

          <div className="program-description-container">
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
              "In my opinion this is the best class of the week! I love the positional sparring and drilling competition based scenarios. Plus it is a fantastic workout!" -Alec
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Header2 from "./Header2";
import coachJulianPhoto from "../assets/julian-photo-for-vault-website.jpg";
import coachAdalinaPhoto from "../assets/adalina-vault-website-img.jpg";
import coachSabrinaPhoto from "../assets/matt-sabrina-vault-img.jpg";
import bjjPhoto from "../assets/hero-bg.jpg";
import coachMattPhoto from "../assets/matt-kelley-vault-img.jpg";
import coachJudahPhoto from "../assets/judah-img-vault.webp";

export default function Instructors() {
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

        <div className="coach-container">
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

        <div className="coach-container">
          <img src={coachAdalinaPhoto}></img>

          <div className="bio-description-container">
            <h1>Adalina Alvarez</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              est suscipit facere commodi, ipsa sapiente asperiores autem
              aliquam enim officia illum qui, quod quibusdam vero aut eaque
              optio quidem veritatis! Magni consectetur distinctio fugit.
              Numquam architecto fuga, ullam quasi cumque quas accusantium
              dolores distinctio iure at doloremque laudantium ex eligendi nam
              nobis obcaecati officiis cum quae et blanditiis labore quos.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>Brown Belt under Matt Kelley</li>
                <li>2023 IBJJF Purple Belt World Champion</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
              </ul>
            </div>

            <p>Favorite submission: Bear Trap</p>
            <p>"I love to watch our students grow and learn new skills!"</p>
          </div>
        </div>

        <div className="coach-container">
          <img src={coachSabrinaPhoto}></img>

          <div className="bio-description-container">
            <h1>Matt Kelley</h1>
            <p>
              Matt Kelley is a black belt under Brian Rago of Gracie Humaita
              Philadelphia. Matt has spent years training with and learning from
              some of the best Jiu Jitsu practitioners in the country. He is a
              loving father, husband, and devotes his life to helping others
              unlock their potential both on and off the mats. In addition to
              teaching at the Vault, Matt continues to teach every Sunday at 8
              a.m. at Gracie Humaita Philadelphia.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>
                  Black Belt under Brain Rago from Gracie Humaita Philadelphia
                </li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              est suscipit facere commodi, ipsa sapiente asperiores autem
              aliquam enim officia illum qui, quod quibusdam vero aut eaque
              optio quidem veritatis! Magni consectetur distinctio fugit.
              Numquam architecto fuga, ullam quasi cumque quas accusantium
              dolores distinctio iure at doloremque laudantium ex eligendi nam
              nobis obcaecati officiis cum quae et blanditiis labore quos.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>
                  PhD In School Psychology from Philadelphai College Of
                  Osteopathic Medicine (PCOM)
                </li>
                <li>Blue Belt under Brain Rago from Gracie Humaita</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              est suscipit facere commodi, ipsa sapiente asperiores autem
              aliquam enim officia illum qui, quod quibusdam vero aut eaque
              optio quidem veritatis! Magni consectetur distinctio fugit.
              Numquam architecto fuga, ullam quasi cumque quas accusantium
              dolores distinctio iure at doloremque laudantium ex eligendi nam
              nobis obcaecati officiis cum quae et blanditiis labore quos.
            </p>

            <div className="accolades-list-container">
              <ul>
                <li>
                  Black Belt under Phil and Ricardo Migliarese from Balance
                  Studios
                </li>
                <li>Professional Muay Thai Experience</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
              </ul>
            </div>

            <p>Favorite submission: Rear naked choke</p>
            <p>
              "Martial Arts is the best tool for maximizing your potential!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

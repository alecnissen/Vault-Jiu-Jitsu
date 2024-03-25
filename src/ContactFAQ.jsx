import React from "react";
import Header2 from "./Header2";
import vaultOutsideImg from "../assets/vault-outside-img.jpg";
import instaLogo from "../assets/instagram-svgrepo-com.svg";
import fbLogo from "../assets/facebook-svgrepo-com.svg";
import FooterContent from "./FooterContent";
import ContactForm from "./ContactForm";

export default function ContactFAQ() {
  return (
    <>
      <Header2></Header2>
      <div className="contact-faq-content-wrapper">
        <div className="address-photo-container">
          <div className="address-container">
            <h1>The Vault Jiu Jitsu</h1>
            <h1>25 South Morton Ave Morton, PA 19070 US</h1>
            <h1>info@vaultbjj.com</h1>
            <h1>610-579-0077</h1>

            <div className="contact-icons-links-container">
              <img src={instaLogo}></img>
              <img src={fbLogo}></img>
            </div>
          </div>

          <img src={vaultOutsideImg} className="vault-outsideimg-styles"></img>
        </div>

        <h1 className="FAQ-header-text-styles">FAQ</h1>
        <div className="FAQ-content-container">
            <div className="question-card-content">
              <h6>Do I need to be in shape to try Jiu Jitsu?</h6>
              <p>
                You don’t need to be strong, muscular or even thin to begin
                practicing Jiu Jitsu. With continual practice, you will get
                stronger, more coordinated, gain endurance and shed pounds. We
                encourage everyone to go at their own pace. Just like any
                exercise program, it’s always best to check with your doctor to
                make sure it’s safe for you personally, before taking a class
              </p>
            </div>

            <div className="question-card-content">
              <h6>Am I too old?</h6>
              <p>
                Probably not! There are seniors in their 80s still practicing
                Jiu Jitsu, so you most likely aren’t too old. You don’t need to
                be physically fit either. That will come with training. For
                people who are older, Jiu Jitsu can offer better coordination,
                balance and core strength, all important factors in determining
                how healthy and active we remain as we age. To be safe, check
                with your doctor before starting any workout regime.
              </p>
            </div>

            <div className="question-card-content">
              <h6>Do I have to compete?</h6>
              <p>
                Absolutely not. Competitions can be fun for many people to meet
                their goals and prove themselves, but they are 100% optional and
                most students prefer to just practice for the physical and
                mental benefits of Jiu Jitsu and for the fun, supportive
                environment of the classes, rather than to compete.
              </p>
            </div>
          

            <div className="question-card-content">
              <h6>How do I prepare for my first class?</h6>
              <p>
                There’s really not much prep work to do. Come to your first
                class with an open mind, ready to learn and you’ll do just fine!
                Just remember our purpose here is to help you! Gi uniforms are
                available and we suggest wearing a rash guard on top and spandex
                shorts underneath.
              </p>
            </div>

            <div className="question-card-content">
              <h6>Is Jiu Jitsu safe?</h6>
              <p>
                Jiu Jitsu is an extremely safe sport and is a martial arts form
                with some of the fewest injuries. Because we are not punching or
                kicking and moves are focused more on grappling at ground level,
                there are far fewer impact injuries. We also go a step further
                to personally make safety a key focus of our classes.
              </p>
            </div>

            <div className="question-card-content">
              <h6>How should I start?</h6>
              <p>
                Great question! Click here to sign up or call/text 610-579-0077
                at any time! We are happy to answer any questions you may have.
                Then, put on your gear, grab a water bottle (maybe a towel) and
                head on over to 25 S. Morton! Take that first step toward
                Unlocking your potential at VAULT JIU JITSU
              </p>
            </div>
          
        </div>
      </div>
      <ContactForm></ContactForm>
      <FooterContent></FooterContent>
    </>
  );
}

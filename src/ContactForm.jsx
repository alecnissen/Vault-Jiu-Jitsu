import React from 'react'

export default function ContactForm() {
  return (
    <div className='contact-form-wrapper'>

        <div className='contact-form-title-subtitle-container'>
        <h1>VAULT JIU JITSU - YOUR CONVENIENT DELAWARE COUNTY BRAZILIAN JIU JITSU ACADEMY!</h1>
        <p>Located conveniently in Morton, Del PA close to I-95, The Blue Route 476 and South Philadelphia and minutes away from Philadelphia, Glen Mills, Broomall and The Main Line</p>
        <p>Please don't hesistate to contact us! We cannot wait to be a part of your jiu jitsu and self improvement jounrney!</p>
        <h3>Contact Us</h3>
        </div>

        <div className='contact-form-input-container'> 


      <div className='contact-form-name-email-phone-container'>

        <div className='label-input-pair-name'>
        <label>Full Name</label>
        <input type='text' placeholder=''></input>
        </div>

        <div className='label-input-pair-email'>
        <label>Email Address</label>
        <input type='email' placeholder=''></input>
        </div>

        <div className='label-input-pair-phone'>
        <label>Phone Number</label>
        <input type='number' placeholder=''></input>
        </div>

        </div>

        <div className='label-input-pair-msg'>
        <label>Message to Owner</label>
        <textarea placeholder=''></textarea>
        </div>


        <button>Send Message</button>

        </div>


    </div>
  )
}



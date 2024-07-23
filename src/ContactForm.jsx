import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? '' : 'This field is required.';
    tempErrors.email = formData.email ? '' : 'This field is required.';
    tempErrors.phone = formData.phone ? '' : 'This field is required.';
    tempErrors.message = formData.message ? '' : 'This field is required.';

    setErrors({
      ...tempErrors
    });

    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://vault-jiu-jitsu-api.fly.dev/contact', formData)
      .then((response) => {
        console.log(response.status, response.data);

        setSubmitted(true);

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Submission Failed');
      });
  };

  return (
    <div className='contact-form-wrapper'>
      <div className='contact-form-title-subtitle-container'>
        <h1>VAULT JIU JITSU - YOUR CONVENIENT DELAWARE COUNTY BRAZILIAN JIU JITSU ACADEMY!</h1>
        <p>Located conveniently in Morton, Del PA close to I-95, The Blue Route 476 and South Philadelphia and minutes away from Philadelphia, Glen Mills, Broomall and The Main Line</p>
        <p>Please don't hesitate to contact us! We cannot wait to be a part of your jiu jitsu and self-improvement journey!</p>
        <h3>Contact Us</h3>
      </div>
      <form className='contact-form-input-container' onSubmit={handleSubmit}>
        <div className='contact-form-name-email-phone-container'>
          <div className='label-input-pair-name'>
            <label>Full Name</label>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              placeholder=''
            />
            {errors.fullName && <span className='error'>{errors.fullName}</span>}
          </div>
          <div className='label-input-pair-email'>
            <label>Email Address</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder=''
            />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>


          <div className='label-input-pair-phone'>
            <label>Phone Number</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder=''
            />
            {errors.phone && <span className='error'>{errors.phone}</span>}
          </div>
        </div>
        <div className='label-input-pair-msg'>
          <label>Message to Owner</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder=''
          />
          {errors.message && <span className='error'>{errors.message}</span>}
        </div>
        <button type='submit'>Send Message</button>
      </form>
      {submitted && <p className='success'>Thank you for contacting us!</p>}
    </div>
  );
}






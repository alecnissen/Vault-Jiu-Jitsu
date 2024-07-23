import React, { useState } from 'react';
import axios from 'axios';

const EmailSubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/subscription', { email })
            .then((response) => {
                console.log(response.status, response.data);
                setSubmitted(true);
                setEmail('');
            })
            .catch((error) => {
                console.error('There was an error!', error);
                alert('Submission Failed');
            });
    };

    return (
        <div className="footer-label-input-pair-email">
            <h5>Subscribe to our email for exclusive news and offers!</h5>
            <form onSubmit={handleSubmit}>
                <label>Email Address</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <button type="submit">Subscribe</button>
            </form>
            {submitted && <p>Thank you for subscribing!</p>}
        </div>
    );
};

export default EmailSubscriptionForm;
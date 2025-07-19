import React from 'react';
import './ContactMe.css';
const ContactMe = () => {
  return (
    <section className="contactMeSectionContainer">
      <h1 className="contactMeSectionTitle">Contact Me</h1>
      <p className="contactMeSubtitle">I'd love to hear from you! Fill out the form below and I'll get back to you soon.</p>
      <form className="contactMeForm">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={4} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactMe; 
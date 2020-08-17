import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <section id="what_we_section" class="feature-section">
      <div class="w-full">
        <h2 class="text-water-blue">Contact Us</h2>
        <div class="contact-us-desc"></div>
          <p class="contact-us-intro-text sm:text-sm">
            Save my number
          </p>
          <div class="contact-phone text-center">
            <div class="svg_container_small">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F44336" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div class="phone-number">
                +91-7387559311
            </div>
          </div>
         <div class="contact-whatsapp flex text-center">
            <div class="svg-whatsapp-container">
                <img src="./assets/images/icons8-whatsapp.svg" width="30" height="30"></img>
            </div>
            <div class="whatsapp-number">
                +91-7387559311
            </div>
         </div>
      </div>
    </section>
  );
};

export default ContactUs;

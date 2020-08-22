import React from 'react';
import './order.css';

const OrderDetails = () => {
  return (
    <section id="how_we_section" class="feature-section">
      <div class="w-full">
        <h2 class="text-water-blue">How to order </h2>
        <div class="order-details-box">
            <div class="order-details-intro-text">
                Let's go step by step 
            </div>
            <div class="order-details-images">
                <div class="order-details-images-mobile">
                  <div class="image-place-holder">
                      <img alt="mobile-delivery-image" src="./assets/images/mobile-delivery.png"></img>
                       <p class="help-text"><h6>You Call/Text</h6></p>
                  </div>
                  <div class="image-place-holder">
                      <img alt="mobile-delivery-image" src="./assets/images/we-talk.png"></img>
                       <p class="help-text"><h6>We Talk/Chat</h6></p>
                  </div>
                  <div class="image-place-holder">
                      <img alt="mobile-delivery-image" src="./assets/images/heart.png"></img>
                       <p class="help-text"><h6>We send you a welcome note</h6></p>
                  </div>
                  <div class="image-place-holder">
                      <img alt="mobile-delivery-image" src="./assets/images/travel.png"></img>
                       <p class="help-text"><h6>Delivery Starts</h6></p>
                  </div>    
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;

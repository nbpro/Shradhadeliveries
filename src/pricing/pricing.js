import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <section id="how_we_section" class="feature-section">
      <div class="w-full">
        <h2 class="text-water-blue">How much they cost ?</h2>
        <div class="w-full">
          <div class="description delivery-intro">
            <h2 class="pricing-message">We don't want to confuse you by</h2>
            <h2 class="pricing-message">slowing 10 different plans so</h2>
            <h2 class="pricing-message">there is only 1 and we call it.</h2>
            <div class="basic-plan">
                <div class="intro text-center ">the basic</div>
                <div class="pricing-box text-center pricing-text">
                    <p class="text-base sm:text-sm md:text-sm lg:text-xl mb-6 mt-2">What's in Basic</p>
                    <p class="text-center">-30 Flower Packets.</p>
                    <p class="text-center">- Every packet cost Rupees 15/-</p>
                    <p class="text-center">- Do the maths.</p> 
                    <p class="text-center">- Rupees 450/- per month.</p>
                    <p class="text-center">- Use and Pay.</p>
                    <p class="text-center">- Billing at the end of month.</p>
                    <p class="text-center">- No delivery charges.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

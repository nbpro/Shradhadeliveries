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
            <h2 class="pricing-message">showing 10 different plans so</h2>
            <h2 class="pricing-message">there is only 1 and we call it.</h2>
            <div class="intro text-center">the basic</div>
            <div class="basic-plan flex justify-center">
                <div class="pricing-box text-center pricing-text text-center">
                    <p class="text-base sm:text-sm md:text-sm lg:text-xl mb-6 mt-2">What's in Basic</p>
                    <p class="text-center sm:text-sm">- 30 Flower Packets.</p>
                    <p class="text-center sm:text-sm">- Every packet cost Rupees 15/-</p>
                    <p class="text-center sm:text-sm">- Do the maths.</p> 
                    <p class="text-center sm:text-sm">- Rupees 450/- per month.</p>
                    <p class="text-center sm:text-sm">- Use and Pay.</p>
                    <p class="text-center sm:text-sm">- Billing at the end of month.</p>
                    <p class="text-center sm:text-sm">- No delivery charges.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

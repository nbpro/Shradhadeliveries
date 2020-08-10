import React from 'react';
import './features.css';

const Features = () => {
  return (
    <section id="what_we_section" class="feature-section">
      <div class="container w-screen">
        <h2 class="text-water-blue">What we do</h2>
        <div class="description">
          <div class="flex">
            <div class="flex-1 text-center px-4 py-2 m-2">
               This is first image
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2">
              This is second image
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2">
              This is third image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

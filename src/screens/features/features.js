import React from 'react';
import './features.css';
import Viewer from 'react-viewer';

const Features = () => {

  const [ visible, setVisible ] = React.useState(false);

  return (
    <section id="what_we_section" class="feature-section">
      <div class="w-full">
        <h2 class="text-water-blue">What we do</h2>
        <div class="description">
          <div class="flex">
            <div class="flex-1 text-center px-4 py-2 m-2">
              <img src="./assets/images/flower-grass-shradha.png"></img>
              <p>
                <h3 class="text-center">We pluck flowers</h3>
              </p>
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2">
              <img src="./assets/images/gift.png"></img>
              <p>
                <h3 class="text-center">Pack It up</h3>
              </p>
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2">
              <img src="./assets/images/home.png"  width="400" height="300"></img>
              <p>
                <h3 class="text-center">Deliver at your doorstep</h3>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="description delivery-intro mb-3">
          <h2 class="delivery-message">Yeah! we deliver</h2>
          <h2 class="delivery-message">flowers everyday</h2>
          <h2 class="delivery-message">at your doorstep</h2>
        </div>
      </div>

      <div class="description">
          <h2 class="delivery-message">We deliver this</h2>
          <div class="flex">
            <div class="flex-1 text-center px-4 py-2 m-2" onClick={() => { setVisible(true); } }>
                <img class="flower-rounded" src="./assets/images/flower1.jpeg" width="400" height="300"></img>
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2" onClick={() => { setVisible(true); } }>
                <img class="flower-rounded" src="./assets/images/flower2.jpeg" width="400" height="300"></img>
            </div>
            <div class="flex-1 text-center px-4 py-2 m-2" onClick={() => { setVisible(true); } }>
                <img class="flower-rounded" src="./assets/images/flower3.jpeg" width="400" height="300"></img>
            </div>
          </div>
      </div>
      <Viewer
      visible={visible}
      onClose={() => { setVisible(false); } }
      images={[{src: './assets/images/flower1.jpeg', alt: 'original flower 1'}, {src: './assets/images/flower2.jpeg', alt: 'original flower 2'}, {src: './assets/images/flower3.jpeg', alt: 'original flower 3'}]}
      />
    </section>
  );
};

export default Features;

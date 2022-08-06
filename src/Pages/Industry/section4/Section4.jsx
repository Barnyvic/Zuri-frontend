import React from 'react'
import './Section4.css'
import wire from '../../../Components/Assets/svg/section3wire (1).svg'
import star from "../../../Components/Assets/Star.jpg";

const Section4 = () => {
  return (
    <section class="section-three">
      <div class="why-zuri">
        <div class="zuri-image">
          <img src={wire} alt="wire" />
        </div>

        <div class="star-container">
          <div class="zuri">
            <p>Why Zuri Training?</p>
            <h1>
              Here at Zuri, you gain access to enough knowledge to introduce and
              aid your success in the tech industry.
            </h1>
          </div>
          <div class="star">
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4
import React from 'react'
import './Section3.css'
import ingressive from '../../../Components/Assets/ingresive.jpg'

const Section3 = () => {
  return (
    <section>
      <hr />

      <div>
        <div class="ingressive-for-good">
          <div class="words">
            <h1>
              INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN
              DONATION...
            </h1>
          </div>
          <div class="logo">
            <img src={ingressive} alt="logo" />
          </div>

          <div class="words">
            <p>
              to help increase the earning power of African youths by providing
              them with tech skills, community, tools, resources, and jobs..
              <a href="/#">Read More</a>
            </p>
          </div>
        </div>
      </div>

      <hr />
    </section>
  );
}

export default Section3

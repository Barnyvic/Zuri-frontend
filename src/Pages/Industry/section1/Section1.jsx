import React from 'react'
import './Section1.css'
import logo from '../../../Components/Assets/svg/logo.svg'
import thumbs from '../../../Components/Assets/thumbs.png'

const Section1 = () => {
  return (
    <section>
      <header class="container">
        <nav>
          <div class="nav-logo">
            <a href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div class="nav-links">
            <a href="/#">About</a>
            <a href="/#">Why Us?</a>
            <a href="/#">Stacks Covered</a>
            <a href="/#">FAQs</a>
          </div>
          <div class="enrol-btn">
            <img src={thumbs} alt="thumb" />
            <a href="/#">Enroll Now</a>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Section1
import React from 'react'
import './Firstpage.css'

const Firstpage = () => {
  return (
    <section class="wrapper container ">
      <div class="show">
        <h2>
          Zuri<span>.</span>Team
        </h2>
        <h1>Learn, Build, Grow</h1>

        <p>
          Unlock your Brilliance with our hands-on <a href="/#">beginner</a> and
          <a href="/#">expert training</a>. Zuri Team has been immensely
          successful in creating a global network of a highly adept intelligent
          workforce that can help your company achieve their mission-critical
          <a href="/#/">projects and goals</a>
        </p>

        <div class="button-class">
          <a class="btn btn-primary" href="./Pages/industry.html">
            I'm new to the industry
          </a>
          <a class="btn btn-secondary" href="./Pages/experience.html">
            I need industry experience
          </a>
        </div>
      </div>
    </section>
  );
}

export default Firstpage
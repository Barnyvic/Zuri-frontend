import React from "react";
import "./Firstpage.css";
import { Link } from "react-router-dom";
import "../../Pages/Industry/Industry";

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
          <Link to="/industry">
            <button className="btn btn-primary">I'm new to the industry</button>
          </Link>
          <Link to="/Experience">
            <button className="btn btn-secondary">
              I need industry experience
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Firstpage;

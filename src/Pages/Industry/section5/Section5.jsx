import React from "react";
import Section5props from "./Section5props";
import "./Section5.css";
import curve1 from "../../../Components/Assets/curve1.png";
import curve2 from '../../../Components/Assets/svg/curve.svg'
import curve3 from '../../../Components/Assets/svg/curve3.svg'
import curve4 from '../../../Components/Assets/svg/curve4.svg'
import curve5 from '../../../Components/Assets/svg/curve5.svg'
import curve6 from '../../../Components/Assets/svg/curve6.svg'

const Section5 = () => {
  return (
    <section>
      <div className="container cards-container">
        <div className="bg-red">
          <div className="flex-items">
            <div className="number">
              <h1>01</h1>
            </div>
            <div className="image-con">
              <img src={curve1} alt="" />
            </div>
          </div>
          <h1>Fully</h1>
          <h1>Remote</h1>
          <p>100% online classes available to anyone in the world.</p>
        </div>
        <Section5props
          number="02"
          image={curve2}
          header="Hands-on"
          header2="Experience"
          paragraph="We don't just teach you theory, we show you how to build things."
        />
        <Section5props
          number="03"
          image={curve3}
          header="Collaborative"
          header2="Learning"
          paragraph="We connect you with like minds to grow together."
        />
        <Section5props
          number="04"
          image={curve4}
          header="Real-life"
          header2="Projects"
          paragraph="We give CV worthy projects to help you hit the ground running."
        />
        <Section5props
          number="05"
          image={curve5}
          header="Beginner"
          header2="Friendly"
          paragraph="We provide step-by-step procedures on how to get things done."
        />
        <Section5props
          number="06"
          image={curve6}
          header="In-program"
          header2="Mentorship"
          paragraph="During and after the program you have access to experience seniors."
        />
      </div>
    </section>
  );
};

export default Section5;

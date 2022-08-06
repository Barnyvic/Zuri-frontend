import React from "react";
import "./Section6.css";
import wire1 from "../../../Components/Assets/svg/section5wire.svg";
import data from "./Section-data";
import girl from "../../../Components/Assets/section5-image.png";
import dot from "../../../Components/Assets/svg/dotsection5 (1).svg";

const Section6 = () => {
  return (
    <section className="section-six">
      <div className="training-section">
        <div className="img-con">
          <img src={wire1} alt="" />
        </div>
        <div className="container training">
          <div className="quality">
            <p>We will help you get started</p>
            <h1>High quality training with hands-on practice</h1>
            <p className="p-tag">
              We give you weekly tasks, ranging from easy to complex, as you
              progress from stage to stage; making it to the final stage means
              you are now ready to continue learning and growing independently
            </p>
            <a href="/">Enroll Now</a>

            <div className="split">
              {data.map(({ id, pix, description }) => {
                return (
                  <div className="deco" key={id}>
                    <div className="image1">
                      <img src={pix} alt="" />
                    </div>
                    <div className="typo">
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="girl-container">
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
      <div className="dot-container">
        <img src={dot} alt="" />
      </div>
    </section>
  );
};

export default Section6;

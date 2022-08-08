import React from "react";
import './Section7.css'
import wire3 from '../../../Components/Assets/svg/section6.svg'
import sectionData from "./Section7data";

const Section7 = () => {
  return (
    <section className="container section-seven">
      <div className="scope">
        <div className="scope-words">
          <span>Scope Of Program</span>
          <h1>
            Here is the list of areas that will be explored in the training.
          </h1>
        </div>
        <div className="scope-image">
          <img src={wire3} alt="" />
        </div>
      </div>

      <div className="tech-tools">
        {sectionData.map(({ title, icons, description }) => {
          return (
            <div className="tool-card">
              <h3>{title}</h3>
              <div className="icons">
                {icons.map((icon, index) => (
                  <img key={index} src={icon} alt="" />
                ))}
              </div>
              <p>{description}</p>
            </div>
          );
        })}
      </div>

      <div class="button">
        <button>Enroll Now</button>
      </div>
    </section>
  );
};

export default Section7;

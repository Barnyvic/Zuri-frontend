import './Section10.css'
import circle from "../../../Components/Assets/circle.png";
import bend from '../../../Components/Assets/svg/bend1.svg'
import round from '../../../Components/Assets/svg/round.svg'
import dotted from "../../../Components/Assets/svg/dotsection5 (1).svg";
import curve2 from "../../../Components/Assets/svg/curve2.svg";

const Section10 = () => {
  return (
    <section>
      <div className="container break">
        <div className="break-image">
          <img src={circle} alt="" />
        </div>

        <div className="tech-industry">
          <div className="tech-container">
            <div className="tech-image">
              <img src={round} alt="" />
            </div>
            <div className="word-container1">
              <p>Get Started</p>
              <h1>Break into the tech industry like a Pro.</h1>
              <div className="qual">
                <a href="/">Enroll Now</a>
              </div>
            </div>
            <div className="bend">
              <img src={bend} alt="" />
            </div>
          </div>

          <div className="tech-container-2">
            <div className="bend1">
              <img src={curve2} alt="" />
            </div>
            <div className="circle-cont">
              <img src={dotted} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section10
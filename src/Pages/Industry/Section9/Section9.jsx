import "./Nine.css";
import wire8 from "../../../Components/Assets/svg/section7wire.svg";
import redstar from "../../../Components/Assets/Star-red.svg";
import time from "../../../Components/Assets/time.png";
import hourglass from "../../../Components/Assets/hour.png";
import move from "../../../Components/Assets/svg/move.svg";

const Section9 = () => {
  return (
    <section>
      <div className="structure container">
        <div className="wire-container">
          <div className="wires1">
            <img src={wire8} alt="" />
          </div>
          <div className="wires2">
            <img src={redstar} alt="" />
          </div>
        </div>

        <div className="title-container1">
          <span>Structure</span>
          <h1>Program Structure</h1>
          <p>
            There are 2 broad paths in this program based on your availability.
          </p>
        </div>
        <div className="items-flexed">
          <div className="first-item">
            <img src={move} alt="" />
          </div>
          <div className="padding-container">
            <div className="card-one">
              <div className="items-card">
                <h1>Full-time</h1>
                <p>Requires at least 25 hours weekly on program content.</p>

                <h2>Available Tracks:</h2>
                <ul>
                  <li>
                    Full Stack: Backend (Python, JavaScript), Frontend (HTML,
                    CSS, JavaScript) & DevOps
                  </li>
                  <li>Design: Figma, Adobe XD</li>
                </ul>

                <h2>Phases:</h2>
                <ul>
                  <li>Training Phase</li>
                  <li>Project Phase</li>
                </ul>
                <h2>Post Program:</h2>
                <ul>
                  <li>Certification of Attendance</li>
                  <li>
                    <a href="/#">Zuri Internship </a>
                  </li>
                  <li>Laptop Reward (upgrade or new one)</li>
                  <li>Job Placement</li>
                  <li>Zuri Talent Pool</li>
                  <li>More Training:</li>
                  <p>Interview Prep</p>
                  <p>Algorithms & Data Structure</p>
                  <p>Freelance Setup & Training</p>
                  <p>LinkedIn Optimization</p>
                  <p>CV Review</p>
                </ul>
                <div className="items-card-img">
                  <img src={hourglass} alt="" />
                </div>
              </div>
            </div>

            <div className="card-one">
              <div className="items-card">
                <h1>Part-time</h1>
                <p>Requires at least 11 hours weekly on program content.</p>

                <h2>Available Tracks:</h2>
                <ul>
                  <li>Frontend: HTML, CSS, JavaScript</li>
                  <li>Backend: Can only select one backend language</li>
                  <p>Python,</p>
                  <p>PHP,</p>
                  <p>Javascript</p>
                  <li>Design:</li>
                  <p>Figma</p>
                </ul>

                <h2>Phases:</h2>
                <ul>
                  <li>Training Phase</li>
                  <li>Project Phase</li>
                </ul>
                <h2>Post Program:</h2>
                <ul>
                  <li>Certification of Attendance</li>
                  <li>Zuri Internship</li>
                </ul>
                <div className="items-card-img">
                  <img src={time} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;

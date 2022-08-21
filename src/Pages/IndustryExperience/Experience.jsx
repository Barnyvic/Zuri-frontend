import React from 'react'
import NavLogo from "../../Components/Assets/svg/logo2.svg"
import HomeImg from "../../Components/Assets/Homeimg.png"
import thicker from "../../Components/Assets/svg/thick2.svg"
import line1 from "../../Components/Assets/svg/line1.svg"
import "../IndustryExperience/Experience.css"

function Experience() {
  return (
    <section className='Main__Container'>
        {/* Navbar section starts */}
        <section className='Nav__bar'>
          <section className="inExp_Navcontainer">
            <img src={NavLogo} alt="Nav-Logo" />
            <div className="inExp_list">
                <ul>
                   <li className='inExp-listitems'><a href="#Home">Home</a></li>
                   <li className='inExp-listitems'><a href="/">Impact</a></li>
                   <li className='inExp-listitems'><a href="/">Why us</a></li>
                </ul>
                <p className='talent small'>Hire talents</p>
            </div>
          </section>
        </section>
        {/* Navbar section ends */}

    {/* Home section starts  */}
    <section id='Home'>
        <section className='Home_container'>
            <div className="Home_Content">
                <div className="Homeheader">
                     <h3>Vetted and Trusted <span>talents</span><img src={thicker} alt="yelow curve" /></h3>
                </div>
               <div className="Home-para-p">
                 <p>At Zuri Team, we train, test and place talent in various industries. We have access to the best pool of skills in the tech Industry.</p>
               </div>
                <div className="Homedown">
                    <p className="talent">Hire Talent</p>
                    <p className='talent gray'>Join Talent pool</p>
                </div>
            </div>
            <img className='Home_img' src={HomeImg} alt="Homeimage" />
            <img className='line1' src={line1} alt="yellow curved line" />
        </section>
    </section>
    {/* Home section ends */}
    </section>
  )
}

export default Experience
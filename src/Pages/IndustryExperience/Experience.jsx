import React from 'react'
import NavLogo from "../../Components/Assets/svg/logo2.svg"
import HomeImg from "../../Components/Assets/Homeimg.png"
import thicker from "../../Components/Assets/svg/thick2.svg"
import line1 from "../../Components/Assets/svg/line1.svg"
import country1 from "../../Components/Assets/svg/ENG.svg"
import country2 from "../../Components/Assets/svg/GER.svg"
import country3 from "../../Components/Assets/svg/NIG.svg"
import country4 from "../../Components/Assets/svg/ussa.svg"
import country5 from "../../Components/Assets/svg/ind.svg"
import impactImg from "../../Components/Assets/section2.png"
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
                   <li className='inExp-listitems'><a href="#Impact-section-main-container">Impact</a></li>
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
                    <p className="talent talred">Hire Talent</p>
                    <p className='talent gray'>Join Talent pool</p>
                </div>
            </div>
            <img className='Home_img' src={HomeImg} alt="Homeimage" />
            <img className='line1' src={line1} alt="yellow curved line" />
        </section>
    </section>
    {/* Home section ends */}

    {/* impact section starts  */}
     <section id='Impact-section-main-container'>
      <div className="impact-section-container">
        <div className="impact-section-content">
          <p className="typography1">we have impacted the lives of <span className='red'>thousands</span> around the world</p>
          <p className='typography2'>6,000 trained in 14 months</p>
          <p className='typography3'> Talent Placed in 5 countries</p>
          <div className="countriesSvg">
            <img src={country2} alt="" className="country" />
            <img src={country1} alt="" className="country" />
            <img src={country5} alt="" className="country ind" />
            <img src={country3} alt="" className="country" />
            <img src={country4} alt="" className="country" />
          </div>
        </div>
      
         <img src={impactImg} alt="" className="Impact_img" />
      
      </div>
     </section>
    {/* Impact section ends  */}
    </section>
  )
}

export default Experience
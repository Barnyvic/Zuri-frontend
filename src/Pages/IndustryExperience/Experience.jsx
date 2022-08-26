import React from 'react'
import FooterLogo from "../../Components/Assets/svg/FooterLogo.svg"
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
import redCurve from "../../Components/Assets/svg/redcurve.svg"
import write from "../../Components/Assets/svg/write.svg"
import hand from  "../../Components/Assets/svg/hand.svg"
import mech from "../../Components/Assets/svg/mech.svg"
import people from "../../Components/Assets/svg/people.svg"
import many from "../../Components/Assets/svg/many.svg"
import {AiFillFacebook} from "react-icons/ai"
import  {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
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
                   <li className='inExp-listitems'><a href="#whyus">Why us</a></li>
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
            <img src={country2} alt="Germany" className="country" />
            <img src={country1} alt="England" className="country" />
            <img src={country5} alt="India" className="country ind" />
            <img src={country3} alt="Nigeria" className="country" />
            <img src={country4} alt="USA" className="country" />
          </div>
        </div>
         <img src={impactImg} alt="" className="Impact_img" />
      </div>
      <div className="SkillsandTalent">
        <div className="SkillsandTalent-content">
          <h3 className='SkillsandTalent-content-header'>Skills of our <span>talents</span> that <br /> you will need</h3>
          <div className="SkilsandTalent-option1">
            <p className="options">UI/UX Designers</p>
            <p className="options">Backend Developers</p>
            <p className="options">DevOps Engineers</p>
            <p className="options">Frontend Developers</p>
             <img src={line1} alt="yellow line svg" />
          </div>
          <h3>Where our talents work</h3>
           <div className="SkilsandTalent-option2">
            <p className="option2">GitHub</p>
            <p className="option2">Microsoft</p>
            <p className="option2">Reskill Americans</p>
            <p className="option2">Flutterwave</p>
            <p className="option2">Google</p>
            <p className="option2">Career Transitioners</p>
          </div>
        </div>
      </div>
     </section>
    {/* Impact section ends  */}
    {/* why us starts */}
    <section id="whyus">
      <div className="whyuscontainer">
        <div className="whyus-content_container">
          <h3>Why Hire our <span>Talents</span></h3>
          <img src={redCurve} alt="" />
          <div className="whyus-Content">{
            whyUsContent.map((items)=>(
              <div className="content--" >
                <img src={items.image} alt="" />
               <p>{items.text}</p>
              </div>
            ))
          }
          </div>
          <div className="Homedown2">
              <p className="talent talred2">Hire Talent</p>
              <p className='talent gray2'>Join Talent pool</p>
          </div>
        </div>
      </div>
    </section>
    {/* why us ends */}
      <footer>
       <div className="footer_MainContainer">
         <div className="footer-Content1">
         <a href="/Experience"> <img src={FooterLogo} alt="Footer-Logo" /></a>
          <div className="socials-container">
            <a href="https://www.facebook.com/thezuriteam/" target="_blank" rel="noopener noreferrer"><AiFillFacebook className='social'/></a>
            <a href="https://www.linkedin.com/company/zuri-team/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='social'/></a>
            <a href="https://twitter.com/thezuriteam" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className='social'/></a>
            <a href="https://www.youtube.com/thezuriteam" target="_blank" rel="noopener noreferrer"> <AiFillYoutube className='social'/></a>
          </div>
         </div>
         <div className="footer-Content2">
          <p className='copyright'>&copy;Copyright {new Date().getFullYear()} ZURI TEAM. All rights Reserved</p>
          <hr className='horizontal'/>
          <p className="mail"><a href="mailto:talent@zuri.team">talent@zuri.team</a></p>
         </div>
       </div>
      </footer>
    {/* footer starts */}
    
    {/* footer ends */}
    </section>
  )
}

const whyUsContent = [
  {
    id:1,
    text:"Zuri Team has a highly skilled set of talents that are built on referral and successful partnerships.",
    image:people
  },
  {
   id:2,
    text:"Our recruiters are exceptionally skilled in identifying top talent around the globe and matching them with the client's needs.",
    image:mech 
  },
  {
    id:3,
    text:"We have an 85% fill ratio for every open position we partner for.",
    image:hand
  },
  {
    id:4,
    text:"Contract renewal rate for our consultant is 90 percent.",
    image:write
  },
  {
    id:5,
    text:"60% of our consultants are converted to full-time employees.",
    image:many
  }
]

export default Experience
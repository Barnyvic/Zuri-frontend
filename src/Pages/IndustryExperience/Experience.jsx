import React from 'react'
import NavLogo from "../../Components/Assets/svg/logo2.svg"

function Experience() {
  return (
    <section className='Main__Container'>
        <section className="inExp_Navcontainer">
            <img src={NavLogo} alt="Nav-Logo" />
            <div className="inExp_redbackground">
                <p>Hire talents</p>
            </div>
            </section>
    </section>
  )
}

export default Experience
import React from 'react'
import './intro.css';
import bg from '../../assets/Profile.png'
import { Link } from 'react-scroll';
import btn from '../../assets/hireme.png'

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Aman.</span><br />A Website Devloper <br /><span className='location'>based in India.</span> </span>
            <p className="introPara"> I am a skilled website developer with experience in creating <br />visually appealing and user-friendly websites.</p>
            <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} > <button className='btn'><img src={btn} alt="hire" className='btnImg' />Hire Me</button> </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
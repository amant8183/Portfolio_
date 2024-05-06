import React from 'react'
import './skills.css';
import MernStack from '../../assets/Mern.png'
import WebDesign from '../../assets/website-design.png'
import ProblemSolving from '../../assets/Problem-solving.webp'

function Skills() {
  return (
    <section id="skills">
        <span className="skillTitle">
            What I Do 
        </span>
        <span className="skillDescription">
            I am a skilled and passionate Website Developer/Designer with experience in creating virtually appealling and user friendly websites. Also I have great problem solving skills. 
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={MernStack} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>MERN Stack Development</h2>
                    <p>A passionate MERN stack developer with expertise in HTML, CSS, Javascript, React , Node. js, Express, and MongoDB.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Highly motivated and creative Entry Level Web Designer with a strong passion for creating visually appealing and user-friendly websites.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ProblemSolving} alt="ProblemSolving" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Problem Solving</h2>
                    <p>Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
import React from 'react'
import './works.css'


import FoodleProject from '../../assets/FoodleProject.jpeg'
import currencyCalculator from '../../assets/currencyCalculator.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


function Works() {
  return (
    <section id="works">
            <h1 className="heading">My Portfolio</h1>
            <p className='para'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills ans experience to help businesses achieve their goals and create a strong online presence.</p>
            <div className="imgs">
            <button className='butn' onClick={() => openInNewTab('https://foodle-tau.vercel.app/')}><img className='portImg' src={FoodleProject} alt="portfolio1" /></button>
            <button className='butn' onClick={() => openInNewTab('https://currency-calculator-gules.vercel.app/')}><img className='portImg' src={currencyCalculator} alt="portfolio2" /> </button>
            <button className='butn' onClick={() => openInNewTab('https://github.com/amant8183')}><img className='portImg'src={Portfolio3} alt="portfolio3" /></button>
            <button className='butn' onClick={() => openInNewTab('https://github.com/amant8183')}><img className='portImg' src={Portfolio4} alt="portfolio4" /></button>
            <button className='butn' onClick={() => openInNewTab('https://github.com/amant8183')}><img className='portImg' src={Portfolio5} alt="portfolio5" /></button>
            <button className='butn' onClick={() => openInNewTab('https://github.com/amant8183')}><img className='portImg' src={Portfolio6} alt="portfolio6" /></button>
            </div>

            <button className="workBtn">See More</button>
        
    </section>
  )
}

export default Works
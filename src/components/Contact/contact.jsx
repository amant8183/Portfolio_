import React, { useRef } from 'react'
import './contact.css'

import GithubIcon from '../../assets/Github.png'
import CodeChefIcon from '../../assets/CodeChef.png'
import LeetCodeIcon from '../../assets/LeetCode.png'
import LinkedInIcon from '../../assets/LinkedIn.png'
import emailjs from '@emailjs/browser';


const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f0ix6m9', 'template_o3bqdvw', form.current, {
        publicKey: 'FcZf6CcLjkxyLNH2p',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Now that you know a lot about me, let me know <br /> if you are interested to work with me..</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail} >
        <input type="text" className="name" placeholder='Your Name' name='your_name' />
        <input type="email" className="email" placeholder='Your Email' name='your_email' />
        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value='Send' className="submit">Submit</button>
      </form>
      <div className="links">
          <button className='n1' onClick={() => openInNewTab('https://github.com/amant8183')}><img src={GithubIcon} alt="Github" className="link" /></button>
          <button className='n1' onClick={() => openInNewTab('https://www.linkedin.com/in/aman-tiwari-4a329627b/')}><img src={LinkedInIcon} alt="Twitter" className="link" /></button>
          <button className='n1' onClick={() => openInNewTab('https://www.codechef.com/users/amant8183')}><img src={CodeChefIcon} alt="CodeChef" className="link" /></button>
          <button className='n1' onClick={() => openInNewTab('https://leetcode.com/u/amant8183/')}><img src={LeetCodeIcon} alt="" className="link" /></button>
        </div>
    </div>
  )
}

export default Contact 
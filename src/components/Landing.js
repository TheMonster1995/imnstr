import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './landing.css';

const Landing = () => {
  return (
    <>
      <section className='landing w-75 mx-auto'>
        <h5 className='fw-bold title'>Welcome!</h5>
        <h5 className='title'>My name is Fo'ad Salmanian. A full-stack web developer interested in business development.</h5>
        <p className='muted landing-question border-bottom'>What would you like to know?</p>
        <div className='questions px-4 my-5'>
          <ul className='list-unstyled mt-4 d-flex justify-content-around flex-wrap'>
            <li className='mb-3'>
              <Link to='/projects' className='btn btn-primary'>
                Projects
              </Link>
            </li>
            <li className='mb-3'>
              <Link to='/experiences' className='btn btn-primary'>
                Experiences (Resume)
              </Link>
            </li>
            <li className='mb-3'>
              <Link to='/services' className='btn btn-primary'>
                Services
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className='contact-info w-75 mx-auto bg-transparent py-4 border-top'>
        <h5 className='contact-title fw-bold mb-4'>Contact me</h5>
        <h5 className='contact-text mb-3'>I'm always up for a friendly chat, and I love meeting new people.</h5>
        <h5 className='contact-text mb-5'>Looking for me? Or wanna hangout?</h5>
        <a href='mailto:salmanian.foad2@gmail.com' className='btn btn-primary contact-link d-block mb-2' target="_blank">Send me an email | salmanian.foad2@gmail.com</a>
        <a href='https://www.linkedin.com/in/themonster95/' className='btn btn-primary contact-link d-block mb-2' target="_blank">Find me on LinkedIn | themonster95</a>
        <a href='https://www.instagram.com/themonster195/' className='btn btn-primary contact-link d-block mb-2' target="_blank">Find me on Instagram | @themonster195</a>
      </section>
    </>
  )
}

export default Landing;

//Contact me
// <section className='contact w-75 mx-auto bg-light p-4' id="contact">
//   <h3 className='fw-bold'>Contact me</h3>
//   <div className='px-4'>
//     <h5>Find me on <a href="https://instagram.com/themonster195" target="_blank" className='instagram'>Instagram</a>, <a href="https://www.linkedin.com/in/themonster95" target="_blank" className='linkedin'>LinkedIn</a>, and <a href="https://github.com/TheMonster1995" target="_blank" className='github'>Github</a>!</h5>
//     <h5>Or drop me a message here and I will get back to you</h5>
//   </div>
//   <form className='px-4 row mt-5'>
//     <div className='col col-md-6 mb-3'>
//       <label htmlFor="nameInput" className="form-label fw-bold">What's your name?</label>
//       <input type="text" className="form-control" id="nameInput" />
//     </div>
//     <div className='col col-md-6 mb-3'>
//       <label htmlFor="emailInput" className="form-label fw-bold">Your email address</label>
//       <input type="email" className="form-control" id="emailInput" />
//     </div>
//     <div className='col-12 mb-3'>
//       <label htmlFor="contentInput" className="form-label fw-bold">How may I be of service?</label>
//       <textarea className="form-control" id="contentInput" rows='5'></textarea>
//       <div id="contentHelp" className="fw-bold">p.s Add an alternative contact info in case you forget to check your email</div>
//     </div>
//     <div className='col-12 text-start'>
//       <button type="submit" className='btn btn-primary form-submit'>Send</button>
//     </div>
//   </form>
// </section>

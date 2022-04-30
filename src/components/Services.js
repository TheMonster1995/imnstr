import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';
import './services.css';

const Services = () => {
  const webDevRef = useRef(null);
  const teamRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSubject, setModalSubject] = useState('');

  const closeModal = () => setShowModal(false);

  const executeScroll = ref => ref.current.scrollIntoView();
  // <div className='card-image w-100 h-100' style={{backgroundImage: `url(${img})`}}></div>
  // <Link className='btn btn-link fw-bold' to={link}>{linkText}</Link>
  const generateCardImage = ({img, link, linkText}) => (
    <div className='card-image-main w-100 h-100 position-relative d-flex flex-column justify-content-around'>
      <Link className='btn btn-link fw-bold' to={link}>
        <div className='card-image w-100 h-100' style={{backgroundImage: `url(${img})`}}></div>
        <span>{linkText}</span>
      </Link>
    </div>
  )

  const generateCardContent = content => content.map((line, i) => (<p className='card-line' key={i}>{line}</p>));

  const generateCard = (data, i) => (
    <div className='card bg-transparent mb-5 mx-0 py-3' ref={data.ref} key={i}>
      <div className='card-header bg-transparent fw-bold'>
        {data.title}
      </div>
      <div className='card-body row m-0'>
        <div className='col-12 col-lg-8'>
          {generateCardContent(data.content)}
        </div>
        <div className='col-12 col-lg-4'>
          {generateCardImage(data)}
        </div>
      </div>
      <div className='card-footer bg-transparent border-0'>
        <button type="button" className='btn btn-primary' onClick={() => {setShowModal(true); setModalSubject(data.title)}}>Set up a meeting</button>
      </div>
    </div>
  )

  const generateContent = () => {
    const data = [
      {
        title: 'Developing your online presence',
        content: [
          'Online presence matters!',
          'We can work together to make you seen.',
          '',
          'We can create and/or upgrade your website.',
          'We try to make the best user experience apt for your users.',
          '',
          'When it comes to online presence, just a website is not enough.',
          'We can sit together and analyze your business. Based on your market, competitors, and your users, we can devise an online strategy. This strategy can improve most of your online endeavors, including: ',
          '    - Your online service (website, application, online shop, etc.)',
          '    - Your online content',
          '    - Online marketing strategy',
          '',
          'Some of the subjects mentioned above are not my speciality. That is where my team comes in.'
        ],
        img: '/img/projectsScreenShot.jpg',
        link: '/projects',
        linkText: 'View projects',
        ref: webDevRef
      },
      {
        title: 'Joining your team',
        content: [
          'Often the best results are achieved by teams and not individuals.',
          'Would you like me in your team?',
          '',
          'I have had the experience of working with a couple of different teams on different projects, and I liked it.',
          'I like working in teams mainly because I get to practice my communication skills.',
          'Plus it is one of the places where - if allowed, you can actually see people improve and learn on a daily basis.',
          '',
          'This is what I am looking for. A place where mistakes and shortcomings are praised, viewed as an opportunity for growth, and not blame.',
          'So, if your team values communication, is growth oriented, and has an empty spot, count me in.',
          'We will workout the details later'
        ],
        img: '/img/experiencesScreenShot.jpg',
        link: '/experiences',
        linkText: 'View experiences',
        ref: teamRef
      }
    ];

    return data.map((card, i) => generateCard(card, i))
  }

  const generateModal = () => <Modal closeModal={closeModal} title={modalSubject} />;

  return (
    <>
      <section className='services-main w-75 mx-auto'>
        <h5 className='fw-bold title'>Let's talk business</h5>
        <h5>There's an opportunity, why miss it?</h5>
        <ul className='list-unstyled mt-4 d-flex flex-column justify-content-around'>
          <li className='mb-3'>
            <button type='button' className='btn btn-primary' onClick={() => executeScroll(webDevRef)}>
              We can create your online presence and/or improve it.
            </button>
          </li>
          <li className='mb-3'>
            <button type='button' className='btn btn-primary' onClick={() => executeScroll(teamRef)}>
              There's a place for me on your team?
            </button>
          </li>
        </ul>
      </section>
      <section className='services-content w-75 mx-auto row'>
        {generateContent()}
        {showModal && generateModal()}
      </section>
    </>
  )
}

export default Services;

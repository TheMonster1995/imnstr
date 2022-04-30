import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './projects.css';

const Projects = () => {
  const topRef = useRef(null);

  useEffect(() => {
    executeScroll(topRef);
  }, [])

  const executeScroll = ref => ref.current.scrollIntoView();

  const generateCardContent = content => content.map((line, i) => (<p className='card-line' key={i}>{line}</p>));

  const generateCard = (data, i) => (
    <div className='card bg-transparent pb-3 mx-2 my-4' key={i}>
      <div className='card-img-top' style={{backgroundImage: `url(${data.img})`}}></div>
      <div className='card-body'>
        <h5 className='card-title fw-bold'><a href={data.link} target="_blank">{data.title}</a></h5>
        {generateCardContent(data.content)}
      </div>
      <div className='card-footer bg-transparent border-0'>
        <a href={data.github} className='btn btn-primary' target="_blank">View on github --></a>
      </div>
    </div>
  )

  const generateContent = () => {
    const data = [
      {
        title: 'Vehicle repairshop',
        content: [
          'This service helps an auto repair shop keep their records online and share with customers.',
          'It also a minimal analytics section for monthly and yearly costs/profits review.',
          '',
          'If you want to take a look at it, try:',
          'Username: test',
          'Password: test1234',
        ],
        img: '/img/vrsSample.jpg',
        link: 'http://94.130.232.43:3000/login',
        github: 'https://github.com/TheMonster1995/VRS-Client'
      },
      {
        title: 'iMnstr',
        content: [
          'The website you are currently roaming.',
          'If you have an idea which can make your experience here easier, contact me.'
        ],
        img: '/img/imnstrSample.jpg',
        link: 'http://imnstr.com',
        github: 'https://github.com/TheMonster1995/imnstr'
      }
    ];

    return data.map((card, i) => generateCard(card, i))
  }

  return (
    <section className='projects-content w-75 mx-auto d-flex justify-content-around flex-wrap my-5' ref={topRef}>
      {generateContent()}
    </section>
  )
}

export default Projects;

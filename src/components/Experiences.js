import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './experiences.css';

const Experiences = () => {
  const startRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    console.log('hello 22');
    executeScroll(topRef);
  }, [])

  const executeScroll = ref => ref.current.scrollIntoView();

  const generateContent = () => {
    const data = [
      {
        title: 'Ground zero',
        text: `
 Nov 1st. 2016, a 17 years-old kid walks in New Delhi Airport and immediately realizes how small his world was before.

 That kid was me.

 That trip and many activities since have been my efforts to expand my horizons.

 This of course goes beyond computers, but we'll get to that.

 After returning I moved to Isfahan, and began my professional journey working as a junior web developer.
        `,
        second: '/img/experience-ground-zero.jpg'
      },
      {
        title: 'Computers',
        text: `
Starting with a basic knowledge of web and programming, my only options were to learn and practice.

During 4 years I worked on
  - a personal planner prototype (using HTML/CSS and vanila JS),
  - a chatbot using DialogFlow which enabled users to easily talk to the app and manage their data,
  - several websites (front-end),
  - an interactive google add-on for creating graphs in google sheets,
and a couple of freelance projects.

My fascination with Git, and lack of it in our workspace, got me to learn it and try to use its principales and tools in my personal and professional tasks.

The fascination still remains - though I'm still learning.
        `,
        second: {
          text: `
Basicaly...
  - HTML/CSS
  - Javascript (Vanila/ES6)
  - React js/React Native (Front)
  - Express (backend/api)
  - MongoDB/SQL (DB)
  - Git (and tools)
  - Google add-on
  - DialogFlow
  - Linux (beginner)
          `,
          background: '#fff',
          img: '/img/experience-computers.jpg'
        }
      },
      {
        title: 'Education',
        text: `
I studied English Landuage Studies for 7 seesters before saying goodbye to academic education.

It's great - it's just not for me.

While that did leave me with a native English Language skill, I continued my learning in fields I was interested in.

Next to web development I've also practiced
  - Non-Violent Communication (NVC) - a communication method which creates an atmosphere of understanding before solving problems,
  - Business Development, and related fields - stared with a crash course and still continues in Business consultation, Marketing, Sales and Branding,
  - Qigong - a Thai-Chi based meditation method
and Design Thinking.
        `,
        second: {
          text: `
"A different language is a different vision of life"
  - English Language Studies (3years) - dropout
  - Self taught programmer
  - Business development / project management (current study) - beginner
          `,
          background: '#fff',
          img: '/img/experience-education.jpg'
        }
      },
      {
        title: 'Design Thinking',
        text: `
I would choose this as the most interesting and useful subject I've studied so far.

After encountering the name in a research, I started to learn more about it.

So far we've used this method for correcting behavior and making habits inside an organization.

This is an ever-lasting learning path, and I'm looking forward to trying it in new fields.
        `,
        second: '/img/experience-design-thinking.jpg'
      },
      {
        title: 'Growth Mindset - Learnign how to learn',
        text: `
The most challengig topic I've faced so far is learning itself.

An equivilant of learning, in my opinion, is making mistakes.

Every mistake and/or shortcoming is an opportunity to learn and grow.

Such mindset brings about many challenges - challenges one has both with himself and those around him/her.

Having a good understanding of this process, and creating such atmosphere for thoese working with me is something that I'm trying to discover and implement on a daily basis.
        `,
        second: '/img/experience-growth-mindset.jpg'
      }
    ]

    return blocksGenerator(data);
  }

  const blocksGenerator = data => data.map((block, i) => {
    let secondBlock =  typeof(block.second) === 'string' ? 'img' : 'text';
    return (
      <div className="col-12 row p-0 m-0" key={i}>
        {blockGenerator('content', block, '1')}
        {blockGenerator(secondBlock, block, '2')}
      </div>
    )
  })

  const blockGenerator = (block, {title, text, second}, blockNum) => {
    if (block === 'content') return (
      <div className={`col-12 col-lg-6 p-4 p-0 block-border block-border-${blockNum}`}>
        <h4 className='fw-bold'>{title}</h4>
        <pre className='mt-4 content-pre'>{text}</pre>
      </div>
    )

    if (block === 'img') return <div className={`col-12 col-lg-6 image-cell p-0 block-border block-border-${blockNum}`} style={{backgroundImage: `url(${second})`}}></div>;

    let backgroundColor = second.background;

    return <div className={`col-12 col-lg-6 text-cell p-0 block-border block-border-${blockNum}`} style={{backgroundColor: backgroundColor, backgroundImage: `url(${second.img})`}}><pre className='p-4 text-pre'>{second.text}</pre></div>
  }

  return (
    <>
      <section className='experiences-main w-75 mx-auto' ref={topRef}>
        <h5 className='fw-bold title'>Learn as if you were to live forever.</h5>
        <h5>A gist of the following content, would be a growth mindset which allows me to help myself and those working with me improve rapidly.</h5>
        <div className='questions px-4'>
          <ul className='list-unstyled mt-4 text-center'>
            <li>
              <button type='button' className='btn btn-primary' onClick={() => executeScroll(startRef)}>
                Let's begin
              </button>
            </li>
            <li className='mt-2'>
              <a href='/docs/resume_foad_salmanien_2022.pdf' className='btn btn-link btn-sm' target="_blank" download>
                Download PDF
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className='experiences-content w-75 mx-auto row' ref={startRef}>
        {generateContent()}
      </section>
      <section className='experiences-download w-75 mx-auto my-4 p-4 border'>
        <h5 className='fw-bold title'>Download as PDF</h5>
        <h5 className='text-muted small'>Just in case</h5>
        <div className='questions px-4'>
          <ul className='list-unstyled mt-4 d-flex justify-content-center flex-wrap'>
            <li className='mt-2'>
              <a href='/docs/resume_foad_salmanien_2022.pdf' className='btn btn-primary btn-lg' target="_blank" download>
                Download PDF
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Experiences;

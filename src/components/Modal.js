import React, { useRef, useEffect, useReducer } from 'react';

import './modal.css'

import repairShopApi from '../apis/repairShopApi';

const useOutsideAlerter = (ref, closeModal) => (
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = event => (ref.current && !ref.current.contains(event.target)) && closeModal();
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])
)

const Modal = props => {
  const wrapperRef = useRef(null);

  const [formValues, setFormValues] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      title: props.title,
      name: '',
      challenge: '',
      email: '',
      phone: ''
    }
  )

  const updateForm = e => {
    const {name, value} = e.target;
    setFormValues({ [name]: value });
  }

  useOutsideAlerter(wrapperRef, props.closeModal);

  const generateFormInput = ({label, placeholder, name, type, required}, i) => (
    <div key={i} className='mb-3'>
      <label htmlFor={name} className="form-label fw-bold">{label}</label>
      <input type={type || 'text'} className="form-control" id={name} placeholder={placeholder} onChange={updateForm} value={formValues[name]} name={name} required={required || false} />
    </div>
  )

  const generateFormTextArea = ({label, placeholder, name, type}, i) => (
    <div key={i} className='mb-3'>
      <label htmlFor={name} className="form-label fw-bold">{label}</label>
      <textarea className="form-control" id={name} rows='3' placeholder={placeholder} onChange={updateForm} value={formValues[name]} name={name}></textarea>
    </div>
  )

  const sendEmail = async data => {
    let check;
    try {
      check = await repairShopApi.post(
        '/mnstr/email',
        { ...data },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      console.log('email sent');
    } catch (err) {
      console.log('there was an error');
      // TBD
      // Add error handling
      // return this.setState({error: 'Bad username/password', loading: false});
    }
  }

  const generateForm = (errors = null) => {
    const data = [
      {
        label: 'What is your name?',
        type: 'text',
        placeholder: 'John Doe',
        name: 'name',
        required: true
      },
      {
        label: 'Tell me a little bit about yourself and the challenge we are going to face',
        type: 'textarea',
        placeholder: 'About you/your brand/organization and the task in hand...',
        name: 'challenge',
        required: true
      },
      {
        label: 'What is your email address?',
        type: 'email',
        placeholder: 'johndoe@gmail.com',
        name: 'email',
        required: true
      },
      {
        label: 'What is phone number?',
        type: 'text',
        placeholder: '+09123456789',
        name: 'phone',
        check: 'phone',
        required: true
      }
    ]

    return (
      <form onSubmit={submitForm}>
        <div className='mb-3'>
          <label htmlFor='subject' className='form-label fw-bold'>Subject</label>
          <input type='text' disabled value={formValues.title} className='form-control' />
        </div>
        {data.map((input, i) => input.type !== 'textarea' ? generateFormInput(input, i) : generateFormTextArea(input, i))}
        <div className='form-buttons'>
          <button className='btn btn-primary' type="submit">Send</button>
          <button className='btn btn-link' type="button" onClick={props.closeModal}>Go back</button>
        </div>
      </form>
    )
  }

  const submitForm = e => {
    e.preventDefault()
    //TBD
    //Add input validation
    sendEmail(formValues)
    props.closeModal();
  }

  return (
    <div className='c-modal-parent position-fixed w-100 h-100 px-0 py-3 py-md-5'>
      <div className='c-modal-background position-fixed h-100 w-100 '></div>
      <div className='c-modal-content bg-light mx-auto p-4 rounded' ref={wrapperRef}>
        <div className='c-modal-header d-flex justify-content-between'>
          <h4 className='c-modal-title border-bottom pb-1'>Set up a meeting</h4>
          <button type='button' className='btn btn-link p-0 close-btn' onClick={props.closeModal}><i className='bi bi-x'></i></button>
        </div>
        <p className="mt-3 contact-text">Give me an intro, and I will get back to you as soon as I can.</p>
        {generateForm()}
      </div>
    </div>
  )
}

export default Modal;

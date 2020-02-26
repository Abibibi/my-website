import React, { useState, useRef } from 'react';

import './form.scss';


const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submission, setSubmission] = useState({
    success: false,
    fail: false,
  });

  const submissionMessage = useRef(null);

  const handleChange = (event) => {
    event.persist();
    setValues(({ ...values, [event.target.name]: event.target.value }));
  };

  const encode = (data) => (
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  );

  const handleSubmit = (event) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then((response) => {
        setSubmission({ ...submission, success: true, fail: false });
        setValues({
          ...values,
          name: '',
          email: '',
          message: '',
        });

        console.log(response);
      })
      .catch(() => {
        setSubmission({ ...submission, success: false, fail: true });
      })
      .finally(() => {
        // to make sure submission result is visible
        window.scrollTo({
          top: submissionMessage.offsetTop,
          behavior: 'smooth',
        });
      });

    event.preventDefault();
  };

  return (
    <div className="form">
      <div className="projects-title">
        <h2>Contact</h2>
      </div>
      <form className="form-content" onSubmit={handleSubmit}>
        <label className="form-content-label" htmlFor="name">Nom
          <input
            className="form-content-input"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label className="form-content-label" htmlFor="email">Adresse e-mail
          <input
            className="form-content-input"
            id="name"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label className="form-content-label" htmlFor="message">Message
          <textarea
            className="form-content-input form-content-textarea"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
        </label>
        <button className="form-content-button" type="submit">Envoyer</button>
      </form>
      {submission.success && <div className="form-submission" ref={submissionMessage}>Merci pour votre message. Je vous répondrai bientôt.</div>}
      {submission.fail && <div className="form-submission" ref={submissionMessage}>Votre message n'a pas été envoyé. Veuillez le soumettre à nouveau.</div>}
    </div>
  );
};

export default Form;

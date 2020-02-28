import React, { useState } from 'react';

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

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const inputValidation = (field) => {
    let regexValue = '';

    switch (field) {
      case 'email':
        regexValue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      default:
        regexValue = '';
    }

    if (values[field]) {
      if (!values[field].match(regexValue)) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
      }
      // if value entered match requirements,
      // error message is not displayed anymore
      else {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
      }
    }
    // if no value was entered,
    // error message is displayed
    else if (!values[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
    }

    return errors[field];
  };

  const handleChange = (event) => {
    event.persist();

    // if user changes inputs after previous form submission,
    // previous submission and error messages
    // should not be displayed anymore initially
    setSubmission({
      ...submission,
      success: false,
      fail: false,
    });

    setValues(({ ...values, [event.target.name]: event.target.value }));

    event.target.addEventListener('blur', () => {
      inputValidation(event.target.name);
    });
  };

  const encode = (data) => (
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // if user submits form again,
    // previous submission and error messages
    // should not be displayed anymore initially
    setSubmission({
      ...submission,
      success: false,
      fail: false,
    });

    Object.keys(values).forEach((key) => {
      inputValidation(key);
    });

    if (!values.name || !values.email || !values.message) {
      window.scrollTo({
        top: document.querySelector('.form').offsetTop,
        behavior: 'smooth',
      });
      console.log('stops at values');
      return;
    }

    if (errors.name || errors.email || errors.message) {
      console.log('stops at errors');
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        setSubmission({ ...submission, success: true, fail: false });
        setValues({
          ...values,
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        setSubmission({ ...submission, success: false, fail: true });
      })
      .finally(() => {
        // to make sure submission result is visible
        window.scrollTo({
          top: document.querySelector('footer').offsetTop,
          behavior: 'smooth',
        });
      });
  };

  return (
    <div className="form">
      <div className="projects-title form-title">
        <h2>Contact</h2>
      </div>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-content-labelInput">
          <label className="form-content-labelInput-label" htmlFor="name">Nom
            <input
              className="form-content-labelInput-input"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p className="form-content-labelInput-error">Veuillez renseigner votre nom.</p>}
        </div>
        <div className="form-content-labelInput">
          <label className="form-content-labelInput-label" htmlFor="email">Adresse e-mail
            <input
              className="form-content-labelInput-input"
              id="name"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p className="form-content-labelInput-error">Veuillez saisir une adresse e-mail valide.</p>}
        </div>
        <div className="form-content-labelInput">
          <label className="form-content-labelInput-label" htmlFor="message">Message
            <textarea
              className="form-content-labelInput-input form-content-labelInput-textarea"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </label>
          {errors.message && <p className="form-content-labelInput-error">Veuillez saisir un message.</p>}
        </div>
        <button className="form-content-button" type="submit">Envoyer</button>
      </form>
      {submission.success && <div className="form-submission">Merci pour votre message. Je vous répondrai bientôt.</div>}
      {submission.fail && <div className="form-submission">Votre message n'a pas pu être envoyé. Veuillez le soumettre à nouveau.</div>}
    </div>
  );
};

export default Form;

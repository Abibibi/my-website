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

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const submissionMessage = useRef(null);

  const inputValidation = (field) => {
    let regexValue = '';

    switch (field) {
      case 'name':
        regexValue = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        break;
      case 'email':
        regexValue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case 'message':
        regexValue = /^(?:(?:^| )\S+ *){6,}$/;
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
    // if no value is entered (typically, on blur)
    // error message is not displayed anymore
    else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }
  };

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
    event.preventDefault();

    if (errors.name || errors.email || errors.message) {
      return;
    }

    if (!values.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    }

    if (!values.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    }

    if (!values.message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: true }));
    }

    if (!values.name || !values.email || !values.message) {
      return;
    }

    // if user submits form again,
    // previous submission and error messages
    // should not be displayed anymore initially
    setSubmission({
      ...submission,
      success: false,
      fail: false,
    });

    setErrors({
      ...errors,
      name: false,
      email: false,
      message: false,
    });

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
              onBlur={() => {
                inputValidation('name');
              }}
            />
          </label>
          {errors.name && <p className="form-content-labelInput-error">Veuillez renseigner un nom valide.</p>}
        </div>
        <div className="form-content-labelInput">
          <label className="form-content-labelInput-label" htmlFor="email">Adresse e-mail
            <input
              className="form-content-labelInput-input"
              id="name"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={() => {
                inputValidation('email');
              }}
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
              onBlur={() => {
                inputValidation('message');
              }}
            />
          </label>
          {errors.message && <p className="form-content-labelInput-error">Veuillez saisir un message plus long.</p>}
        </div>
        <button className="form-content-button" type="submit">Envoyer</button>
      </form>
      {submission.success && <div className="form-submission" ref={submissionMessage}>Merci pour votre message. Je vous répondrai bientôt.</div>}
      {submission.fail && <div className="form-submission" ref={submissionMessage}>Votre message n'a pas été envoyé. Veuillez le soumettre à nouveau.</div>}
    </div>
  );
};

export default Form;

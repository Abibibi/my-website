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
      // making sure that name includes at least 2 characters
      // and does not include numbers
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
        // this is only executed on blur, not on change
        setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
      }
      // if value entered match requirements,
      // error message is not displayed anymore
      else {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
      }
    }
    // on blur, if no value was entered,
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

    inputValidation(event.target.name);
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

    if (errors.name || errors.email || errors.message) {
      return;
    }

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
              onBlur={() => {
                inputValidation('name');
                console.log(errors);
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
      {submission.success && <div className="form-submission">Merci pour votre message. Je vous répondrai bientôt.</div>}
      {submission.fail && <div className="form-submission">Votre message n'a pas été envoyé. Veuillez le soumettre à nouveau.</div>}
    </div>
  );
};

export default Form;

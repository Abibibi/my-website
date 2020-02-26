import React from 'react';

import './form.scss';


const Form = () => {
  return (
    <div className="form">
      <div className="projects-title">
        <h2>Contact</h2>
      </div>
      <form className="form-content">

        <label className="form-content-label" htmlFor="name">Nom
          <input className="form-content-input" id="name" name="name" />
        </label>

        <label className="form-content-label" htmlFor="name">Adresse e-mail
          <input className="form-content-input" id="name" name="name" />
        </label>

        <label className="form-content-label" htmlFor="message">Message
          <textarea className="form-content-input form-content-textarea" id="message" />
        </label>
        <button className="form-content-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;

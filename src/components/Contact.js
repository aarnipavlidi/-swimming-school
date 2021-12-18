import React, { useState } from 'react';
import '../css/LoadingSpinner.css';
import emailjs from 'emailjs-com';

const config = require('../utils/config');

const Contact = ({ loadingContent, getNotification }) => {

  const [contactForm, setContactForm] = useState({
    from_name: '',
    from_lastname: '',
    from_number: '',
    message: '',
    reply_to: '',
    to_name: 'Santu Pavlidi'
  });

  const [loadingButton, setLoadingButton] = useState(false);
  const showLoading = { display: loadingButton ? '' : 'none' };
  const hideLoading = { display: loadingButton ? 'none' : ''};

  const handleFormSend = async (event) => {
    event.preventDefault();
    setLoadingButton(true);
    try {
      const response = await emailjs.send(config.EMAIL_SERVICE_ID, config.EMAIL_TEMPLATE_ID, contactForm, config.EMAIL_USER_ID);
      setContactForm({
        from_name: '',
        from_lastname: '',
        from_number: '',
        message: '',
        reply_to: ''
      });
      console.log('You have successfully forwarded the forms message! :)', response.status, response.text);
      setLoadingButton(false);
      getNotification({
        message: 'Kiitoksia yhteydenotosta! Olemme teihin yhteydessä mahdollisimman pian.',
        status: true
      });
    } catch (error) {
      setContactForm({
        from_name: '',
        from_lastname: '',
        from_number: '',
        message: '',
        reply_to: ''
      });
      console.log('There was a problem sending the forms message. Please try again later! :)', error);
      setLoadingButton(false);
      getNotification({
        message: 'Viestin lähettäminen epäonnistui! Yrittäkää kokeilla uudestaan myöhemmin.',
        status: false
      });
    };
  };

  const handleForm = (event) => {
    event.preventDefault();
    setContactForm({ ...contactForm, [event.target.name]: event.target.value });
  };

  if (loadingContent) {
    return (
      <div className="loadingBackground">
        <div className="spinner-border loadingSpinner"></div>
      </div>
    )
  };

  return (
    <div style={{ flex: 1, marginTop: 20, marginBottom: 20, justifyContent: 'center' }} className="container d-flex">
      <div className="form-style align-self-center">
        <div>
          <h2>Yhteydenottolomake</h2>
        </div>
        <form onSubmit={handleFormSend}>
          <div className="row">
            <div className="col">
              <label for='validationClientName' className="form-label">Etunimi</label>
              <input
              type="text"
              name='from_name'
              value={contactForm.from_name}
              className="form-control"
              onChange={handleForm}
              id='validationClientName'
              required
              />
            </div>
            <div className="col">
              <label for='validationClientLastname' className="form-label">Sukunimi</label>
              <input
              type="text"
              name='from_lastname'
              value={contactForm.from_lastname}
              className="form-control"
              onChange={handleForm}
              id='validationClientLastname'
              required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label for='validationClientEmail' className="form-label">Sähköposti</label>
              <input
              type="email"
              name='reply_to'
              value={contactForm.reply_to}
              className="form-control"
              onChange={handleForm}
              id='validationClientEmail'
              required
              />
            </div>
            <div className="col">
              <label for='validationClientNumber' className="form-label">Puhelinnumero</label>
              <input
              type="number"
              name='from_number'
              value={contactForm.from_number}
              className="form-control"
              onChange={handleForm}
              id='validationClientNumber'
              required
              />
            </div>
          </div>
          <div className="mb-3">
            <label for='validationClientMessage' className="form-label">Viestikenttä</label>
            <textarea className="form-control" rows="5" name='message' value={contactForm.message} onChange={handleForm} id='validationClientMessage' required></textarea>
          </div>
          <div style={hideLoading}>
            <div className="text-center">
              <button type="submit" className="btn btn-outline-dark button-position">Lähetä</button>
            </div>
          </div>
          <div style={showLoading}>
            <div className="text-center">
              <button type="button" className="btn btn-dark button-position" disabled><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Lähettää...</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

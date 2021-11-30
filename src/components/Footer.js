import React from 'react';

const Footer = () => {

  const footerStyling = {
    backgroundColor: '#60b4bd',
  };

  const socialButton = {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    color: '#000000',
  };

  return (
    <footer>
      <div style={footerStyling} className="container-fluid d-flex justify-content-evenly">
        <div style={{ marginTop: 15 }}>
          <p className="lh-1 footer-title">Santun Uimakoulu</p>
          <div style={{ marginTop: 20 }}>
            <p className="lh-1 fw-bold footer-content">Oulu</p>
            <p className="lh-1 footer-content">Pikkukankaantie 3</p>
            <p className="lh-1 footer-content">90130 Oulu</p>
            <p className="lh-1 footer-content">Finland</p>
          </div>
          <div style={{ marginTop: 20 }}>
            <p className="lh-1 footer-content">Tel: +358 123 123</p>
            <p className="lh-1 footer-content">email: info@uimakoulu.fi</p>
          </div>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <div>
            <i style={socialButton} className="fab fa-facebook"></i>
          </div>
          <div>
            <i style={socialButton} className="fab fa-instagram"></i>
          </div>
          <div>
            <i style={socialButton} className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

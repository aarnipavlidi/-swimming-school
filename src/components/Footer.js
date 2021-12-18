import React from 'react';

const Footer = ({ loadingContent }) => {

  const footerStyling = {
    backgroundColor: '#60b4bd',
  };

  const socialButton = {
    marginRight: 5,
    fontSize: 15,
    color: '#000000',
  };

  if (loadingContent) {
    return null
  };

  return (
    <footer>
      <div style={footerStyling} className="container-fluid d-flex justify-content-center">
        <div style={{ marginTop: 15 }}>
          <p className="lh-1 footer-title">Santun Uimakoulu</p>
          <div style={{ }}>
            <p className="lh-1 fw-bold footer-content">Oulu</p>
            <p className="lh-1 footer-content">Pikkukankaantie 3</p>
            <p className="lh-1 footer-content">90130 Oulu</p>
            <p className="lh-1 footer-content">Finland</p>
          </div>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div>
              <i style={socialButton} className="fas fa-phone-square"></i>
            </div>
            <div>
              <p className="footer-content">+358 123 123</p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div>
              <i style={socialButton} className="fas fa-envelope-square"></i>
            </div>
            <div>
              <p className="footer-content">info@uimakoulu.fi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

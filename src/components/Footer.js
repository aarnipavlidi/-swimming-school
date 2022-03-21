import React from 'react';
import { FooterStyling } from './FooterStyling';

const Footer = ({ loadingContent }) => {

  if (loadingContent) {
    return null
  };

  return (
    <footer>
      <div style={FooterStyling.mainContainer} className="container-fluid d-flex justify-content-center">
        <div style={FooterStyling.addressContainer}>
          <p className="lh-1 footer-title">Santun Uimakoulu</p>
          <div>
            <p className="lh-1 fw-bold footer-content">Oulu</p>
            <p className="lh-1 footer-content">Pikkukankaantie 3</p>
            <p className="lh-1 footer-content">90130 Oulu</p>
            <p className="lh-1 footer-content">Finland</p>
          </div>
        </div>
        <div style={FooterStyling.contactContainer.main}>
          <div style={FooterStyling.contactContainer.numberContent}>
            <div>
              <i style={FooterStyling.socialButton} className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p className="footer-content">+358 123 123</p>
            </div>
          </div>
          <div style={FooterStyling.contactContainer.emailContent}>
            <div>
              <i style={FooterStyling.socialButton} className="fa-solid fa-envelope"></i>
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

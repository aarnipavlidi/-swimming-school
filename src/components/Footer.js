import React from 'react';

const Footer = () => {

  const socialButton = {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 25,
    backgroundColor: '#000000',
    alignSelf: 'center'
  };

  const socialContent = {
    padding: 9,
    fontSize: 25,
    color: '#fffffe',
  };

  return (
    <footer className="footer">
      <div style={{ backgroundColor: '#60b4bd' }} className="container-fluid d-flex justify-content-evenly">
        <div style={{ marginTop: 15 }}>
          <p style={{ borderBottom: '3px solid #fffffe', paddingBottom: 3 }} className="lh-1 footer-title">Santun Uimakoulu</p>
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
          <div style={socialButton}>
            <i style={socialContent} className="fab fa-facebook"></i>
          </div>
          <div style={socialButton}>
            <i style={socialContent} className="fab fa-instagram"></i>
          </div>
          <div style={socialButton}>
            <i style={socialContent} className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const LoginButton = ({ buttonLoading }) => {

  const buttonStyling = {
    marginTop: 25,
    textAlign: 'center'
  };

  const loadingSpinner = {
    color: '#FFFFFE',
    marginRight: 5
  }

  if (buttonLoading) {
    return (
      <div style={buttonStyling}>
        <button type="submit" className="btn dashboard-button content-font" style={{ color: '#FFFFFE' }} disabled>
          <span className="spinner-border spinner-border-sm" style={loadingSpinner} role="status" aria-hidden="true"></span>
          Kirjautuu sisään...
        </button>
      </div>
    )
  } else {
    return (
      <div style={buttonStyling}>
        <button type="submit" className="btn dashboard-button content-font" style={{ color: '#FFFFFE' }}>Kirjaudu sisään</button>
      </div>
    );
  };
};

export default LoginButton;

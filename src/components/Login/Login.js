import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import LoginButton from './LoginButton';

import { loadingSpinner, backgroundStyling, textStyling, loginFormStyling, buttonStyling } from './LoginStyling';
import '../../css/LoginBackground.css';
import '../../css/LoginErrorShake.css';

const Login = ({ loginWithRedirect, errorAuth0, loading }) => {

  const [loginFormShake, setLoginFormShake] = useState(false);
  const [loginFormMessage, setLoginFormMessage] = useState(null);

  const history = useHistory();

  const goBackHome = () => {
    history.push('/')
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  useEffect(() => {
    if (errorAuth0?.message) {
      setLoginFormShake(true)
      setLoginFormMessage(errorAuth0.message)
      setTimeout(() => {
        setLoginFormShake(false)
      }, 1500)
    };
  }, [errorAuth0]);

  if (loading) {
    return (
      <div style={backgroundStyling}>
        <div className="spinner-border" style={loadingSpinner}></div>
      </div>
    );
  };

  return (
    <div className="animated-background" style={backgroundStyling}>
      <div className={loginFormShake ? 'container + loginFormShake' : 'container'}>
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-9 col-md-5 shadow-lg rounded-3" style={loginFormStyling}>
            <div style={textStyling}>
              <h4 className="title-font">Dashboard</h4>
              <p className="content-font">{loginFormMessage ? errorAuth0.message : 'Please login'} <i className="fas fa-heart"></i></p>
            </div>
            <form onSubmit={handleLogin}>
              <LoginButton icon="fa-solid fa-right-to-bracket" type="submit" content="Kirjaudu sisään" />
              <div style={buttonStyling.dividerContainer}>
                <div style={buttonStyling.dividerElement}>
                  <hr style={buttonStyling.divider} />
                </div>
                <div style={buttonStyling.dividerElement}>
                  <p className="content-font" style={buttonStyling.dividerContent}>TAI</p>
                </div>
                <div style={buttonStyling.dividerElement}>
                  <hr style={buttonStyling.divider} />
                </div>
              </div>
              <LoginButton icon="fa-solid fa-house" type="button" content="Palaa etusivulle" onClick={goBackHome} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

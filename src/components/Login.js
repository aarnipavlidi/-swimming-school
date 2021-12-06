import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

import '../css/LoginBackground.css';

const Login = ({ setCurrentToken }) => {

  const history = useHistory();
  const [adminLogin, { adminLoading }] = useLogin();

  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {

      const { data } = await adminLogin({ username: currentUsername, password: currentPassword });
      const response = await localStorage.getItem('current-admin-token');
      setCurrentToken(response);
      setCurrentUsername('');
      setCurrentPassword('');
      history.push("/pavmin/dashboard");
    } catch (error) {
      setCurrentUsername('');
      setCurrentPassword('');
    }
  };

  const backgroundStyling = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyling = {
    textAlign: 'center',
    fontSize: 12
  };

  const loginFormStyling = {
    backgroundColor: '#FFFFFE',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    paddingRight: 25
  };

  const iconStyling = {
    backgroundColor: '#60b4bd',
    fontSize: 15,
    border: '0px',
    borderStyle: 'solid',
    borderColor: '#60b4bd',
    color: '#FFFFFE'
  };

  const inputStyling = {
    backgroundColor: '#FFFFFE',
    border: '2px',
    borderStyle: 'solid',
    borderColor: '#60b4bd',
    color: '#000000'
  };

  const buttonStyling = {
    marginTop: 25,
    textAlign: 'center'
  };

  return (
    <div className="animated-background" style={backgroundStyling}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-9 col-md-5 shadow-lg rounded-3" style={loginFormStyling}>
            <div style={textStyling}>
              <h4 className="title-font">Dashboard</h4>
              <p className="content-font">Please login <i className="fas fa-heart"></i></p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input-group" style={{ marginTop: 10 }}>
                <span style={{ width: 40 }} className="input-group-text" style={iconStyling}><i className="fas fa-user-circle"></i></span>
                <input
                  type="text"
                  className="form-control"
                  style={inputStyling}
                  value={currentUsername}
                  placeholder="Käyttäjätunnus"
                  onChange={({ target }) => setCurrentUsername(target.value)}
                  required
                />
              </div>
              <div className="input-group" style={{ marginTop: 10 }}>
                <span style={{ width: 40 }} className="input-group-text" style={iconStyling}><i className="fas fa-key"></i></span>
                <input
                  type="password"
                  className="form-control"
                  style={inputStyling}
                  value={currentPassword}
                  placeholder="Salasana"
                  onChange={({ target }) => setCurrentPassword(target.value)}
                  required
                />
              </div>
              <div style={buttonStyling}>
                <button type="submit" className="btn dashboard-button content-font" style={{ color: '#FFFFFE' }}>Kirjaudu sisään</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

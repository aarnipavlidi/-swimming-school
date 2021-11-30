import React from 'react';

const Notification = ({ message, checkStatus }) => {

  const notificationPositioning = {
    marginTop: '20px',
    fontFamily: `'Shippori Antique B1', sans-serif`,
  };

  const notificationStyling = {
    textAlign: 'center',
    backgroundColor: 'rgb(255,255,254)',
  };

  if (message !== null && checkStatus === false) {
    return (
      <div style={notificationPositioning} className="container">
        <div style={notificationStyling} className="container">
          <div className="alert alert-danger shadow-sm" role="alert">
            {message}
          </div>
        </div>
      </div>
    );
  };

  if (message !== null && checkStatus === true) {
    return (
      <div style={notificationPositioning} className="container">
        <div style={notificationStyling} className="container">
          <div className="alert alert-success shadow-sm" role="alert">
            {message}
          </div>
        </div>
      </div>
    );
  };

  return null;
};

export default Notification;

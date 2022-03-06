import React from 'react';

const Notification = (props) => {

  const notificationPositioning = {
    marginTop: '20px',
    fontFamily: `'Shippori Antique B1', sans-serif`,
  };

  const notificationStyling = {
    textAlign: 'center',
    backgroundColor: 'rgb(255,255,254)',
  };

  if (props.message !== null && props.checkStatus === false) {
    return (
      <div style={notificationPositioning} className="container">
        <div style={notificationStyling}>
          <div className="alert alert-danger shadow-sm" role="alert">
            {props.message}
          </div>
        </div>
      </div>
    );
  };

  if (props.message !== null && props.checkStatus === true) {
    return (
      <div style={notificationPositioning} className="container">
        <div style={notificationStyling}>
          <div className="alert alert-success shadow-sm" role="alert">
            {props.message}
          </div>
        </div>
      </div>
    );
  };

  return null;
};

export default Notification;

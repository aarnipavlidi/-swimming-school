import React from 'react';

import { buttonStyling } from './LoginStyling';

const LoginButton = ({ ...props }) => {

  return (
    <div id={props.id} style={buttonStyling.container}>
      <button type={props.type} onClick={props?.onClick ? props.onClick : null} className="btn btn-sm dashboard-button content-font" style={buttonStyling.button}>
          <div style={buttonStyling.buttonContainer}>
            <i className={props.icon} style={buttonStyling.buttonIcon} />
            <i className="content-font" style={buttonStyling.buttonContent}>{props.content}</i>
          </div>
      </button>
    </div>
  );
};

export default LoginButton;

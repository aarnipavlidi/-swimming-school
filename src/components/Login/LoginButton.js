import React from 'react';

import { buttonStyling } from './LoginStyling';

const LoginButton = ({ ...props }) => {

  return (
    <div style={buttonStyling.container}>
      <button type={props.type} onClick={props?.onClick ? props.onClick : null} className="btn btn-sm dashboard-button content-font" style={buttonStyling.button}>
          <i className={props.icon} style={buttonStyling.buttonIcon}>
            <a className="content-font" style={buttonStyling.buttonContent}>{props.content}</a>
          </i>
      </button>
    </div>
  );
};

export default LoginButton;

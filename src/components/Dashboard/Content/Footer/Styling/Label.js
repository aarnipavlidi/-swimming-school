import React from 'react';

import { EditFooterLabel } from './EditFooterStyling';

const LabelFooter = ({ ...props }) => {
  
  return (
    <div style={EditFooterLabel.labelContainer}>
      <i className={props.iconStyling} style={EditFooterLabel.labelIcon}></i>
      <label for={props.labelFor} className="form-label content-font">{props.labelName}</label>
    </div>
  );
};

export default LabelFooter;
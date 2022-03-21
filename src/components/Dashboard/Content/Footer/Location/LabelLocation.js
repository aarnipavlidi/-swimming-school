import React from 'react';

import { EditFooterLocationContainer } from '../EditFooterStyling';

const LabelLocation = ({ ...props }) => {
  
  return (
    <div style={EditFooterLocationContainer.labelContainer}>
      <i className={props.iconStyling} style={EditFooterLocationContainer.labelIcon}></i>
      <label for={props.labelFor} className="form-label content-font">{props.labelName}</label>
    </div>
  );
};

export default LabelLocation;
import React from "react";

import { EditFooterInput } from './EditFooterStyling';

const InputFooter = ({ currentValue, defaultValue, handleValueChange, ...props }) => {

  return (
    <input
      id={props.id} 
      type={props.type}
      className="form-control title-font"
      style={EditFooterInput.input}
      name={props.name}
      value={!currentValue[props.name] ? defaultValue : currentValue[props.name]}
      onChange={handleValueChange}
    />
  );
};

export default InputFooter;
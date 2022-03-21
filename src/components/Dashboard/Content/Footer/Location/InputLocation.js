import React from "react";

import { EditFooterLocationContainer } from '../EditFooterStyling';

const InputLocation = ({ currentLocation, defaultLocation, handleLocationChange, ...props }) => {

  return (
    <input
      id={props.id} 
      type={props.type}
      className="form-control title-font"
      style={EditFooterLocationContainer.input}
      name={props.name}
      value={!currentLocation[props.name] ? defaultLocation : currentLocation[props.name]}
      onChange={handleLocationChange}
    />
  );
};

export default InputLocation;
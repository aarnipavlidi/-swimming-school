import React from "react";

import { EditFooterContactContainer } from '../Styling/EditFooterStyling';

const ButtonContactReset = ({ currentInputValue, currentContact, setCurrentContact, handleModalChange, inputLoading, ...props  }) => {

  const resetContactInput = () => {
    handleModalChange(null);
    setCurrentContact({
      ...currentContact,
      [props.inputElement]: null
    });
  };

  if (inputLoading) {
    return (
      <div style={EditFooterContactContainer.button}>
        <button disabled type="button" className="btn content-font" style={EditFooterContactContainer.content}>
          <span className="fas fa-undo" role="status" aria-hidden="true"></span>
        </button>
      </div>
    );
  };

  if (!currentInputValue) {
    return (
      <div style={EditFooterContactContainer.button}>
        <button disabled type="button" className="btn content-font" style={EditFooterContactContainer.content}>
          <span className="fas fa-undo" role="status" aria-hidden="true"></span>
        </button>
      </div>
    );
  };

  return (
    <div style={EditFooterContactContainer.button}>
      <button onClick={resetContactInput} type="submit" className="btn content-font" style={EditFooterContactContainer.content}>
        <span className="fas fa-undo" role="status" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default ButtonContactReset;
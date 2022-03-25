import React from "react";

import { EditFooterContactContainer } from '../Styling/EditFooterStyling';

const ButtonContactSubmit = ({ currentInputValue, currentContact, setCurrentContact, handleModalChange, inputLoading, ...props }) => {

  if (inputLoading) {
    return (
      <div style={EditFooterContactContainer.button}>
        <button disabled type="button" className="btn content-font" style={EditFooterContactContainer.content}>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
      </div>
    );
  };

  if (!currentInputValue) {
    return (
      <div style={EditFooterContactContainer.button}>
        <button disabled type="button" className="btn content-font" style={EditFooterContactContainer.content}>
          <span className="fas fa-edit" role="status" aria-hidden="true"></span>
        </button>
      </div>
    );
  };

  return (
    <div style={EditFooterContactContainer.button}>
      <button onClick={() => handleModalChange(props.inputElement)} type="button" className="btn content-font" style={EditFooterContactContainer.content} data-bs-toggle="modal" data-bs-target="#targetFooterModal">
        <span className="fas fa-edit" role="status" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default ButtonContactSubmit;
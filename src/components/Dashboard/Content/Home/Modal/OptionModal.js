import React from 'react';

const OptionModal = ({ submitHomeContent, ...props }) => {

  const showConfirmContent = () => {
    if (props.value === "primaryElement" && props.valueTarget === "Home") {
      return "Oletko varma, että haluat muuttaa etusivun sisältöä?"
    } else {
      return null
    };
  };

  const handleSubmit = () => {
    if (props.value === "primaryElement" && props.valueTarget === "Home") {
      submitHomeContent(props.valueTarget, props.value)
    } else {
      return null
    };
  };

  return (
    <div>
      <div className="modal-body">
        <p className="content-font">{showConfirmContent()}</p>
      </div>
      <div className="modal-footer">
        <button onClick={handleSubmit} data-bs-dismiss="modal" type="submit" className="btn shadow content-font" style={props.styling}>
          <span><i className="fas fa-check-circle"></i></span>
          <span>Lähetä</span>
        </button>
      </div>
    </div>
  );
};

export default OptionModal;

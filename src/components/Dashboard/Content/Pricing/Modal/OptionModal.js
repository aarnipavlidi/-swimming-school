import React from 'react';

const OptionModal = ({ submitPricesDatabase, submitPriceContent, ...props }) => {

  const showConfirmContent = () => {
    if (props.option === "editPricing") {
      return "Oletko varma, että haluat muuttaa sivuston hinnastoa?"
    };

    if (props.option === "primaryElement") {
      return "Oletko varma, että haluat muuttaa vasemmanpuoleisen (primary) elementin sisältöä?"
    };

    if (props.option === "secondaryElement") {
      return "Oletko varma, että haluat muuttaa oikeanpuoleisen (secondary) elementin sisältöä?"
    };
  };

  const handleSubmit = () => {
    if (props.option === "editPricing") {
      submitPricesDatabase();
    };

    if (props.option === "primaryElement" || props.option === "secondaryElement") {
      submitPriceContent(props.option)
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

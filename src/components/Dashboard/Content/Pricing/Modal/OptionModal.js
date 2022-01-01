import React from 'react';

const OptionModal = ({ submitPricesDatabase, submitPriceContent, ...props }) => {

  const showConfirmContent = () => {
    if (props.value === "editPricing" && props.valueTarget === "Pricing") {
      return "Oletko varma, että haluat muuttaa sivuston hinnastoa?"
    };

    if (props.value === "primaryElement" && props.valueTarget == "Pricing") {
      return "Oletko varma, että haluat muuttaa hinnaston vasemmanpuoleisen (primary) elementin sisältöä?"
    };

    if (props.value === "secondaryElement" && props.valueTarget === "Pricing") {
      return "Oletko varma, että haluat muuttaa hinnaston oikeanpuoleisen (secondary) elementin sisältöä?"
    };
  };

  const handleSubmit = () => {
    if (props.value === "editPricing" && props.valueTarget === "Pricing") {
      submitPricesDatabase();
    };

    if (props.value === "primaryElement" && props.valueTarget === "Pricing" || props.value === "secondaryElement" && props.valueTarget === "Pricing") {
      submitPriceContent(props.valueTarget, props.value)
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

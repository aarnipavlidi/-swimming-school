import React from 'react';

const OptionModal = ({ submitHomeContent, submitPricesDatabase, submitPriceContent, submitLocationDatabase, ...props }) => {

  const showConfirmContent = () => {
    if (props.value === "primaryElement" && props.valueTarget === "Home") {
      return "Oletko varma, että haluat muuttaa etusivun sisältöä?"
    };

    if (props.value === "editPricing" && props.valueTarget === "Pricing") {
      return "Oletko varma, että haluat muuttaa sivuston hinnastoa?" 
    };

    if (props.value === "primaryElement" && props.valueTarget === "Pricing") {
      return "Oletko varma, että haluat muuttaa hinnaston vasemmanpuoleisen (primary) elementin sisältöä?"
    };

    if (props.value === "secondaryElement" && props.valueTarget === "Pricing") {
      return "Oletko varma, että haluat muuttaa hinnaston oikeanpuoleisen (secondary) elementin sisältöä?"
    };

    if (props.value === "footerLocation" && props.valueTarget === "Footer") {
      return "Oletko varma, että haluat muuttaa nykyisten yhteystietojen sijaintia?"
    } else {
      return null
    };
  };

  const handleSubmit = () => {
    if (props.value === "primaryElement" && props.valueTarget === "Home") {
      submitHomeContent(props.valueTarget, props.value)
    };

    if (props.value === "editPricing" && props.valueTarget === "Pricing") {
      submitPricesDatabase();
    };

    if (props.value === "primaryElement" && props.valueTarget === "Pricing") {
      submitPriceContent(props.valueTarget, props.value)
    };

    if (props.value === "secondaryElement" && props.valueTarget === "Pricing") {
      submitPriceContent(props.valueTarget, props.value)
    };

    if (props.value === "footerLocation" && props.valueTarget === "Footer") {
      submitLocationDatabase();
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

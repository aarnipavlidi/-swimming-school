import React from 'react';
import OptionModal from './OptionModal';

import  { ModalStyling } from './ModalStyling';

const ConfirmModal = ({ submitHomeContent, submitPricesDatabase, submitLocationDatabase, submitPriceContent, ...props }) => {

  if (props.valueTarget === "Home") {
    return (
      <div className="modal fade" id="targetHomeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={ModalStyling.container}>
            <div className="modal-header">
              <h5 className="modal-title title-font" style={ModalStyling.title} id="staticBackdropLabel">Vahvista (Etusivu)</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <OptionModal submitHomeContent={submitHomeContent} value={props.value} valueTarget={props.valueTarget} styling={ModalStyling.button} />
          </div>
        </div>
      </div>
    )
  };

  if (props.valueTarget === "Pricing") {
    return (
      <div className="modal fade" id="targetPricingModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={ModalStyling.container}>
            <div className="modal-header">
              <h5 className="modal-title title-font" style={ModalStyling.title} id="staticBackdropLabel">Vahvista (Hinnasto)</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <OptionModal submitPricesDatabase={submitPricesDatabase} submitPriceContent={submitPriceContent} value={props.value} valueTarget={props.valueTarget} styling={ModalStyling.button} />
          </div>
        </div>
      </div>
    );
  };

  if (props.valueTarget === "Footer") {
    return (
      <div className="modal fade" id="targetFooterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={ModalStyling.container}>
            <div className="modal-header">
              <h5 className="modal-title title-font" style={ModalStyling.title} id="staticBackdropLabel">Vahvista (Yhteystiedot)</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <OptionModal submitLocationDatabase={submitLocationDatabase} value={props.value} valueTarget={props.valueTarget} styling={ModalStyling.button} />
          </div>
        </div>
      </div>
    );
  };

  return null;
};

export default ConfirmModal;

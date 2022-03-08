import React from 'react';
import OptionModal from './OptionModal';

import { ModalStyling } from './ModalStyling';

const ConfirModal = ({ handlePasswordChange, ...props }) => {

    return (
        <div className="modal fade" id="targetSettingsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={ModalStyling.container}>
              <div className="modal-header">
                <h5 className="modal-title title-font" style={ModalStyling.title} id="staticBackdropLabel">Vahvista toiminto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <OptionModal handlePasswordChange={handlePasswordChange} value={props.value} valueTarget={props.valueTarget} styling={ModalStyling.button} />
            </div>
          </div>
        </div>
      );
};

export default ConfirModal;
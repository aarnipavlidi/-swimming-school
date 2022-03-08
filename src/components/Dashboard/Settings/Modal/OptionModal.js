import React from 'react';

const OptionModal = ({ handlePasswordChange, ...props }) => {

    const showConfirmContent = () => {
        if (props.value === "changePassword" && props.valueTarget === "Settings") {
            return "Oletko varma, että haluat vaihtaa oman käyttäjätunnuksesi salasanan uuteen?"
        };

        if (props.value === "confirmEmail" && props.valueTarget === "Settings") {
            return "Oletko varma, että haluat vahvistaa sähköpostisi nykyisellä osoitteella?"
        };
    };

    const handleSubmit = () => {
        if (props.value === "changePassword" && props.valueTarget === "Settings") {
            handlePasswordChange();
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
                    <span>Kyllä</span>
                </button>
            </div>
        </div>
    );
};

export default OptionModal;
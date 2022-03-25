import React from "react";

import LabelFooter from "../Styling/Label";
import InputFooter from '../Styling/Input';
import ButtonContactReset from './ButtonContactReset';
import ButtonContactSubmit from './ButtonContactSubmit';

import { EditFooterContactContainer } from "../Styling/EditFooterStyling";

const ChangeEmail = ({ currentContent, currentContact, setCurrentContact, handleContactChange, handleModalChange, loadingUpdateEmail, loadingUpdatePhoneNumber, ...props }) => {

  const defaultEmailValue = !currentContent?.email ? "" : currentContent.email;
  const defaultNumberValue = !currentContent?.phoneNumber ? "" : currentContent.phoneNumber;

  return (
    <div className="col-12 col-md-6" style={EditFooterContactContainer.element}>
      <form>
        <div>
          <LabelFooter
            iconStyling="fa-solid fa-envelope"
            labelFor="contactEmailInput"
            labelName="Sähköpostiosoite"
          />
          <div className="input-group">
            <InputFooter
              id="contactEmailInput"
              type="email"
              name={props.inputEmail}
              currentValue={currentContact}
              defaultValue={defaultEmailValue}
              handleValueChange={handleContactChange}
            />
            <ButtonContactReset
              currentInputValue={currentContact.email}
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
              handleModalChange={handleModalChange}
              inputLoading={loadingUpdateEmail}
              inputElement="email"
            />
            <ButtonContactSubmit
              currentInputValue={currentContact.email}
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
              handleModalChange={handleModalChange}
              inputLoading={loadingUpdateEmail}
              inputElement="email"
            />
          </div>
        </div>
        <div>
          <LabelFooter
            iconStyling="fa-solid fa-phone"
            labelFor="contactNumberInput"
            labelName="Puhelinnumero"
          />
          <div className="input-group">
            <InputFooter
              id="contactNumberInput"
              type="number"
              name={props.inputNumber}
              currentValue={currentContact}
              defaultValue={defaultNumberValue}
              handleValueChange={handleContactChange}
            />
            <ButtonContactReset
              currentInputValue={currentContact.phoneNumber}
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
              handleModalChange={handleModalChange}
              inputLoading={loadingUpdateEmail}
              inputElement="phoneNumber"
            />
            <ButtonContactSubmit
              currentInputValue={currentContact.phoneNumber}
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
              handleModalChange={handleModalChange}
              inputLoading={loadingUpdateEmail}
              inputElement="phoneNumber"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
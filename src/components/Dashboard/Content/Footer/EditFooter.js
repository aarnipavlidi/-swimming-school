import React, { useState } from 'react';

import ChangeLocation from './Location/ChangeLocation';
import ButtonLocation from './Location/ButtonLocation';
import ChangeContact from './Contact/ChangeContact';

import ConfirmModal from '../Modal/ConfirmModal';

import { EditFooterMainContainer } from './Styling/EditFooterStyling';

const EditFooter = ({ currentContent, getNotification, updateCurrentLocation, loadingUpdateLocation, updateCurrentEmail, loadingUpdateEmail, updateCurrentPhoneNumber, loadingUpdatePhoneNumber, containerPosition }) => {
    
  const [currentChosenModal, setCurrentChosenModal] = useState(null);
  const handleModalChange = (getCurrentModal) => {
    setCurrentChosenModal(getCurrentModal)
  };  

  const [currentLocation, setCurrentLocation] = useState({
    address: null,
    postalCode: null,
    city: null,
  });

  const checkLocationStatus = Object.values(currentLocation).every(getValue => {
    if (getValue === null) {
      return true;
    }
    return false;
  });

  const handleLocationChange = (event) => {
    event.preventDefault();
    setCurrentLocation({ ...currentLocation, [event.target.name]: event.target.value });
  };

  const [currentContact, setCurrentContact] = useState({
    email: null,
    phoneNumber: null,
  });

  const handleContactChange = (event) => {
    event.preventDefault();
    setCurrentContact({ ...currentContact, [event.target.name]: event.target.value });
  };

  const submitLocationDatabase = async () => {

    const address = currentLocation.address ? currentLocation.address : !currentContent?.footer.location.address ? "" : currentContent.footer.location.address;
    const postalCode = currentLocation.postalCode ? currentLocation.postalCode : !currentContent?.footer.location.postalCode ? "" : currentContent.footer.location.postalCode;
    const city = currentLocation.city ? currentLocation.city : !currentContent?.footer.location.city ? "" : currentContent.footer.location.city;

    try {
      const response = await updateCurrentLocation({ address, postalCode, city });
      getNotification({
        message: response.updateLocation.response,
        status: true,
      });
      setCurrentLocation({ address: null, postalCode: null, city: null });
    } catch (error) {
      getNotification({
        message: error.message,
        status: false,
      })
    };
  };

  const submitContactDatabase = async (getInputElement) => {

    const email = currentContact.email ? currentContact.email : !currentContent?.footer.contact.email ? "" : currentContent.footer.contact.email;
    const phoneNumber = currentContact.phoneNumber ? currentContact.phoneNumber : !currentContent?.footer.contact.phoneNumber ? "" : currentContent.footer.contact.phoneNumber;

    try {

      if (getInputElement === "email") {
        const response = await updateCurrentEmail({ email });
        getNotification({
          message: response.updateEmail.response,
          status: true,
        });
        setCurrentContact({ ...currentContact, [getInputElement]: null });
      };

      if (getInputElement === "phoneNumber") {
        const response = await updateCurrentPhoneNumber({ phoneNumber });
        getNotification({
          message: response.updatePhoneNumber.response,
          status: true,
        });
        setCurrentContact({ ...currentContact, [getInputElement]: null });
      };

      return null
    } catch (error) {
      getNotification({
        message: error.message,
        status: false,
      })
    };
  };

  return (
    <div className={containerPosition ? "container content-container-behind" : "container"} style={EditFooterMainContainer.element}>
      <div style={EditFooterMainContainer.titleContainer}>
        <p className="shadow rounded content-font" style={EditFooterMainContainer.titleContent}>Yhteystiedot</p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <ChangeLocation
            currentContent={currentContent?.location}
            currentLocation={currentLocation}
            handleLocationChange={handleLocationChange}
            loadingUpdateLocation={loadingUpdateLocation}
            inputAddress="address"
            inputPostalCode="postalCode"
            inputCity="city"
          />
          <ButtonLocation
            checkLocationStatus={checkLocationStatus}
            setCurrentLocation={setCurrentLocation}
            handleModalChange={handleModalChange}
            loadingUpdateLocation={loadingUpdateLocation}
          />
        </div>
        <div className="col-12 col-md-6">
          <ChangeContact
            currentContent={currentContent?.contact}
            currentContact={currentContact}
            setCurrentContact={setCurrentContact}
            handleContactChange={handleContactChange}
            handleModalChange={handleModalChange}
            loadingUpdateEmail={loadingUpdateEmail}
            loadingUpdatePhoneNumber={loadingUpdatePhoneNumber}
            inputEmail="email"
            inputNumber="phoneNumber"
          />
        </div>
      </div>
      <ConfirmModal submitLocationDatabase={submitLocationDatabase} submitContactDatabase={submitContactDatabase} value={currentChosenModal} valueTarget="Footer" />
    </div>
  );
};

export default EditFooter;

import React, { useState } from 'react';

import ChangeLocation from './Location/ChangeLocation';
import ButtonLocation from './Location/ButtonLocation';

import ConfirmModal from '../Modal/ConfirmModal';

import { EditFooterMainContainer } from './EditFooterStyling';

const EditFooter = ({ currentContent, getNotification, updateCurrentLocation, loadingUpdateLocation, containerPosition }) => {

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
    setCurrentLocation({ ...currentLocation, [event.target.name]: event.target.value })
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
      </div>
      <ConfirmModal submitLocationDatabase={submitLocationDatabase} value={currentChosenModal} valueTarget="Footer" />
    </div>
  );
};

export default EditFooter;

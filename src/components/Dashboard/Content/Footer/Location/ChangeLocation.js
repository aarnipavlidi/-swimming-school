import React from "react";

import LabelLocation from "./LabelLocation";
import InputLocation from './InputLocation';

import { EditFooterLocationContainer } from '../EditFooterStyling';

const ChangeLocation = ({ currentContent, currentLocation, handleLocationChange, loadingUpdateLocation, ...props }) => {

  const defaultAddressValue = !currentContent?.address ? "" : currentContent.address;
  const defaultPostalCodeValue = !currentContent?.postalCode ? "" : currentContent.postalCode;
  const defaultCityValue = !currentContent?.city ? "" : currentContent.city;

  return (
    <div className="col-12 col-md-6" style={EditFooterLocationContainer.element}>
      <form>
        <div>
          <LabelLocation 
            iconStyling="fa-solid fa-map-location"
            labelFor="locationAddressInput"
            labelName="Osoite"
          />
          <InputLocation
            id="locationAddressInput"
            type="text"
            name={props.inputAddress}
            currentLocation={currentLocation}
            defaultLocation={defaultAddressValue}
            handleLocationChange={handleLocationChange}
          />
        </div>
        <div>
          <LabelLocation 
            iconStyling="fa-solid fa-map-pin"
            labelFor="locationPostalCodeInput"
            labelName="Postinumero"
          />
          <InputLocation
            id="locationPostalCodeInput"
            type="number"
            name={props.inputPostalCode}
            currentLocation={currentLocation}
            defaultLocation={defaultPostalCodeValue}
            handleLocationChange={handleLocationChange}
          />
        </div>
        <div>
          <LabelLocation 
            iconStyling="fa-solid fa-city"
            labelFor="locationCityInput"
            labelName="Kaupunki"
          />
          <InputLocation
            id="locationCityInput"
            type="text"
            name={props.inputCity}
            currentLocation={currentLocation}
            defaultLocation={defaultCityValue}
            handleLocationChange={handleLocationChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangeLocation;
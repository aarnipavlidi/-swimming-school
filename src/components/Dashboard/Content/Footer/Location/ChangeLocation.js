import React from "react";

import LabelFooter from "../Styling/Label";
import InputFooter from '../Styling/Input';

import { EditFooterLocationContainer } from '../Styling/EditFooterStyling';

const ChangeLocation = ({ currentContent, currentLocation, handleLocationChange, loadingUpdateLocation, ...props }) => {

  const defaultAddressValue = !currentContent?.address ? "" : currentContent.address;
  const defaultPostalCodeValue = !currentContent?.postalCode ? "" : currentContent.postalCode;
  const defaultCityValue = !currentContent?.city ? "" : currentContent.city;

  return (
    <div className="col-12 col-md-6" style={EditFooterLocationContainer.element}>
      <form>
        <div>
          <LabelFooter 
            iconStyling="fa-solid fa-map-location"
            labelFor="locationAddressInput"
            labelName="Osoite"
          />
          <InputFooter
            id="locationAddressInput"
            type="text"
            name={props.inputAddress}
            currentValue={currentLocation}
            defaultValue={defaultAddressValue}
            handleValueChange={handleLocationChange}
          />
        </div> 
        <div>
          <LabelFooter 
            iconStyling="fa-solid fa-map-pin"
            labelFor="locationPostalCodeInput"
            labelName="Postinumero"
          />
          <InputFooter
            id="locationPostalCodeInput"
            type="number"
            name={props.inputPostalCode}
            currentValue={currentLocation}
            defaultValue={defaultPostalCodeValue}
            handleValueChange={handleLocationChange}
          />
        </div>
        <div>
          <LabelFooter 
            iconStyling="fa-solid fa-city"
            labelFor="locationCityInput"
            labelName="Kaupunki"
          />
          <InputFooter
            id="locationCityInput"
            type="text"
            name={props.inputCity}
            currentValue={currentLocation}
            defaultValue={defaultCityValue}
            handleValueChange={handleLocationChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangeLocation;